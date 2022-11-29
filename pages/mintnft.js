import React from 'react'
import Navbar from '../components/Navbar'
import {ethers} from 'ethers'
import {useState} from 'react'
import Web3Modal from 'web3modal'
import {useRouter} from 'next/router'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import NFTMarket from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import { nftaddress,nftmarketaddress } from '../config'
import {create as ipfsHttpClient} from 'ipfs-http-client'

import Image from 'next/image'
const client = ipfsHttpClient('https://nft-dev2innovate.infura-ipfs.io');
function Mintnft() {
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({price: '', name:'',
description:''})
  const router = useRouter()



  // set up a function to fireoff when we update files in our form - we can add our 
    // NFT images - IPFS

    async function onChange(e) {
      const file = e.target.files[0]
      try {
      const added = await client.add(
          file, {
              progress: (prog) => console.log(`received: ${prog}`)
          })
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)
      } catch (error) {
          console.log('Error uploading file:', error)
      }
  }

  async function createMarket() {
      const {name, description, price} = formInput 
      if(!name || !description || !price || !fileUrl) return 
      // upload to IPFS
      const data = JSON.stringify({
          name, description, image: fileUrl
      })
      try {
          const added = await client.add(data)
          const url = `https://ipfs.infura.io/ipfs/${added.path}`
          // run a function that creates sale and passes in the url 
          createSale(url)
          } catch (error) {
              console.log('Error uploading file:', error)
          }
  }

  async function createSale(url) {
      // create the items and list them on the marketplace
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()

      // we want to create the token
      let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
      let transaction = await contract.mintToken(url)
      let tx = await transaction.wait()
      let event = tx.events[0]
      let value = event.args[2]
      let tokenId = value.toNumber()
      const price = ethers.utils.parseUnits(formInput.price, 'ether')
      
      // list the item for sale on the marketplace 
      contract = new ethers.Contract(nftmarketaddress, NFTMarket.abi, signer)
      let listingPrice = await contract.getListingPrice()
      listingPrice = listingPrice.toString()

      transaction = await contract.makeMarketItem(nftaddress, tokenId, price, {value: listingPrice})
      await transaction.wait()
      router.push('./')
  }
  return (
    <div>
      <Navbar/>
      
      <div className='flex justify-center'>
            <div className='w-1/2 flex flex-col pb-12'>
                <input
                placeholder='Asset Name'
                className='mt-8 border rounded p-4'
                onChange={ e => updateFormInput({...formInput, name: e.target.value})} 
                />
                <textarea
                placeholder='Asset Description'
                className='mt-2 border rounded p-4'
                onChange={ e => updateFormInput({...formInput, description: e.target.value})} 
                />
                <input
                placeholder='Asset Price in Eth'
                className='mt-2 border rounded p-4'
                onChange={ e => updateFormInput({...formInput, price: e.target.value})} 
                />
                <input
                type='file'
                name='Asset'
                className='mt-4'
                onChange={onChange} 
                /> {
                fileUrl && (
                    <Image className='rounded mt-4' width='350px' src={fileUrl} alt='f'/>
                )}
                <button onClick={createMarket}
                className='font-bold mt-4 bg-purple-500 text-white rounded p-4 shadow-lg'
                >
                    Mint NFT
                </button>
            </div>
        </div>
      
      
      
      
      </div>
  )
}

export default Mintnft
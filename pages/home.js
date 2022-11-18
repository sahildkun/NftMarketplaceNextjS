import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Middle from "../components/Middle"
import Artist from '../components/ArtistCard'
import Footer from "../components/Footer"

function home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Middle/>
      <Artist/>
      <Footer/></div>
  )
}

export default home
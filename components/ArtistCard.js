import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import img1 from '../public/Avatar1.png'
import img2 from '../public/Avatar2.png'
import img3 from '../public/Avatar3.png'
import img4 from '../public/Avatar4.png'
import bg1 from '../public/Avatar1bg.png'
import bg2 from '../public/Avatar2bg.png'
import bg3 from '../public/Avatar3bg.png'
import bg4 from '../public/Avatar4bg.png'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from './Card';
function Artist() {
  return (
    <div>

        <Carousel
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        >
          <div>
          <div class=" grid grid-cols-1 lg:grid-cols-4 lg:gap-3 gap-4 justify-items-center p-12 bg-bgpic">
          <Card  img={img1} imgg={bg1} artist={"Hibnastiar"} network={"27.3k"}  followstats={"Follow"} />
          <Card  img={img2} imgg={bg2} artist={"Tukirin"} network={"21.6k"}  followstats={"Follow"} />
          <Card  img={img3} imgg={bg3} artist={"Aksaraz"} network={"14.0k"}  followstats={"Follow"} />
          <Card  img={img4} imgg={bg4} artist={"Yuk Jum"} network={"11.9k"}  followstats={"Follow"} />
          
        

          </div>
          </div>
          
          <div>
          <div class=" grid grid-cols-1 lg:grid-cols-4 lg:gap-3 justify-items-center p-12 bg-bgpic">
          <Card  img={img1} imgg={bg1} artist={"Hibnastiar"} network={"27.3k"}  followstats={"Follow"} />
          <Card  img={img2} imgg={bg2} artist={"Tukirin"} network={"21.6k"}  followstats={"Follow"} />
          <Card  img={img3} imgg={bg3} artist={"Aksaraz"} network={"14.0k"}  followstats={"Follow"} />
          <Card  img={img4} imgg={bg4} artist={"Yuk Jum"} network={"11.9k"}  followstats={"Follow"} />
          
        

          </div>

          </div>
          
          

        </Carousel>

    </div>
  )
}

export default Artist

import { menu } from "@/app/_api/menu.json";
import { general_photos } from "@/app/_api/photos.json";
import Hero from "@/app/_components/home/hero/Hero";
import HomeMenu from "@/app/_components/home/homeMenu/homeMenu";

import VideoComponent from "@/app/_components/home/video/Video";
import Carousel from "@/app/_components/home/carousel/Carousel";
import {statics} from "@/app/_api/statics.json";
import Contact from "@/app/_components/home/contact-info/Contact";

export default function HomePage() {
    return (
        <div className="">

            <Hero/>
            <HomeMenu categories={menu}/>
           <VideoComponent/>
            <Carousel  />
            <Contact />

        </div>
    );
}

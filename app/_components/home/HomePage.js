
import { menu } from "@/app/_api/menu.json";
import Hero from "@/app/_components/home/hero/Hero";
import Text from "@/app/_components/home/text/Text";
import HomeMenu from "@/app/_components/home/homeMenu/homeMenu";
import Staff from "@/app/_components/home/staff/Staff";

import VideoComponent from "@/app/_components/home/video/Video";

export default function HomePage() {
    return (
        <div className="">

            <Hero/>
            {/*<Text/>*/}
            <HomeMenu categories={menu}/>
           <VideoComponent/>
            <Staff/>

        </div>
    );
}

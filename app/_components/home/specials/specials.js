import Image from "next/image"
import photo1 from "/public/images/photo8.jpg"
import Link from "next/link";
import {meat} from "@/app/_api/rawmeat.json";

export default function Specials() {
    return (
        // <div className="flex justify-center">
        //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        //         <div className="flex justify-center">
        //             <Image src={photo1} alt="specials" className='rounded-[20px]' width={490} height={300}/>
        //         </div>
        //         <div className="flex justify-center">
        //             <div className="cr cr-top cr-right cr-sticky cr-red">special!</div>
        //             <Image src={photo1} alt="specials" className='rounded-[20px]' width={490} height={300}/>
        //         </div>
        //     </div>
        // </div>
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-center">
                    <div className="ribbon-container">
                        <div className="">
                            <Link href={`/menu/dishes/raw-meat`} >
                                <Image src={photo1} alt="specials" className='rounded-[20px]' width={490} height={250}/>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="ribbon-container">
                        <div className="image-container">
                            <Image src={photo1} alt="specials" className='rounded-[20px]' width={490} height={250}/>
                            <div className="cr cr-top cr-right cr-red">عرض خاص</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

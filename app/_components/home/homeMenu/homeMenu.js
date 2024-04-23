"use client"
import { useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
//
// function HomeMenu({ categories }) {
//     const NextArrow = ({ onClick }) => {
//         return (
//             <div className="arrow next" onClick={onClick}>
//                 <FaAngleRight />
//             </div>
//         );
//     };
//
//     const PrevArrow = ({ onClick }) => {
//         return (
//             <div className="arrow prev" onClick={onClick}>
//                 <FaAngleLeft />
//             </div>
//         );
//     };
//
//     const [imageIndex, setImageIndex] = useState(0);
//
//
//     const settings = {
//         infinite: true,
//         lazyLoad: true,
//         speed: 300,
//         slidesToShow: 5, // Show 5 slides by default
//         centerMode: true,
//         centerPadding: 0,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//         beforeChange: (current, next) => setImageIndex(next),
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//
//                 },
//             },
//         ],
//     };
//
//     return (
//         <div className='mt-10'>
//             <div className="hero">
//                 <div className="hero-content text-center text-neutral-content">
//                     <div className="max-w-2xl mx-auto">
//                         <h1 className="mb-5 text-3xl text-white font-semibold">اكتشف قائمة وجباتنا المميزة</h1>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="homemenu-container">
//                 <Slider {...settings}>
//                     {categories.map((category, index) => (
//                         <div  key={index} className={index === imageIndex ? "slide activeSlide" : "slide"}>
//
//                                 <div className="card slide rounded">
//                                     <Link href={`/menu/${category.link}`}>
//                                         <img src={`/images/${category.category_photo}`} className="card-img object-cover aspect-ratio-square md:w-20 " alt={category.name}/>
//                                         <h2>{category.category_name}</h2>
//                                     </Link>
//                                 </div>
//
//
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// }
//
// export default HomeMenu;


function HomeMenu({ categories }) {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaAngleRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaAngleLeft />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 5, // Show 5 slides by default
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className='mt-10'>
            <div className="hero">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="mb-5 text-3xl text-white font-semibold">اكتشف قائمة وجباتنا المميزة</h1>
                    </div>
                </div>
            </div>

            <div className="homemenu-container">
                <Slider {...settings}>
                    {categories.map((category, index) => (
                        <div key={index} className={index === imageIndex ? "slide activeSlide" : "slide"}>
                            <div className="card slide rounded">
                                <Link href={`/menu/${category.link}`}>
                                    <img src={`/images/${category.category_photo}`} className="card-img object-cover w-full h-full rounded" alt={category.name}/>
                                    <h2>{category.category_name}</h2>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default HomeMenu;

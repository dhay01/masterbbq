
// "use client"
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from "next/image";
// import { useRouter } from 'next/navigation';
// const menuData = require('../../_api/menu.json');
//
// const Menu = () => {
//
//     const router = useRouter();
//
//     const handleCategoryClick = (categoryId) => {
//
//         router.push(`/menu/${categoryId}`);
//     };
//
//
//
//     return (
//         <div className="flex min-h-screen flex-col items-center justify-between p-24">
//             <div className="hero-content text-center text-neutral-content">
//                 <div className="max-w-md">
//                     <h1 className="mb-5 text-5xl text-white font-bold">our menu</h1>
//                 </div>
//             </div>
//
//             <div className="flex flex-wrap justify-center gap-4">
//                 <h1>{C}</h1>
//
//                 {/*{menuData.menu.map((category) => (*/}
//                 {/*    <div key={category.category_id} className="category-card" onClick={() => handleCategoryClick(category.category_id)}>*/}
//                 {/*        <Image  src={`/images/${category.category_photo}`} alt={category.category_name} width={100} height={100} />*/}
//                 {/*        <h3>{category.category_name}</h3>*/}
//                 {/*    </div>*/}
//                 {/*))}*/}
//
//             </div>
//
//
//
//         </div>
//     );
// };
//
// export default Menu;
//
//
import Menu from '@/app/_components/menucomponent/Menucomponent'
import { menu } from "@/app/_api/menu.json";

export default function Menupage(){
    return<Menu categories={menu}/>
}

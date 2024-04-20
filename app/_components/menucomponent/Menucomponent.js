"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/navigation';


const Menu = ({ categories }) => {


    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-white font-bold">قائمة الطعام</h1>
                </div>
            </div>

            <div className="container mx-auto ">
                <div className="flex justify-center pt-10">
                    <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16">
                        {categories.map((category) => (
                            <div key={category.id} className="card w-96 md:w-[300px] bg-base-100 shadow-xl">
                                <Link href={`/menu/${category.link}`}>
                                    <div className="image-container">
                                        <figure className="px-10 pt-10">
                                            <img src={`/images/${category.category_photo}`} alt={category.category_name} className="card-img rounded-xl" />
                                        </figure>

                                    </div>
                                </Link>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{category.category_name}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Menu;



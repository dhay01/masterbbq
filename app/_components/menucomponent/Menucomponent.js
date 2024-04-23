

"use client"
import React, {useState, useEffect} from 'react';
import Link from 'next/link';


const Menu = ({categories}) => {


    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-white font-bold">قائمة الطعام</h1>
                </div>
            </div>


            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-center pt-10">
                    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-20 md:gap-y-10 gap-y-20">
                        {categories.map((category) => (
                            <div key={category.id} className="card bg-base-100 shadow-xl max-w-md mx-auto">
                                <Link href={`/menu/${category.link}`}>
                                    <div className="image-container">
                                        <figure className="px-10 pt-10">

                                            <img src={`/images/${category.category_photo}`} alt={category.category_name}
                                                 className="rounded-xl card-img object-cover "
                                            />

                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">{category.category_name}</h2>


                                        </div>

                                    </div>
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Menu;



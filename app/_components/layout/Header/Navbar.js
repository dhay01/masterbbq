"use client";

import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
    return (
        <main className="">

            <div className="navbar bg-base-100 ">
                <div className="flex-1">
                    <Image
                        src="/images/photo2.png"
                        alt="hero image"
                        width={70}
                        height={70}
                    />

                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/">home</Link></li>
                        <li><Link href="/menu">menu</Link></li>
                        <li><Link href="https://wa.me/9647505072244" target="_blank" rel="noopener noreferrer">book a table</Link></li>
                        <li><Link href="/">language</Link></li>
                    </ul>
                </div>
            </div>

        </main>
    );
}

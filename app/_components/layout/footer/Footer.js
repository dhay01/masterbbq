import Image from "next/image";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";


export default function Footer() {
    return (
        <>
            <footer className="footer p-6 md:p-10 bg-base-100 text-base-content flex flex-wrap md:flex-nowrap justify-between">
                <aside className="w-full md:w-auto mb-6 md:mb-0 md:mr-6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.8413438747493!2d43.96203677572103!3d36.194740201595344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400723096f7c3b6f%3A0x5a4565d3cbea089e!2sMaster%20BBQ%20Erbill!5e0!3m2!1sen!2siq!4v1712672778248!5m2!1sen!2siq"
                        width="100%" height="250" style={{ border: '0' }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </aside>
                <nav className="w-full md:w-auto mb-4 md:mb-0 md:mr-4">
                    <h6 className="footer-title">Opening Hours</h6>
                    <p>12:00 AM - 12:00 PM</p>
                </nav>
                <nav className="w-full md:w-auto mb-4 md:mb-0 md:mr-4">
                    <h6 className="footer-title">Contact Numbers</h6>
                    <p>+964 750 507 22 44</p>
                    <p>+964 772 707 22 44</p>
                    <p>+964 750 507 22 66</p>
                </nav>
                <nav className="w-full md:w-auto">
                    <h6 className="footer-title">Address</h6>
                    <p style={{ maxWidth: '250px' }}>100 Meter Street - Two Side Toyota Saz - MR5 - Opposite To Sakura Park</p>
                </nav>
            </footer>

            <footer className="footer p-4 md:p-6 bg-neutral text-neutral-content flex items-center justify-between">
                <Image src="/images/photo2.png" alt="logo" width="100" height="100"/>
                <nav className="grid grid-flow-col gap-4">
                    <a>
                        <RiInstagramFill size="25"/>
                    </a>
                    <a>
                        <FaSquareFacebook size="25"/>
                    </a>
                    <a>
                        <IoLogoYoutube size="25"/>
                    </a>
                </nav>
            </footer>
        </>



    );
}

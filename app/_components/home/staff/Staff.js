import Image from "next/image";

export default function Staff() {
    return (
        <div className="mb-10 ">
            <div className="hero py-12">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="mb-5 text-3xl text-white font-bold">meet our staff!</h1>
                    </div>
                </div>
            </div>


            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src="/images/photo19.jpg"
                        alt="Staff 1"
                        width={400}
                        height={520}
                        className="staff"
                        objectFit="cover"
                    />
                    <h2 className="text-xl  text-white mb-2">John Doe</h2>
                    <p className="text-sm  text-gray-300">Manager</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src="/images/photo19.jpg"
                        alt="Staff 1"
                        width={400}
                        height={520}
                        className="staff"
                        objectFit="cover"
                    />
                    <h2 className="text-xl font-bold text-white mb-2">Jane Smith</h2>
                    <p className="text-sm  text-gray-300">chef</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src="/images/photo19.jpg"
                        alt="Staff 1"
                        width={400}
                        height={520}
                        className="staff"
                        objectFit="cover"
                    />
                    <h2 className="text-xl font-bold text-white mb-2">Alice Johnson</h2>
                    <p className="text-sm  text-gray-300">chef</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src="/images/photo19.jpg"
                        alt="Staff 1"
                        width={400}
                        height={520}
                        className="staff"
                        objectFit="cover"
                    />
                    <h2 className="text-xl font-bold text-white mb-2">Robert Williams</h2>
                    <p className="text-sm  text-gray-300">chef</p>
                </div>
            </div>
        </div>


    )
        ;
}

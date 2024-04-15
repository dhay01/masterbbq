import Image from "next/image";

export default function Hero() {
    return (
        <main className="">
            <div className="hero" style={{backgroundImage: 'url(/images/photo7.jpg)', minHeight: '600px'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-white font-bold">Where Every Meal is a Masterpiece.</h1>
                        <p className="mb-5 text-white">Etiam convallis dolor nec vehicula rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent..</p>
                        <button  className="btn text-white rounded btn-warning">view our menu</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

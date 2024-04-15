import { menu } from "@/app/_api/menu.json";
import Image from "next/image";

export default function Brisket() {
    // Find the category with id=1 (Box Meal)
    const BrisketCategory = menu.find((category) => category.category_id === "7");


    if (BrisketCategory) {
        return (
            <div>
                <main className="">
                    <div className="hero" style={{backgroundImage: `url(/images/${BrisketCategory.category_photo})`, minHeight: '600px'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl text-white font-bold">{BrisketCategory.category_name}</h1>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="container mx-auto px-4 py-8">
                    <div className="flex justify-center pt-10">
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-40 gap-y-20">
                            {BrisketCategory.dishes.map((dish) => (
                                <div key={dish.id} className="card w-96 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src={`/images/${dish.photo}`} alt={dish.name} className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{dish.name}</h2>
                                        <p>{dish.description}</p>

                                        <div className="card-actions">
                                            <button disabled className="btn btn-primary">{dish.price}</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        );
    } else {
        return <h1>Category not found</h1>;
    }
}

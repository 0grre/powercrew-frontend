import React from "react";

export default function Opportunities() {
    return (
        <>
            <section className="hero bg-black py-12">
                    <div className="container">
                        <div className="ml-0 my-12 w-1/2">
                            <h2 className="text-secondary font-open italic mb-6">Les Opportunités</h2>
                            <h1 className="text-6xl text-base-100 font-open uppercase">nos différentes opportunités</h1>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 my-12">
                            <div className="card mx-auto bg-base-100 shadow-xl hover:scale-105 duration-300">
                                <div className="card-body text-center">
                                    <h2 className="font-bold text-secondary">petit texte</h2>
                                    <h1 className="text-2xl font-open not-italic uppercase">challenger</h1>
                                </div>
                                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
                            </div>
                            <div className="card mx-auto bg-base-100 shadow-xl hover:scale-105 duration-300">
                                <div className="card-body text-center">
                                    <h2 className="font-bold">petit texte</h2>
                                    <h1 className="text-2xl font-open not-italic uppercase">client vip</h1>
                                </div>
                                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
                            </div>
                            <div className="card mx-auto bg-base-100 shadow-xl hover:scale-105 duration-300">
                                <div className="card-body text-center">
                                    <h2 className="font-bold">petit texte</h2>
                                    <h1 className="text-2xl font-open not-italic uppercase">ambassador</h1>
                                </div>
                                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
                            </div>
                        </div>
                    </div>

            </section>

        </>
    );
};

import React from "react";

export default function Results({anchor}) {

    return (
        <>
            <section ref={anchor} className="hero py-12">
                <div className="container">
                    <div className="ml-6 ml-0 my-12 w-2/3 lg:w-2/5">
                        <h2 className="text-secondary font-open italic mb-6">Les Résultats</h2>
                        <h1 className="text-6xl font-open uppercase">Des résultats visible <span className="text-primary">rapidement</span></h1>
                    </div>

                <div className="w-64 carousel rounded-box">
                    <div className="carousel-item w-full">
                        <img src="https://placeimg.com/256/400/arch" className="w-full"
                             alt="Tailwind CSS Carousel component"/>
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://placeimg.com/256/400/arch" className="w-full"
                             alt="Tailwind CSS Carousel component"/>
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://placeimg.com/256/400/arch" className="w-full"
                             alt="Tailwind CSS Carousel component"/>
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://placeimg.com/256/400/arch" className="w-full"
                             alt="Tailwind CSS Carousel component"/>
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://placeimg.com/256/400/arch" className="w-full"
                             alt="Tailwind CSS Carousel component"/>
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://placeimg.com/256/400/arch" className="w-full"
                             alt="Tailwind CSS Carousel component"/>
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://placeimg.com/256/400/arch" className="w-full"
                             alt="Tailwind CSS Carousel component"/>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

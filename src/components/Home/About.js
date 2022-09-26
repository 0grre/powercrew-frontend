import React from "react";
import VideoPlayer from "@/components/VideoPlayer";

export default function About({anchor}) {
    return (
        <>
            <section ref={anchor} className="hero py-12" style={{backgroundImage:'url(https://www.hopculture.fr/wp-content/themes/hopculture/dist/imgs/texture-1.jpg)'}}>
                <div className="container">
                    <div className="ml-6 mt-12">
                        <h2 className="text-secondary font-open italic mb-6">Qui sommes nous ?</h2>
                        <h1 className="text-6xl font-open uppercase">Power Crew: <span className="text-primary">phrase d'accroche cool</span></h1>
                    </div>
                    <div className="py-12">
                        <div className="bg-primary mx-auto my-12 xl:px-24 lg:px-12 md:px-6 px-3 rounded-xl w-11/12">
                            <VideoPlayer></VideoPlayer>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

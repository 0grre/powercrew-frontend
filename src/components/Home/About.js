import React from "react";
import VideoPlayer from "@/components/VideoPlayer";

export default function About({anchor}) {
    return (
        <>
            <section ref={anchor} className="hero py-12" style={{backgroundImage:'url(https://www.hopculture.fr/wp-content/themes/hopculture/dist/imgs/texture-1.jpg)'}}>
                <div className="container">
                    <div className="ml-6 mt-12">
                        <h2 className="text-gray-400 font-open italic mb-6">Qui sommes nous ?</h2>
                        <h1 className="text-6xl font-open uppercase text-center">Power Crew: <span className="text-primary">phrase d'accroche cool</span></h1>
                    </div>
                    {/*<div className="container">*/}
                    {/*    <div className="mr-0 ml-auto mb-6 w-1/2 p-6 border border-secondary rounded-xl">*/}
                    {/*        <h1 className="text-2xl underline underline-offset-4 font-bold capitalize">title</h1>*/}
                    {/*        <p className="text-lg text-justify">*/}
                    {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor*/}
                    {/*            incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit amet luctus*/}
                    {/*            venenatis. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Semper quis*/}
                    {/*            lectus nulla at. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.*/}
                    {/*            <br/>*/}
                    {/*            <br/>*/}
                    {/*            Dui nunc mattis enim ut tellus elementum sagittis. Mauris vitae ultricies leo integer*/}
                    {/*            malesuada nunc. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.*/}
                    {/*            Libero enim sed faucibus turpis in eu. .*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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

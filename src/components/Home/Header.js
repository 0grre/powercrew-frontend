import React from "react";


export default function Header({anchor, anchor1, scrollIntoAnchor}) {
    return (
        <>
            <section className="hero min-h-screen" ref={anchor}
                 style={{backgroundImage: 'url(https://placeimg.com/1000/800/arch)'}}>
                <div className="hero-content text-center">
                    <div className="text-base-100">
                        <h1 className="text-9xl font-open uppercase">ta seule limite, c'est toi</h1>
                        <button onClick={() => scrollIntoAnchor(anchor1)} className="btn btn-secondary mt-48 ">Découvrir
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 384 512">
                                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

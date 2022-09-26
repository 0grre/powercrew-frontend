import React, {useState} from "react";

export default function Opportunities({anchor}) {

    const [open, setOpen] = useState(false)

    const openCollapse = () => {setOpen(!open)}

    return (
        <>
            <section ref={anchor} className="hero bg-black py-12">
                <div className="container">
                    <div className="ml-6 my-12 w-2/5">
                        <h2 className="text-secondary font-open italic mb-6">Les Opportunités</h2>
                        <h1 className="text-6xl text-base-100 font-open uppercase">nos différentes opportunités</h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 my-12">
                        <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl hover:scale-105 hover:origin-bottom hover:rotate-2 duration-300 cursor-pointer">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
                            <div className="card-body">
                                <h1 className="text-2xl text-center font-open not-italic uppercase">challenger</h1>

                                <p className="m-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id
                                    eu nisl. Congue quisque egestas diam in arcu cursus euismod. Ipsum a arcu cursus
                                    vitae congue mauris</p>

                                <div className="card-actions justify-end">
                                    <a className="btn btn-secondary btn-sm">En savoir plus ?</a>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl hover:scale-105 hover:origin-bottom hover:rotate-2 duration-300 cursor-pointer">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
                            <div className="card-body">
                                <h1 className="text-2xl text-center font-open not-italic uppercase">client vip</h1>

                                <p className="m-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id
                                    eu nisl. Congue quisque egestas diam in arcu cursus euismod. Ipsum a arcu cursus
                                    vitae congue mauris</p>

                                <div className="card-actions justify-end">
                                    <a className="btn btn-secondary btn-sm">En savoir plus ?</a>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl hover:scale-105 hover:origin-bottom hover:rotate-2 duration-300 cursor-pointer">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
                            <div className="card-body">
                                <h1 className="text-2xl text-center font-open not-italic uppercase">ambassadeur</h1>

                                <p className="m-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id
                                    eu nisl. Congue quisque egestas diam in arcu cursus euismod. Ipsum a arcu cursus
                                    vitae congue mauris</p>

                                <div className="card-actions justify-end">
                                    {/*<button onClick={openCollapse} className="btn btn-secondary btn-sm">En savoir plus*/}
                                    {/*    ?*/}
                                    {/*</button>*/}
                                    <a className="btn btn-secondary btn-sm">En savoir plus ?</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </>
    );
};

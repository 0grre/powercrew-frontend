import Head from 'next/head'
import Header from "@/components/Home/Header";
import Opportunities from "@/components/Home/Opportunities";
import Footer from "@/components/Layouts/Footer";
import React, {useRef} from "react";
import Testimonies from "@/components/Home/Testimonies";
import About from "@/components/Home/About";
import Results from "@/components/Home/Result";
import Link from "next/link";

export default function Home() {
    // const {user} = useAuth({middleware: 'guest'})

    const anchorRefs = {
        anchor0: useRef(null),
        anchor1: useRef(null),
        anchor2: useRef(null),
        anchor3: useRef(null),
        anchor4: useRef(null)
    }

    const scrollIntoAnchor = (anchor) => {
        anchor.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <Head>
                <title>Power Crew</title>
            </Head>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content flex flex-col">

                    {/*Navbar*/}
                    <div className="flex justify-center">
                        <div className="navbar w-11/12 flex bg-base-100 my-2 fixed z-50 rounded-3xl shadow">
                            <div className="navbar-start">
                                <div className="flex-none lg:hidden">
                                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             className="inline-block w-6 h-6 stroke-current">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M4 6h16M4 12h16M4 18h16"></path>
                                        </svg>
                                    </label>
                                </div>
                                <button onClick={() => scrollIntoAnchor(anchorRefs.anchor0)}
                                       className="btn btn-ghost text-xl rounded-2xl font-open">POWER <span
                                        className="text-primary">CREW</span>
                                    </button>
                            </div>
                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal p-0 font-open font-light capitalize">
                                    <li>
                                        <a onClick={() => scrollIntoAnchor(anchorRefs.anchor1)}>qui sommes nous</a>
                                    </li>
                                    <li>
                                        <a onClick={() => scrollIntoAnchor(anchorRefs.anchor2)}>opportunités</a>
                                    </li>
                                    <li>
                                        <a onClick={() => scrollIntoAnchor(anchorRefs.anchor3)}>résultats</a>
                                    </li>
                                    <li>
                                        <a onClick={() => scrollIntoAnchor(anchorRefs.anchor4)}>témoignages</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar-end">
                                <Link href="https://instagram.com">
                                    <a className="btn btn-secondary btn-circle mx-1">
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="18"
                                             height="18" viewBox="0 0 320 512">
                                            <path
                                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                                        </svg>
                                    </a>
                                </Link>
                                <Link href="https://instagram.com">
                                    <a className="btn btn-secondary btn-circle mx-1">
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="18"
                                             height="18" viewBox="0 0 448 512">
                                            <path
                                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                        </svg>
                                    </a>
                                </Link>
                                <Link href="/login">
                                    <a className="btn btn-secondary btn-circle mx-1">
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg"
                                             width="18" height="18" viewBox="0 0 512 512">
                                            <path
                                                d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0S112 64.5 112 144s64.5 144 144 144zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7H481.3c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320H161.3z"/>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/*Page content here*/}
                    <Header anchor={anchorRefs.anchor0} anchor1={anchorRefs.anchor1}
                            scrollIntoAnchor={scrollIntoAnchor}/>
                    <About anchor={anchorRefs.anchor1}/>
                    <Opportunities anchor={anchorRefs.anchor2}/>
                    {/*<Results anchor={anchorRefs.anchor3}/>*/}
                    <Testimonies anchor={anchorRefs.anchor4}/>
                    <Footer/>

                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <div className="menu p-4 overflow-y-auto w-80 bg-base-100 justify-between">


                        <ul className="font-open font-light capitalize">
                            {/*Sidebar content here*/}
                            <li>
                                <a onClick={() => scrollIntoAnchor(anchorRefs.anchor1)}>Qui sommes nous</a>
                            </li>
                            <li>
                                <a onClick={() => scrollIntoAnchor(anchorRefs.anchor2)}>opportunités</a>
                            </li>
                            <li>
                                <a onClick={() => scrollIntoAnchor(anchorRefs.anchor3)}>résultats</a>
                            </li>
                            <li>
                                <a onClick={() => scrollIntoAnchor(anchorRefs.anchor4)}>témoignages</a>
                            </li>
                        </ul>
                        <div className="flex flex-row justify-center">
                            <Link href="https://instagram.com">
                                <a target="_blank" className="btn btn-secondary btn-circle mx-1">
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="18"
                                         height="18" viewBox="0 0 320 512">
                                        <path
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                                    </svg>
                                </a>
                            </Link>
                            <Link href="https://instagram.com">
                                <a target="_blank" className="btn btn-secondary btn-circle mx-1">
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="18"
                                         height="18" viewBox="0 0 448 512">
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                    </svg>
                                </a>
                            </Link>
                            <Link href="/login">
                                <a className="btn btn-secondary btn-circle mx-1">
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="18"
                                         height="18" viewBox="0 0 512 512">
                                        <path
                                            d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0S112 64.5 112 144s64.5 144 144 144zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7H481.3c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320H161.3z"/>
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

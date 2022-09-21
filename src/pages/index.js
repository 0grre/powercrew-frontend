import Head from 'next/head'
import {useAuth} from '@/hooks/auth'
import Header from "@/components/Header";
import Opportunities from "@/components/Home/Opportunities";
import Footer from "@/components/Layouts/Footer";

export default function Home() {
    const {user} = useAuth({middleware: 'guest'})

    return (
        <>
            <Head>
                <title>Power Crew</title>
            </Head>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content flex flex-col">

                     {/*Navbar*/}
                    <div className="navbar fixed z-50">
                    <div className="flex w-full bg-white mx-12 py-2 rounded-3xl shadow">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="inline-block w-6 h-6 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Navbar Title</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                 {/*Navbar menu content here*/}
                                <li><a>Qui sommes nous</a></li>
                                <li><a>les opportunités</a></li>
                                <li><a>les opportunités</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>

                     {/*Page content here*/}
                    <div className="hero min-h-screen" style={{backgroundImage:'url(https://placeimg.com/1000/800/arch)'}}>
                        <div className="hero-content text-center">
                            <div className="text-base-100">
                                <h1 className="text-9xl font-open uppercase">ta seule limite, c'est toi</h1>
                            </div>
                        </div>
                    </div>
                    <Header/>
                    <Opportunities/>
                    <Footer/>

                </div>


                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                         {/*Sidebar content here*/}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

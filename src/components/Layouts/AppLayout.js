import Navigation from '@/components/Layouts/Navigation'
import Footer from "@/components/Layouts/Footer";
import {useAuth} from '@/hooks/auth'
import Link from "next/link";

const AppLayout = ({header, children}) => {
    const {user} = useAuth({middleware: 'auth'})

    const { logout } = useAuth()

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content flex flex-col">
                {/*Navbar*/}
                <div className="w-full navbar flex bg-base-100 border-b-2">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1 group">
                        <button className="text-3xl font-open transition ease-out duration-300 group-hover:hidden">POWER<span
                            className="text-primary">CREW</span>
                        </button>
                        <Link href="/">
                            <a className="text-3xl font-open transition ease-in duration-300 hidden group-hover:flex">GO <span
                                className="text-primary"> HOME</span>
                            </a>
                        </Link>
                    </div>
                    <div className="flex-none gap-2">
                        {/*<div className="form-control">*/}
                        {/*    <input type="text" placeholder="Search" className="input input-bordered" />*/}
                        {/*</div>*/}
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-primary btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" alt="avatar" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link href="/profile">
                                        <a>
                                            Profil
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <a onClick={logout}>
                                        Déconnexion
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="flex">
                    <div className="min-h-screen w-1/5 flex-none hidden lg:block">
                        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                            {/*Sidebar content here*/}
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>

                        </ul>

                    </div>
                    {/*Page content here*/}
                    <div className="border-l-2">
                        {children}
                    </div>
                </section>
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
    )
}

export default AppLayout

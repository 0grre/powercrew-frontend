import Link from "next/link";

const NotFoundPage = () => (
    <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1><span className="text-left text-xs">Oups!</span><br/><span className="text-9xl font-open uppercase">404</span></h1>
                <p className="py-6 text-xl">La page que vous cherchez n'existe pas. 🧐<br/>
                    <span className="font-bold text-2xl">Pour retourner sur le site c'est par là !</span>
                </p>
                <Link href="/">
                    <a className="btn btn-primary">Aller à l'accueil</a>
                </Link>
            </div>
        </div>
    </div>
)

export default NotFoundPage

import Head from 'next/head'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>PowerCrew</title>
            </Head>

            <>
                {children}
            </>
        </div>
    )
}

export default GuestLayout

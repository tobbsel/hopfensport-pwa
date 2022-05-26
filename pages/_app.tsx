import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <title>Hopfensport</title>

                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

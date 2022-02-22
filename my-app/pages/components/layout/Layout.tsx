import Head from 'next/head'
import Navbar from "./navbar/Navbar";
import Footer from './footer/Footer';
import Script from 'next/Script'
import Link from 'next/link';

function Layout(props: any) {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Bitbetio - HTML Template</title>

                {/* <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
                <link rel="stylesheet" href="assets/css/jquery-ui.css" />
                <link rel="stylesheet" href="assets/css/plugin/nice-select.css" />
                <link rel="stylesheet" href="assets/css/plugin/magnific-popup.css" />
                <link rel="stylesheet" href="assets/css/plugin/slick.css" />
                <link rel="stylesheet" href="assets/css/arafat-font.css" />
                <link rel="stylesheet" href="assets/css/plugin/animate.css" />
                <link rel="stylesheet" href="assets/css/style.css" /> */}
            </Head>

            <Navbar />
            <div>
                {props.children}
            </div>
            <Footer />

            <Script src="assets/js/jquery.min.js"></Script>
            <Script src="assets/js/jquery-ui.js"></Script>
            <Script src="assets/js/bootstrap.min.js"></Script>
            <Script src="assets/js/fontawesome.js"></Script>
            <Script src="assets/js/plugin/slick.js"></Script>
            <Script src="assets/js/plugin/jquery.nice-select.min.js"></Script>
            <Script src="assets/js/plugin/jquery.downCount.js"></Script>
            <Script src="assets/js/plugin/counter.js"></Script>
            <Script src="http://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></Script>
            <Script src="assets/js/plugin/jquery.magnific-popup.min.js"></Script>
            <Script src="assets/js/plugin/wow.min.js"></Script>
            <Script src="assets/js/plugin/plugin.js"></Script>
            <Script src="assets/js/main.js"></Script>
        </div>
    )
}

export default Layout;
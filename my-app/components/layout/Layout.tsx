import Head from 'next/head'
import Navbar from "./navbar/Navbar";
import Footer from './footer/Footer';
import Script from 'next/script'
// import Script from '../../node_modules/next/script'
import React from 'react';

function Layout(props: any) {

    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Bitbetio - HTML Template</title>
            </Head>

            <Navbar />
            <div>
                {props.children}
            </div>
            <Footer />

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" />
            <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossOrigin="anonymous" />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossOrigin="anonymous" />
            <Script src="assets/js/fontawesome.js" />
            <Script src="assets/js/plugin/slick.js" />
            <Script src="assets/js/plugin/jquery.nice-select.min.js" />
            <Script src="assets/js/plugin/jquery.downCount.js" />
            <Script src="assets/js/plugin/counter.js" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js" />
            <Script src="assets/js/plugin/wow.min.js" />
            <Script src="assets/js/plugin/plugin.js" />
            <Script src="assets/js/main.js" />
        </div>
    )
}

export default Layout;
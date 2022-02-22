import Head from 'next/head'
import Navbar from "./navbar/Navbar";
import Footer from './footer/Footer';
import Script from 'next/Script'

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

            <Script src="assets/js/jquery.min.js"></Script>
            <Script src="assets/js/jquery-ui.js"></Script>
            {/* <Script src="assets/js/bootstrap.min.js"></Script> */}
            <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossOrigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossOrigin="anonymous"></Script>
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
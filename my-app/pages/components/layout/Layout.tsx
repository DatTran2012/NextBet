/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Navbar from "./navbar/Navbar";
import Footer from './footer/Footer';

function Layout(props: any) {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Bitbetio - HTML Template</title>

                <link rel="shortcut icon" href="assets/images/fav.png" type="image/x-icon" />
                <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
                <link rel="stylesheet" href="assets/css/jquery-ui.css" />
                <link rel="stylesheet" href="assets/css/plugin/nice-select.css" />
                <link rel="stylesheet" href="assets/css/plugin/magnific-popup.css" />
                <link rel="stylesheet" href="assets/css/plugin/slick.css" />
                <link rel="stylesheet" href="assets/css/arafat-font.css" />
                <link rel="stylesheet" href="assets/css/plugin/animate.css" />
                <link rel="stylesheet" href="assets/css/style.css" />
            </Head>

            <Navbar />
            <div>
                {props.children}
            </div>
            <Footer />

            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/jquery-ui.js"></script>
            <script src="assets/js/bootstrap.min.js"></script>
            <script src="assets/js/fontawesome.js"></script>
            <script src="assets/js/plugin/slick.js"></script>
            <script src="assets/js/plugin/jquery.nice-select.min.js"></script>
            <script src="assets/js/plugin/jquery.downCount.js"></script>
            <script src="assets/js/plugin/counter.js"></script>
            {/* <script src="assets/js/plugin/waypoint.min.js"></script> */}
            <script src="http://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
            <script src="assets/js/plugin/jquery.magnific-popup.min.js"></script>
            <script src="assets/js/plugin/wow.min.js"></script>
            <script src="assets/js/plugin/plugin.js"></script>
            <script src="assets/js/main.js"></script>
        </div>
    )
}

export default Layout;
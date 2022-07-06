import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "./app.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <React.Fragment>
            <Head>
                <title>Bryan Jensen</title>

                <link rel="icon" href="/images/favicon.jpg" />
            </Head>

            <Component {...pageProps} />
        </React.Fragment>
    );
}

import type { AppProps } from "next/app";
import Layout from "../Components/layout/Layout";
import "../../public/assets/css/icomoon.css"
import '../styles/globals.css'
import { ForgetpasswordComponent } from "../Components/forgetpassword/ForgetpasswordComponent";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

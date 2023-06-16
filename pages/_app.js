import { StoreProvider } from "../store2/Store";
import "../styles/globals.css";
import Layout from "./components/Layout";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <StoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </SessionProvider>
  )
}

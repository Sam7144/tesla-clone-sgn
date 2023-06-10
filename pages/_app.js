import "../styles/globals.css";
import Layout from "./components/Layout";
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react";
import { store } from "@/store";
import { StoreProvider } from "@/store2/Store";
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
        <StoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </StoreProvider>
    </SessionProvider>
  );
}

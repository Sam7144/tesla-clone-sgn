import '../styles/globals.css'
import Layout from './components/Layout'
import {Provider} from "react-redux"
import store from '../store/store'
import {SessionProvider} from "next-auth/react"
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
    <Provider store={store}>

    <Layout>
      <Component {...pageProps} />

    </Layout>
    </Provider>
    </SessionProvider>
  )
}

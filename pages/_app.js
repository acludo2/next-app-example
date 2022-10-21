import '../styles/globals.css'
import { wrapper } from "./store";








function MyApp({ Component, pageProps }) {
  console.log("my app component",pageProps)
  return <Component {...pageProps} />
}


 export default wrapper.withRedux(MyApp);

import "aos/dist/aos.css"
import "../styles/globals.css"
// @ts-ignore:next-line
import AOS from "aos"
import { useEffect } from "react"

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "mobile"
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp

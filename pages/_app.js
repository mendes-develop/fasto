import '../style.css'

export default function MyApp({ Component, pageProps }) {
    return <Component product={"Hello"} {...pageProps} />
  }
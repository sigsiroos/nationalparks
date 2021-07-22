import Amplify from 'aws-amplify'
import config from '../src/aws-exports'
import '../styles/globals.css'

Amplify.configure({ ...config, ssr: true })

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

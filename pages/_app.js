import NavBar from '../components/NavBar'
import { StateContext } from '../context/StateContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <div className='bg-black w-full min-h-screen snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-400/50'>
        <NavBar />
        <Component {...pageProps} />
      </div>
    </StateContext>
  )
}

export default MyApp

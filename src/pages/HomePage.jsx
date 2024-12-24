import AboutUs from "../components/AboutUs"
import FeaturedServices from "../components/FeaturedServices"
import Header from "../components/Header"
import Partners from "../components/Partners"
import Subscribe from "../components/Subscribe"


function HomePage() {
  return (
   <>
      <Header />
      <FeaturedServices />
      <Partners />
      <AboutUs/>
      <Subscribe />
      
   </>
  )
}

export default HomePage
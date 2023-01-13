import ExploreServices from "./ExploreServices"
import HomeBanner from "./HomeBanner"
import Insight from "./Insight"
import Product from "./Product"
import Statictics from "./Statictics"
import StrategicPartners from "./StrategicPartners"

const LadingPage = () => {
  return (
    <div className="flex flex-col w-full">
      <HomeBanner />

      <Statictics />

      <ExploreServices />

      <Product />

      <StrategicPartners />

      <Insight />
    </div>
  )
}

export default LadingPage

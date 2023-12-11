import clsx from "clsx"
import Subcribe from "../../Base/Subcribe"
import ExploreServices from "./ExploreServices"
import HomeBanner from "./HomeBanner"
import styles from "./landing.module.scss"
import Statictics from "./Statictics"
import StrategicPartners from "./StrategicPartners"
import Startup from "./Startup"
import OurPortfolio from "./OurPortfolio"

const LadingPage = () => {
  return (
    <div className={clsx(styles.bgLanding, "flex flex-col w-full")}>
      <HomeBanner />

      <Statictics />

      <Startup />

      <ExploreServices />

      <StrategicPartners />

      <OurPortfolio />

      <Subcribe />
    </div>
  )
}

export default LadingPage

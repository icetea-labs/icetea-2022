import clsx from "clsx"
import Accelerator from "../../Base/Accelerator"
import Subcribe from "../../Base/Subcribe"
import ExploreServices from "./ExploreServices"
import HomeBanner from "./HomeBanner"
import Insight from "./Insight"
import styles from "./landing.module.scss"
import Product from "./Product"
import Statictics from "./Statictics"
import StrategicPartners from "./StrategicPartners"

const LadingPage = () => {
  return (
    <div className={clsx(styles.bgLanding, "flex flex-col w-full")}>
      <HomeBanner />

      <Statictics />

      <ExploreServices />

      <Product />

      <StrategicPartners />

      <Insight />

      <Subcribe />

      <Accelerator />
    </div>
  )
}

export default LadingPage

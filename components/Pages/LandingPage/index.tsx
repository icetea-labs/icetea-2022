import clsx from "clsx"
import ButtonLink from "../../Base/ButtonLink"
import ExploreServices from "./ExploreServices"
import styles from "./landing.module.scss"
import StrategicPartners from "./StrategicPartners"
import Product from "./Product"
import Insight from "./Insight"
import { URLS } from "../../../utils/constants"

const stats = [
  {
    label: "Combined Community",
    amount: "5M"
  },
  {
    label: "KYC-verified Users",
    amount: "200"
  },
  {
    label: "Game in Connections",
    amount: "400"
  },
  {
    label: "Web3 Startups Launched",
    amount: "130"
  },
  {
    label: "KOLs",
    amount: "300"
  }
]

const LadingPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div
        className={clsx(
          styles.bgStats,
          styles.banner,
          "flex pt-[120px] relative",
          "md:pt-20 md:items-center"
        )}
      >
        <div
          className={clsx(
            "max-w-screen-main w-full mx-auto px-12 justify-center z-[1]",
            "md:pl-[140px]"
          )}
        >
          <p
            className={clsx(
              "text-40/52 font-bevn500 max-w-[720px] text-center m-0",
              "md:text-left md:text-60/72"
            )}
          >
            Bring the true benefit of blockchain technology to everyone
          </p>
          <ButtonLink href={URLS.ILAP} className="mt-8 mx-auto md:mx-0" target="_blank">
            Join Accelerator
          </ButtonLink>
        </div>
        <div className="absolute z-0 top-0 left-0 pointer-events-none">
          <video
            autoPlay
            loop
            playsInline
            muted
            className={clsx(styles.videoMobile, "")}
            poster="/images/home/video_preview_mobile.png"
          >
            <source src="/videos/BG_Mobile_1.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            loop
            playsInline
            muted
            className={clsx(styles.videoDesktop, "")}
            poster="/images/home/video_preview.png"
          >
            <source src="/videos/BG_PC_1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        className={clsx(
          styles.bgStats,
          "w-full mx-auto flex flex-col items-center pt-[60px]",
          "md:pt-[200px]"
        )}
      >
        <p className="text-32/40 md:text-48/60 text-center max-w-[1000px] px-12 md:px-0">
          We are the leading game discovery and user engagement layer in{" "}
          <span className="text-main font-bevn700">Southeast Asia</span>.
        </p>
        <div
          className={clsx(
            "grid grid-cols-2 mt-10 gap-5 px-[60px]",
            "md:px-0 md:flex md:space-x-[55px] md:mt-20"
          )}
        >
          {stats.map((item: any, index: number) => (
            <div className="flex flex-col" key={index}>
              <p className="md:text-56/60 text-40/52 font-bevn600 flex items-start">
                {item?.amount} <span className="text-36/40 font-bevn700">+</span>
              </p>
              <span className="text-teaGray mt-3 text-14/18 md:text-16/20">{item?.label}</span>
            </div>
          ))}
        </div>
      </div>

      <ExploreServices />

      <Product />

      <StrategicPartners />

      <Insight />
    </div>
  )
}

export default LadingPage

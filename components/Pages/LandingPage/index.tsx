import clsx from "clsx"
import ButtonLink from "../../Base/ButtonLink"
import ExploreServices from "./ExploreServices"
import styles from "./landing.module.scss"
import Partners from "./Partners"
import Product from "./Product"

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
      <div className={clsx(styles.bgBanner, "h-screen pt-20 flex items-center")}>
        <div className="max-w-screen-main w-full mx-auto pl-[140px]">
          <p className="text-60/72 font-bevn500 max-w-[720px] m-0">
            Bring the true benefit of blockchain technology to everyone
          </p>
          <ButtonLink href="/#" className="mt-8">
            Join Accelerator
          </ButtonLink>
        </div>
      </div>

      <div className={clsx(styles.bgStats, "w-full mx-auto flex flex-col items-center pt-[200px]")}>
        <p className="text-48/60 text-center max-w-[1000px]">
          We are the leading game discovery and user engagement layer in{" "}
          <span className="text-main font-bevn700">Southeast Asia</span>.
        </p>
        <div className="flex mt-20 space-x-[55px]">
          {stats.map((item: any, index: number) => (
            <div className="flex flex-col" key={index}>
              <p className="text-56/60 font-bevn600 flex items-start">
                {item?.amount} <span className="text-36/40 font-bevn700">+</span>
              </p>
              <span className="text-teaGray mt-3">{item?.label}</span>
            </div>
          ))}
        </div>
      </div>

      <ExploreServices />

      <Product />

      <Partners />
    </div>
  )
}

export default LadingPage

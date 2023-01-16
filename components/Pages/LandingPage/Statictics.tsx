import clsx from "clsx"
import styles from "./landing.module.scss"

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

const Statictics = () => {
  return (
    <div
      className={clsx(
        styles.bgStats,
        "w-full mx-auto flex flex-col items-center pt-[60px]",
        "md:pt-[120px] md:px-20",
        "lg:pt-[200px]"
      )}
    >
      <p className="text-32/40 md:text-40/52 lg:text-48/60 text-center max-w-[1000px] px-12 md:px-0">
        We are the leading game discovery and user engagement layer in{" "}
        <span className="text-main font-bevn700">Southeast Asia</span>
      </p>
      <div
        className={clsx(
          "grid grid-cols-2 mt-10 gap-5 px-[60px]",
          "md:px-0 md:flex md:flex-wrap md:gap-[55px] md:mt-20 justify-center"
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
  )
}

export default Statictics

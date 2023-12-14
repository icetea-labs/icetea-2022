import clsx from "clsx"
import styles from "./landing.module.scss"

const stats = [
  {
    label: "KYCed Users",
    amount: "200K"
  },
  {
    label: "Games Onboarded",
    amount: "400"
  },
  {
    label: "Projects Launched",
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
      id="statictics"
      className={clsx(
        styles.bgStats,
        "w-full mx-auto flex flex-col items-center pt-[60px]",
        "md:pt-[120px] md:px-20",
        "lg:pt-[200px]"
      )}
    >
      <p className="text-24/32 md:text-40/52 lg:text-48/60 text-center max-w-[1000px] px-5 lg:px-12 md:px-0">
        Icetea Labs is a leading{" "}
        <span className="text-main font-bevn700">Web3 Venture Builder</span> in Southeast Asia
      </p>
      <div
        className={clsx(
          "grid grid-cols-2 mt-10 gap-5 px-5 lg:px-[60px]",
          "md:px-0 md:flex md:flex-wrap md:gap-[55px] md:mt-20 justify-center"
        )}
      >
        {stats.map((item: any, index: number) => (
          <div className="flex flex-col" key={index}>
            <p className="md:text-56/60 text-32/40 font-bevn600 flex items-start">
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

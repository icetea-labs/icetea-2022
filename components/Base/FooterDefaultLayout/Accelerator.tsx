import clsx from "clsx"
import { URLS } from "../../../utils/constants"
import ButtonLink from "../ButtonLink"
import styles from "./footer.module.scss"

const Accelerator = () => {
  return (
    <div className="w-full max-w-screen-main mx-auto px-8 lg:px-[60px] mt-20 md:mt-0">
      <div
        className={clsx(
          styles.bgAccelerator,
          "pt-10 min-h-[440px] px-10 flex flex-col text-center items-center text-32/40",
          "md:text-40/52",
          "md:py-[60px] md:mt-0 lg:px-20 sm:text-left sm:justify-center sm:items-start lg:text-48/60"
        )}
      >
        <span className="">Icetea Labs</span>
        <div className={clsx(styles.textGradientRight, "font-bevn600 w-fit")}>
          Accelerator Program
        </div>
        <ButtonLink
          href={URLS.ILAP}
          target="_blank"
          className={clsx(
            "max-w-[300px] w-full mt-6 text-14/18 flex justify-center",
            "md:text-18/24 whitespace-nowrap"
          )}
        >
          For more information
        </ButtonLink>
      </div>
    </div>
  )
}

export default Accelerator

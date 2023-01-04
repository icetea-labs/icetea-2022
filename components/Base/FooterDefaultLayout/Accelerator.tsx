import clsx from "clsx"
import ButtonLink from "../ButtonLink"
import styles from "./footer.module.scss"

const Accelerator = () => {
  return (
    <div className="w-full max-w-screen-main mx-auto px-[60px]">
      <div className={clsx(styles.bgAccelerator, "px-20 py-[60px] flex flex-col text-48/60")}>
        <span className="">Icetea Labs</span>
        <div className={clsx(styles.textGradientRight, "font-bevn600 w-fit")}>
          Accelerator Program
        </div>
        <ButtonLink href="/" className="mt-6 text-18/24">
          For more information
        </ButtonLink>
      </div>
    </div>
  )
}

export default Accelerator

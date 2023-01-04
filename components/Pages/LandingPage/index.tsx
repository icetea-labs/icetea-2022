import clsx from "clsx"
import styles from "./landing.module.scss"

import React from "react"
import ButtonLink from "../../Base/ButtonLink"

const LadingPage = () => {
  return (
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
  )
}

export default LadingPage

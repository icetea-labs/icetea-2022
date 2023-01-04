import clsx from "clsx"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import GradientBorder from "../GradientBorder"
import styles from "./footer.module.scss"

import arrowRight from "/public/images/arrow-right.svg"

const Subcribe = () => {
  const [inputEmail, setInputEmail] = useState<string>("")

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value)
  }

  const handleSubscribe = () => {
    console.log("Subcribe: ", inputEmail)
  }

  return (
    <div className={clsx(styles.bgSubscribe)}>
      <div className="w-full max-w-screen-main mx-auto px-[140px] h-[380px] flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-40/52">Subscribe To Our Newsletter</span>
          <span className="text-teaGray">
            Subscribe and follow us to get more of the newest updates!
          </span>
        </div>
        <div className="flex">
          <GradientBorder className="h-[54px] p-1 pl-5 rounded-full">
            <div className="flex items-center h-full">
              <input
                type="text"
                placeholder="Email Address"
                className="flex-1 h-full outline-none bg-transparent pr-2"
                value={inputEmail}
                onChange={handleChangeEmail}
              />
              <div className={styles.btnSubcribe} onClick={handleSubscribe}>
                <Image src={arrowRight} alt="" />
              </div>
            </div>
          </GradientBorder>
        </div>
      </div>
    </div>
  )
}

export default Subcribe

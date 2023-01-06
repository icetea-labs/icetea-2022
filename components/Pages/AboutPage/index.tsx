import clsx from "clsx"
import React from "react"
import styles from "./about.module.scss"

import imgConnected from "/public/images/cultures/connected.png"
import imgProgressive from "/public/images/cultures/progressive.png"
import imgInnovative from "/public/images/cultures/innovative.png"
import Image, { StaticImageData } from "next/image"

type CultureTypes = {
  label: string
  imgUri: StaticImageData
}

const cultures: Array<CultureTypes> = [
  {
    label: "Connected",
    imgUri: imgConnected
  },
  {
    label: "Progressive",
    imgUri: imgProgressive
  },
  {
    label: "Innovative",
    imgUri: imgInnovative
  }
]

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full items-center pb-[120px]">
      <div className={clsx(styles.bgAbout, "flex w-full items-center justify-center")}>
        <p className="font-bevn500 text-60/72 text-center">
          About <br /> Icetea Labs
        </p>
      </div>

      <div
        className={clsx(styles.bgInfo, "w-full mx-auto flex justify-center pt-[200px] pb-[60px]")}
      >
        <div className="flex flex-col items-center">
          <p className="text-40/52 text-center max-w-[1000px]">
            Icetea Labs – established in 2018 – is now the leading blockchain technology company in
            Asia.
          </p>
          <div className="flex mt-[62px] space-x-10 text-teaGray">
            <p className="max-w-[400px]">
              With a team of 170+ young dynamic members, we have successfully supported and launched
              130+ projects, especially 2 of the top tier platforms: Red Kite Launchpad and
              GameFi.org Game hub
            </p>
            <p className="max-w-[400px]">
              Icetea Labs develop an ecosystem growth including potential projects with the ambition
              to bring blockchain – the next technology generation – closer to reality.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-[1120px] h-[630px] bg-orange-500"></div>

      <div className="flex flex-col mt-[160px] max-w-[1000px]">
        <p className="text-40/52 text-center">
          Each individual in Icetea Labs engages and builds a distinct company culture.
        </p>
        <div className="flex mt-[92px] justify-between px-5">
          {cultures.map((item: CultureTypes, index: number) => (
            <div
              className="flex flex-col max-w-[220px] w-full items-center text-center cursor-pointer"
              key={index}
            >
              <Image src={item.imgUri} alt="" className={styles.cultureHover} />
              <p className="text-28/36 font-bevn600 mt-5">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutPage

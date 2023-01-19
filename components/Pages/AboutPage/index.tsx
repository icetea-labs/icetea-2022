import clsx from "clsx"
import { useRef } from "react"
import styles from "./about.module.scss"

import Image, { StaticImageData } from "next/image"
import videojs from "video.js"
import VideoJS from "../../Base/VideoFrame"
import imgConnected from "/public/images/cultures/connected.png"
import imgInnovative from "/public/images/cultures/innovative.png"
import imgProgressive from "/public/images/cultures/progressive.png"
import Accelerator from "../../Base/Accelerator"
import Subcribe from "../../Base/Subcribe"

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
  const playerRef = useRef<any>(null)

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "/icetea_lab.mp4",
        type: "video/mp4"
      }
    ]
  }

  const handlePlayerReady = (player: any) => {
    playerRef.current = player

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting")
    })

    player.on("dispose", () => {
      videojs.log("player will dispose")
    })
  }

  return (
    <div className={clsx(styles.bgAbout, "flex flex-col w-full items-center")}>
      <div className={clsx(styles.bgBanner, "flex w-full items-center justify-center")}>
        <p className="font-bevn500 text-40/52 md:text-60/72 text-center">
          About <br /> Icetea Labs
        </p>
      </div>

      <div
        className={clsx(
          styles.bgInfo,
          "w-full mx-auto flex justify-center pt-[60px] md:pt-[200px] pb-[60px]"
        )}
      >
        <div className="flex flex-col items-center px-8 md:px-10">
          <p className="text-32/40 sm:text-36/40 lg:text-40/52 text-center max-w-[1000px]">
            Icetea Labs – established in 2018 – is now the leading blockchain technology company in
            Asia
          </p>
          <div
            className={clsx(
              "flex flex-col mt-10 text-teaGray text-center space-y-3",
              "md:space-x-10 md:mt-[62px] md:flex-row md:text-left md:space-y-0"
            )}
          >
            <p className="max-w-[400px]">
              With a team of 170+ young dynamic members, we have successfully supported and launched
              130+ projects, especially 2 of the top tier platforms: Red Kite Launchpad and
              GameFi.org Game hub.
            </p>
            <p className="max-w-[400px]">
              Icetea Labs develop an ecosystem growth including potential projects with the ambition
              to bring blockchain – the next technology generation – closer to reality.
            </p>
          </div>
        </div>
      </div>

      <div className={clsx("flex w-full max-w-screen-lg px-8 md:px-10", "")}>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>

      <div className="flex flex-col mt-[160px] max-w-[1000px] px-8 md:px-10 pb-[120px]">
        <p className="text-32/40 sm:text-36/40 lg:text-40/52 text-center">
          We engage and build the truly unique company culture together
        </p>
        <div
          className={clsx(
            "flex flex-col items-center mt-[92px] justify-between px-5 space-y-14",
            "md:space-y-0 md:flex-row"
          )}
        >
          {cultures.map((item: CultureTypes, index: number) => (
            <div
              className="flex flex-col max-w-[160px] lg:max-w-[220px] w-full items-center text-center cursor-pointer"
              key={index}
            >
              <Image src={item.imgUri} alt="" className={styles.cultureHover} />
              <p className="text-28/36 font-bevn600 mt-5">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Subcribe />

      <Accelerator />
    </div>
  )
}

export default AboutPage

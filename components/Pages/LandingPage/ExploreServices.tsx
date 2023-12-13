import clsx from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ProgramTypes, services, ServiceTypes, URLS } from "../../../utils/constants"
import styles from "./landing.module.scss"

import Link from "next/link"
import arrowRight from "/public/images/arrow-right-blue.svg"

const ExploreServices = () => {
  const [activedService, setActivedService] = useState<ServiceTypes | undefined>(services[0])
  const [isReading, setIsReading] = useState<boolean>(false)
  const [isWidthDownMd, setIsWidthDownMd] = useState<boolean>(false)
  const [isHover, setIsHover] = useState<boolean>(false)

  useEffect(() => {
    setIsWidthDownMd(window.innerWidth <= 900)

    const handleResize = () => {
      setIsWidthDownMd(window.innerWidth <= 900)
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isHover) return
    const timer = setTimeout(() => {
      if (!activedService || isReading || isWidthDownMd) return
      const length = services.length
      const newService =
        activedService?.id === services[length - 1].id
          ? services[0]
          : services.find((item: ServiceTypes) => item.id === activedService?.id + 1)
      setActivedService(newService)
    }, 5000)

    return () => clearTimeout(timer)
  }, [activedService, isWidthDownMd, isReading, isHover])

  const handleActiveCard = (id: number) => {
    const item = services.find((item: ServiceTypes) => item.id === id)
    setActivedService(item)
    !isHover && setIsHover(true)
  }

  return (
    <div id="services" className={styles.bgServices}>
      <div
        className={clsx(
          "max-w-[1320px] pt-20 px-8 w-full mx-auto bg-black flex flex-col",
          "md:mt-[170px] sm:px-20 py-[100px]"
        )}
      >
        <div
          className={clsx(
            "flex justify-between flex-col space-y-3 text-center",
            "md:space-y-3 md:space-x-8 md:flex-row md:text-left"
          )}
        >
          <span className="md:text-40/52 text-32/40">Our Services</span>
          <span className="md:text-20/28 text-16/20 text-teaGray max-w-[690px]">
            We own an ecosystem to support projects in every stage of the product
            lifecycle
          </span>
        </div>

        <div
          className={clsx(
            styles.slider,
            "md:grid md:grid-cols-5 md:w-full gap-5 mt-10",
            "flex overflow-auto box-border w-screen pb-3"
          )}
        >
          {services.map((item: ServiceTypes) => (
            <div
              onMouseEnter={() => handleActiveCard(item.id)}
              onMouseLeave={() => setIsHover(false)}
              className={clsx(
                styles.cardService,
                item.id === activedService?.id && styles.cardActive,
                "flex flex-col justify-between items-center cursor-pointer bg-teaBlack p-2 whitespace-normal",
                "md:pt-0 md:py-8"
              )}
              key={item.id}
            >
              <div className="flex md:flex-1 justify-center px-5 md:p-0 min-w-[140px]">
                <Image src={item.imgUri} alt="" className="object-contain" />
              </div>
              <p className="text-14/18 md:text-18/24 font-bevn600 mt-2 text-center">{item.title}</p>
            </div>
          ))}
        </div>

        {activedService && (
          <div
            className="flex flex-col mt-8 md:flex-row md:space-x-8"
            onMouseEnter={() => setIsReading(true)}
            onMouseLeave={() => setIsReading(false)}
          >
            <div className="flex flex-col md:max-w-[50%] lg:max-w-[440px] w-full ">
              <p className="text-28/36 font-bevn600">{activedService.title}</p>
              <span className="text-teaGray mt-2">{activedService.description}</span>
              <Link href={URLS.SERVICES} className="flex text-18/24 mt-5">
                <span className="text-teaBlue font-bevn700">See more</span>
                <Image src={arrowRight} alt="" className="ml-2" />
              </Link>
            </div>

            <div className="flex flex-1 flex-col space-y-2 mt-6 md:mt-0">
              {activedService.programs.map((item: ProgramTypes, index: number) => (
                <Link
                  href={item.url}
                  target="_blank"
                  className="flex px-[14px] py-4 space-x-5 hover:bg-teaBlack bg-teaBlack md:bg-transparent"
                  key={index + 1000}
                >
                  <Image
                    src={item.thumbnail}
                    alt=""
                    width={140}
                    height={80}
                    className="object-contain"
                  />
                  <div className="flex flex-col flex-1">
                    <p className="text-14/18 md:text-18/24 font-bevn600">{item.title}</p>
                    <p
                      className={clsx(
                        "text-teaGray text-14/18 md:text-16/20 mt-1",
                        styles.cardMultiline
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExploreServices

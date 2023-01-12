import clsx from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ProgramTypes, services, ServiceTypes, URLS } from "../../../utils/constants"
import styles from "./landing.module.scss"

import Link from "next/link"
import arrowRight from "/public/images/arrow-right-blue.svg"

const ExploreServices = () => {
  const [activedService, setActivedService] = useState<ServiceTypes | undefined>(services[0])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!activedService) return
      const length = services.length
      const newService =
        activedService?.id === services[length - 1].id
          ? services[0]
          : services.find((item: ServiceTypes) => item.id === activedService?.id + 1)
      setActivedService(newService)
    }, 5000)

    return () => clearTimeout(timer)
  }, [activedService])

  const handleActiveCard = (id: number) => {
    const item = services.find((item: ServiceTypes) => item.id === id)
    setActivedService(item)
  }

  return (
    <div className={styles.bgServices}>
      <div
        className={clsx(
          "max-w-[1320px] mt-20 px-8 w-full mx-auto bg-black flex flex-col",
          "md:mt-[170px] md:px-20 py-[100px]"
        )}
      >
        <div
          className={clsx(
            "flex justify-between flex-col space-y-3 text-center",
            "md:space-y-3 md:space-x-8 md:flex-row md:text-left"
          )}
        >
          <span className="md:text-40/52 text-32/40">Explore Our Services</span>
          <span className="md:text-20/28 text-16/20 text-teaGray max-w-[690px]">
            As a leader, we own an ecosystem to support projects in every stage ofthe project life
            cycle.
          </span>
        </div>

        <div
          className={clsx(
            "md:grid md:grid-cols-5 md:w-full gap-5 mt-10",
            "flex w-fit overflow-auto box-border"
          )}
        >
          {services.map((item: ServiceTypes) => (
            <div
              onMouseEnter={() => handleActiveCard(item.id)}
              className={clsx(
                styles.cardService,
                item.id === activedService?.id && styles.cardActive,
                "flex flex-col items-center md:py-8 cursor-pointer bg-teaBlack pt-2 md:pt-0"
              )}
              key={item.id}
            >
              <div className="flex md:flex-1 justify-center px-5 md:p-0">
                <Image src={item.imgUri} alt="" className="object-contain" />
              </div>
              <p className="text-14/18 md:text-18/24 font-bevn600 mt-2 text-center">{item.title}</p>
            </div>
          ))}
        </div>

        {activedService && (
          <div className="flex flex-col mt-8 md:flex-row md:space-x-8 ">
            <div className="flex flex-col max-w-[440px] w-full">
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

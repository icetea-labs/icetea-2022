import clsx from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ProgramTypes, services, ServiceTypes } from "../../../utils/constants"
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
          "max-w-[1320px] w-full mx-auto bg-black flex flex-col",
          "mt-[170px] px-20 py-[100px]"
        )}
      >
        <div className="flex space-x-8 justify-between">
          <span className="text-40/32">Explore Our Services</span>
          <span className="text-20/28 text-teaGray max-w-[690px]">
            As a leader, we own an ecosystem to support projects in every stage ofthe project life
            cycle.
          </span>
        </div>

        <div className="grid grid-cols-5 w-full gap-5 mt-10">
          {services.map((item: ServiceTypes) => (
            <div
              onMouseEnter={() => handleActiveCard(item.id)}
              className={clsx(
                styles.cardService,
                item.id === activedService?.id && styles.cardActive,
                "flex flex-col w-full items-center py-8 cursor-pointer bg-teaBlack"
              )}
              key={item.id}
            >
              <div className="flex flex-1 justify-center">
                <Image src={item.imgUri} alt="" className="object-contain" />
              </div>
              <p className="text-18/24 font-bevn600 mt-2">{item.title}</p>
            </div>
          ))}
        </div>

        {activedService && (
          <div className="flex mt-8 space-x-8">
            <div className="flex flex-col max-w-[440px] w-full">
              <p className="text-28/36 font-bevn600">{activedService.title}</p>
              <span className="text-teaGray mt-2">{activedService.description}</span>
              <Link href={"/"} className="flex text-18/24 mt-5">
                <span className="text-teaBlue font-bevn700">See more</span>
                <Image src={arrowRight} alt="" className="ml-2" />
              </Link>
            </div>

            <div className="flex flex-1 flex-col space-y-2">
              {activedService.programs.map((item: ProgramTypes, index: number) => (
                <Link
                  href={item.url}
                  target="_blank"
                  className="flex px-[14px] py-4 space-x-5 hover:bg-teaBlack"
                  key={index + 1000}
                >
                  <Image src={item.thumbnail} alt="" />
                  <div className="flex flex-col">
                    <p className="text-18/24 font-bevn600">{item.title}</p>
                    <p className="text-teaGray">{item.description}</p>
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

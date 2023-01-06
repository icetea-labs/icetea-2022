import clsx from "clsx"
import React from "react"
import Image, { StaticImageData } from "next/image"
import RequestForm from "./RequestForm"
import styles from "./service.module.scss"

import imgConnected from "/public/images/cultures/connected.png"
import imgProgressive from "/public/images/cultures/progressive.png"
import imgInnovative from "/public/images/cultures/innovative.png"
import { ProviderTypes, serviceDetails, ServiceDetailTypes } from "../../../utils/constants"

const ServicePage = () => {
  return (
    <div className="flex flex-col w-full items-center pb-[120px]">
      <div className={clsx(styles.bgService, "flex w-full items-center justify-center")}>
        <p className="font-bevn500 text-60/72 text-center">Service</p>
      </div>

      <div className={clsx(styles.bgInfo, "w-full")}>
        <div
          className={clsx(
            styles.serviceList,
            "w-full max-w-[1040px] mx-auto flex flex-col space-y-[120px] justify-center pt-[200px] pb-[60px]"
          )}
        >
          {serviceDetails.map((service: ServiceDetailTypes, index: number) => (
            <div className="flex w-full justify-between flex-row-reverse" key={index}>
              <div className="flex flex-col max-w-[520px]">
                <p className="text-40/52">{service.title}</p>
                <p className="text-teaGray mt-6">{service.description}</p>
                <div className="flex flex-col space-y-3 max-w-[480px] mt-5">
                  {service.providers.map((provider: ProviderTypes, jdex: number) => (
                    <div
                      className="flex flex-col bg-teaBlack rounded-sm py-5 pl-8 pr-3"
                      key={index * 1000 + jdex}
                    >
                      <ul className="list-disc">
                        {provider.services.map((item: string, zdex: number) => (
                          <li
                            className="text-18/24 font-bevn600 mb-[6px]"
                            key={index * 1000 + jdex * 100 + zdex}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center mt-1">
                        <span className="text-14/18 text-white opacity-60">Powered by</span>
                        <Image src={provider.poweredByUri} alt="" className="ml-2 h-fit" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relaive">
                <Image src={service.imgUri} alt="" className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <RequestForm />
    </div>
  )
}

export default ServicePage

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { partners, PartnerTypes } from "../../../utils/constants"
import styles from "./landing.module.scss"

const StrategicPartners = () => {
  return (
    <div id="partners" className="flex max-w-screen-main mx-auto px-8 md:px-[140px] pt-[120px]">
      <div className="flex flex-col w-full justify-center text-center">
        <p className="text-32/40 md:text-40/52">Our Partners</p>

        <div
          className={clsx(
            "mt-10 grid grid-cols-2 justify-center items-center gap-5",
            "md:flex md:flex-wrap "
          )}
        >
          {partners.map((partner: PartnerTypes, index: number) => (
            <div
              className={clsx(
                "flex bg-teaBlack rounded-sm h-[80px] p-3",
                "md:w-[275px] md:h-[130px] md:p-0"
              )}
              key={index}
            >
              <Link
                href={partner.url}
                target="_blank"
                className={clsx(styles.cardPartner, "flex w-full h-full")}
              >
                <div className="w-full h-full flex justify-center items-center">
                  <Image src={partner.imgUri} alt="" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StrategicPartners

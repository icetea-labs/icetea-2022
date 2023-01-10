import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { partners, PartnerTypes } from "../../../utils/constants"
import styles from "./landing.module.scss"

const StrategicPartners = () => {
  return (
    <div className="flex max-w-screen-main mx-auto px-[140px] mt-[120px]">
      <div className="flex flex-col w-full justify-center text-center">
        <p className="text-40/52">Strategic Partners</p>
        <span className="mt-3 text-teaGray text-20/28">
          We work closely with leading partners to accelerate high-quality games.
        </span>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-5">
          {partners.map((partner: PartnerTypes, index: number) => (
            <div className="flex w-[275px] h-[130px] bg-teaBlack rounded-sm" key={index}>
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

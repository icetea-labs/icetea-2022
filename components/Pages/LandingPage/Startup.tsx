import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { PartnerTypes, startups } from "../../../utils/constants"
import styles from "./landing.module.scss"

const Startup = () => {
  return (
    <div id="startups" className="flex max-w-screen-main mx-auto px-5 lg:px-8 md:px-[140px] pt-[120px]">
      <div className="flex flex-col w-full justify-center text-center">
        <p className="text-32/40 md:text-40/52">Our Startups</p>
        <span className="mt-3 text-teaGray text-16/20 md:text-20/28">
          As a venture builder, we build a couple of world-class web3 startups every year
        </span>

        <div
          className={clsx(
            "mt-10 grid grid-cols-2 justify-center items-center gap-5",
            "md:flex md:flex-wrap "
          )}
        >
          {startups.map((partner: PartnerTypes, index: number) => (
            <div
              className={clsx(
                "flex w-full h-[80px] bg-teaBlack rounded-sm",
                "sm:w-[216px] sm:h-[105px]"
              )}
              key={index}
            >
              <Link
                href={partner.url}
                target="_blank"
                className={clsx(styles.cardPartner, "flex w-full h-full")}
              >
                <div className="w-full h-full p-4 flex justify-center items-center">
                  <Image src={partner.imgUri} className="w-full h-full object-contain" alt="" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Startup

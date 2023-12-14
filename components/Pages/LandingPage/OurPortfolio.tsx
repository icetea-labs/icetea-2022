import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { PartnerTypes, ourPortfolio } from "../../../utils/constants"
import styles from "./landing.module.scss"

const OurPortfolio = () => {
  return (
    <div id="portfolio" className="flex max-w-screen-main mx-auto px-5 lg:px-8 md:px-[140px] pt-[120px]">
      <div className="flex flex-col w-full justify-center text-center">
        <p className="text-32/40 md:text-40/52">Our Portfolio</p>
        <span className="mt-3 text-teaGray text-16/20 md:text-20/28">
          Most are direct investments but some are though partners
        </span>

        <div
          className={clsx(
            "mt-10 grid grid-cols-2 justify-center items-center gap-5",
            "md:flex md:flex-wrap "
          )}
        >
          {ourPortfolio.map((partner: PartnerTypes, index: number) => (
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
                <div className="w-full h-full p-5 flex justify-center items-center">
                  <Image src={partner.imgUri} className="max-w-full max-h-full object-contain" alt="" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurPortfolio

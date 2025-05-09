import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { ProductTypes, SubProductTypes } from "../../../utils/constants"
import styles from "./cardProduct.module.scss"

type CardProductTypes = {
  dataCard: ProductTypes | SubProductTypes
}

const CardProduct = (props: CardProductTypes) => {
  const { dataCard } = props
  const { bgUri, description, imageUri, title, url } = dataCard

  return (
    <div className="flex flex-col items-center xl:items-start">
      <Link
        href={url}
        target="_blank"
        className={clsx(
          styles.imgHover,
          "flex justify-center items-end w-full h-full object-contain bg-center bg-contain",
          "md:w-[550px] md:h-[550px]"
        )}
        style={{
          backgroundImage: `url(${bgUri})`
        }}
      >
        <Image src={imageUri} alt="" className="h-[75%] md:max-h-[400px] object-contain" />
      </Link>
      <p className="text-20/28 md:text-28/36 font-bevn font-semibold mt-6 text-center">{title}</p>
      <p className="text-teaGray mt-2 text-center text-14/18 md:text-16/20 xl:text-left">
        {description}
      </p>
    </div>
  )
}

export default CardProduct

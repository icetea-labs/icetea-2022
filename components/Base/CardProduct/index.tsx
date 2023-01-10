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
    <div className="flex flex-col">
      <Link
        href={url}
        target="_blank"
        className={clsx(styles.imgHover, "flex justify-center items-end w-[550px] h-[550px]")}
        style={{
          background: `url(${bgUri}) center center no-repeat`,
          backgroundSize: "contain"
        }}
      >
        <Image src={imageUri} alt="" className="max-h-[400px] object-contain" />
      </Link>
      <p className="text-28/36 font-bevn600 mt-6">{title}</p>
      <p className="text-teaGray mt-2 max-w-[360px]">{description}</p>
    </div>
  )
}

export default CardProduct

import clsx from "clsx"
import Image from "next/image"
import { ProductTypes, SubProductTypes } from "../../../utils/constants"
import styles from "./cardProduct.module.scss"

type CardProductTypes = {
  dataCard: ProductTypes | SubProductTypes
}

const CardProduct = (props: CardProductTypes) => {
  const { dataCard } = props
  const { bgUri, description, imageUri, title } = dataCard

  return (
    <div className="flex flex-col">
      <div
        className={clsx(styles.imgHover, "flex justify-center items-end w-[550px] h-[550px]")}
        style={{
          background: `${bgUri} center center no-repeat`
        }}
      >
        <Image src={imageUri} alt="" className="" />
      </div>
    </div>
  )
}

export default CardProduct

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { displayDateTimeFormat } from "../../../utils"
import { BlogTypes } from "../../../utils/blogConstants"
import { URLS } from "../../../utils/constants"
import styles from "./blog.module.scss"
import BlogTypeTag from "./blogTypeTag"

interface BlogItemProps {
  data?: BlogTypes
}

const BlogItemInList = ({ data }: BlogItemProps) => {
  return (
    <Link href={`${URLS?.BLOG}/${data?.slug}`}>
      <div className={clsx(styles.blogItem, "mb-10 h-full md:mb-0 cursor-pointer")}>
        <div className={clsx(styles.blogItemImg, "relative w-full h-[200px] xl:h-[220px]")}>
          <Image
            src={data?.image ? data?.image : "/images/blog/default.png"}
            className="object-cover"
            alt=""
            fill
          />
          <BlogTypeTag type={data?.type} />
        </div>
        <h2 className="mt-[5px] xl:mt-[9px] xl:text-20/28 font-bevn600 text-ellipse text-2-line">
          {data?.title}
        </h2>
        <p className="opacity-60 font-bold text-14/18 uppercase tracking-widest mt-[5px] xl:text-16/20 xl:mt-2">
          {displayDateTimeFormat(data?.date)}
        </p>
      </div>
    </Link>
  )
}

export default BlogItemInList

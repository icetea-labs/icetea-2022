import Image from "next/image"
import Link from "next/link"
import React from "react"
import { BlogTypes } from "../../../utils/blogConstants"
import { URLS } from "../../../utils/constants"
import BlogTypeTag from "./blogTypeTag"

interface BlogItemProps {
  data?: BlogTypes
}

const BlogItemInList = ({ data }: BlogItemProps) => {
  return (
    <Link href={`${URLS?.BLOG}/${data?.slug}`}>
      <div className="mb-[20px] h-[100%] md:mb-0 hover:bg-[#1A1F27] cursor-pointer">
        <div className="relative w-full h-[200px] xl:h-[220px]">
          <Image
            src={data?.image ? data?.image : "/images/blog/default.png"}
            className="object-cover"
            alt=""
            fill
          />
          <BlogTypeTag type={data?.type} />
        </div>
        <h2 className="mt-[5px] xl:mt-[9px] text-[16px] xl:text-[20px] xl:leading-[28px] font-[600] text-ellipse text-2-line">
          {data?.title}
        </h2>
        <p className="opacity-[0.6] font-bold text-[14px] mt-[5px] xl:text-[16px] xl:mt-[8px]">
          {data?.date}
        </p>
      </div>
    </Link>
  )
}

export default BlogItemInList

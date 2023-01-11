import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { blogs, BlogTypes } from "../../../utils/blogConstants"
import styles from "../BlogPage/blog.module.scss"
import BlogItemInList from "../BlogPage/blogListItem"
import arrowRight from "/public/images/arrow-right-blue.svg"
import { URLS } from "../../../utils/constants"

const Insight = () => {
  const router = useRouter()
  const [lastestNews, setLastestNews] = useState<BlogTypes[]>()
  const { slug } = router.query

  useEffect(() => {
    let count = 0
    const resultLastest = blogs.filter((blog: BlogTypes) => {
      if (count < 3 && blog.slug !== slug) {
        count++
        return true
      }
      return false
    })
    setLastestNews(resultLastest)
  }, [slug])

  return (
    <div className="justify-center">
      <div className="max-w-[760px] px-[20px] mx-auto text-center mt-[100px]">
        <p className="text-40/32">Insight</p>
        <p className="max-w-[720px] mt-2 text-teaGray xl:text-[20px]">
          We jointly research and develop solutions for sustainable in-game economy and mass
          adoption enabling technologies
        </p>
      </div>
      <div className="max-w-[760px] xl:max-w-[1200px] px-[20px] mx-auto">
        {lastestNews && !!(lastestNews.length > 0) && (
          <div className={styles.blogList}>
            {lastestNews?.map((blog: BlogTypes, index: number) => {
              return <BlogItemInList key={index} data={blog} />
            })}
          </div>
        )}
      </div>
      <Link
        href={`${URLS.BLOG}`}
        className="flex mx-auto w-fit mt-[20px] xl:mt-[40px] items-center cursor-pointer hover:scale-[1.1]"
      >
        <span className="text-[#00C7F4]">See more</span>
        <Image src={arrowRight} alt="" className="ml-1" />
      </Link>
    </div>
  )
}

export default Insight

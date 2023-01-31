/* eslint-disable react-hooks/exhaustive-deps */
import clsx from "clsx"
import dynamic from "next/dynamic"
import Link from "next/link"
import React, { useEffect, useMemo, useState } from "react"
import { displayDateTimeFormat } from "../../../utils"
import { BlogTypes } from "../../../utils/blogConstants"
import { URLS } from "../../../utils/constants"
import styles from "./blog.module.scss"
import BlogItemInList from "./blogListItem"
import BlogTypeTag from "./blogTypeTag"
import { Facebook, LinkedIn, LinkIcon, Telegram, Twitter } from "./social"

interface Props {
  host: any
  data: BlogTypes | undefined
  lastestNews: BlogTypes[] | undefined
}

const BlogDetailPage = ({ host, data, lastestNews }: Props) => {
  const [content, setContent] = useState<string>("")

  const CopyClipboard = dynamic(() => import("./social").then((mod) => mod.LinkIcon), {
    ssr: false
  })

  useEffect(() => {
    let contentResult = ""
    if (data?.content && data?.content?.length > 0) {
      data?.content?.map((item: string) => {
        contentResult += item
      })
      setContent(contentResult)
    }
  }, [data?.content])

  const urlToShare = useMemo(() => {
    if (typeof window === "undefined") return ""
    return `${window?.location?.host}${URLS.BLOG}/${data?.slug}`
  }, [data])

  return (
    <div className={clsx(styles.blogBg, "pt-[120px] xl:pt-[180px]")}>
      <div className="max-w-[1040px] mx-auto px-5">
        <div className="relative h-9 w-full">
          <BlogTypeTag type={data?.type} className={styles.blogTypeTag} />
        </div>
        <h2 className="mt-5 text-center text-32/40 xl:text-40/52">{data?.title}</h2>
        <p className="mt-5 xl:mt-8 text-14/18 xl:text-16/24 text-center uppercase text-teaGray tracking-widest font-bevn700">
          {displayDateTimeFormat(data?.date)}
        </p>
        <div className="relative">
          <div className="max-w-[800px] mx-auto mt-[30px] xl:mt-[56px]">
            <div className="lg:absolute flex mb-[20px] flex-wrap lg:grid gap-[20px] left-0 top-0">
              <Link
                href={`https://t.me/share?url=${urlToShare}`}
                title="Share on Telegram"
                target={"_blank"}
              >
                <Telegram className={styles.social} />
              </Link>
              <Link
                href={`https://twitter.com/intent/tweet?text=${urlToShare}`}
                title="Share on Twitter"
                target={"_blank"}
              >
                <Twitter className={styles.social} />
              </Link>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${urlToShare}`}
                title="Share on LinkedIn"
                target={"_blank"}
              >
                <LinkedIn className={styles.social} />
              </Link>
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`}
                title="Share on Facebook"
                target={"_blank"}
              >
                <Facebook className={styles.social} />
              </Link>
              <CopyClipboard
                className={styles.social}
                content={`${host}${URLS.BLOG}/${data?.slug}`}
              />
            </div>
            <div
              className={clsx(styles.htmlContent, "text-16/28")}
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="mt-[30px] flex gap-2 uppercase items-center flex-wrap">
              <span className="pr-5">Tags</span>
              {data?.tags &&
                data?.tags?.map((item: string, index: number) => {
                  return (
                    <div
                      key={index}
                      className="px-[12px] py-[6px] text-14/18 xl:text-16/24 tracking-widest font-bold bg-[#1A1F27] rounded-[4px]"
                    >
                      {item}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mt-[100px] text-center text-40/52">Latest News</h2>
        <div className="max-w-[760px] xl:max-w-[1200px] px-[20px] mx-auto">
          {lastestNews && !!(lastestNews.length > 0) && (
            <div className={styles.blogList}>
              {lastestNews?.map((blog: BlogTypes, index: number) => {
                return <BlogItemInList key={index} data={blog} />
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogDetailPage

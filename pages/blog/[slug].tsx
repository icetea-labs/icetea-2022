/* eslint-disable react-hooks/exhaustive-deps */
import type {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import BlogDetailPage from "../../components/Pages/BlogPage/blogDetail"
import styles from "../../styles/Home.module.css"
import { blogs, BlogTypes } from "../../utils/blogConstants"

export const getStaticProps = (async (context) => {
  const blog = blogs.find((blog) => blog?.slug === context.params?.slug)
  const others = blogs.filter((blog) => blog?.slug !== context.params?.slug)
  return { props: { blog, others } }
}) satisfies GetStaticProps<{
  blog?: BlogTypes
  others: BlogTypes[]
}>

export const getStaticPaths = (async () => {
  return {
    paths: blogs.map((v) => {
      return {
        params: { slug: v.slug }
      }
    }),
    fallback: false
  }
}) satisfies GetStaticPaths

export default function BlogDetail({
  blog,
  others
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <DefaultLayout title="Icetea Labs">
        <BlogDetailPage data={blog} lastestNews={others} />
      </DefaultLayout>
    </div>
  )
}

type Props = { host: string | null }

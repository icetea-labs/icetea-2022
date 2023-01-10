import type { NextPage } from "next"
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import ProductPage from "../../components/Pages/ProductPage"
import styles from "../../styles/Home.module.css"

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <DefaultLayout title="Icetea Labs">
        <ProductPage />
      </DefaultLayout>
    </div>
  )
}

export default About

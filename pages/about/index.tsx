import type { NextPage } from "next"
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import AboutPage from "../../components/Pages/AboutPage"
import styles from "../../styles/Home.module.css"

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <DefaultLayout title="Icetea Labs">
        <AboutPage />
      </DefaultLayout>
    </div>
  )
}

export default About

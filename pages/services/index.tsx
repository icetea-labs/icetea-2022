import type { NextPage } from "next"
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import ServicePage from "../../components/Pages/ServicePage"
import styles from "../../styles/Home.module.css"

const Service: NextPage = () => {
  return (
    <div className={styles.container}>
      <DefaultLayout title="Icetea Labs">
        <ServicePage />
      </DefaultLayout>
    </div>
  )
}

export default Service

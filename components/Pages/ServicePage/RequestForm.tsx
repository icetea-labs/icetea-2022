import clsx from "clsx"
import { ChangeEvent, useState } from "react"
import ButtonLink from "../../Base/ButtonLink"
import styles from "./service.module.scss"

type FormDataTypes = {
  name: string
  email: string
  serviceType: string
  content: string
}

const RequestForm = () => {
  const [formData, setFormData] = useState<FormDataTypes>({
    content: "",
    email: "",
    name: "",
    serviceType: ""
  })

  const handleChangeFormData = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className={clsx("w-full pt-20 pb-20 flex justify-center")}>
      <div
        className={clsx(
          styles.bgRequest,
          "w-full max-w-screen-main pt-20 pb-20 px-[60px] justify-center"
        )}
      >
        <div className="flex flex-col items-center w-full pt-[60px] pb-10 bg-black">
          <div className="flex flex-col max-w-[500px] w-full items-center">
            <p className="text-center text-40/52">Request us</p>

            <div className="grid grid-cols-2 gap-3 mt-6 w-full">
              <div className={styles.inputField}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChangeFormData}
                />
              </div>

              <div className={styles.inputField}>
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChangeFormData}
                />
              </div>
            </div>
            <div className={clsx(styles.inputField, "mt-3")}>
              <input
                type="text"
                name="serviceType"
                placeholder="Type of Service"
                value={formData.serviceType}
                onChange={handleChangeFormData}
              />
            </div>

            <div className={clsx(styles.inputField, "mt-3")}>
              <textarea
                name="content"
                rows={7}
                placeholder="Leave a message..."
                value={formData.content}
                onChange={handleChangeFormData}
              />
            </div>

            <ButtonLink href="/" className="mt-11 text-18/24 px-[60px]">
              Submit
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestForm

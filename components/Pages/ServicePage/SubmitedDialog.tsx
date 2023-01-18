import { Dialog } from "@headlessui/react"
import Image from "next/image"

type SubmitedDialogProps = {
  isOpen: boolean
  handleClose: any
}

const SubmitedDialog = (props: SubmitedDialogProps) => {
  const { isOpen, handleClose } = props

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

        <Dialog.Panel className="w-full flex flex-col justify-center items-center h-fit relative m-auto bg-[#0c0d21] text-white max-w-[400px] p-10 rounded-xl">
          <Image
            src="/images/icon-close-dialog.svg"
            alt=""
            width={28}
            height={28}
            className="absolute top-4 right-4 cursor-pointer w-6 h-6"
            onClick={handleClose}
          />
          <Image src="/images/img-submited.png" alt="" width={80} height={80} />
          <p className="text-16/24 font-bevn600 mt-5 text-center">
            Your form was successfully submitted!
          </p>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default SubmitedDialog

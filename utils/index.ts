import moment from "moment"

export const displayDateTimeFormat = (date: string | undefined) => {
  if (!date) return "N/A"
  return moment(new Date(date)).format("DD MMM, YYYY")
}

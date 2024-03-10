export function dateFormatter(date: Date) {
  const currentDate = new Date().getTime()
  const createdDate = new Date(date).getTime()

  const currentSecond = Math.round((currentDate - createdDate) / 1000)
  const currentMinute = Math.round(currentSecond / 60)
  const currentHour = Math.round(currentMinute / 60)
  const currentDay = Math.round(currentHour / 24)
  const currentWeek = Math.round(currentDay / 7)
  const currentMonth = Math.round(currentWeek / 4)
  const currentYear = Math.round(currentWeek / 52)

  if (currentSecond < 60) {
    return currentSecond + 's ago'
  } 

  if (currentMinute < 60) {
    return currentMinute + 'm ago'
  }

  if (currentHour < 24) {
    return currentHour + 'h ago'
  }

  if (currentDay <= 7) {
    return currentDay + 'd ago'
  }

  if (currentWeek <= 4) {
    return currentWeek + 'w ago'
  }

  if (currentMonth <= 12) {
    return currentMonth + 'm ago'
  }

  if (currentWeek >= 52) {
    return currentYear + 'y ago'
  }
}
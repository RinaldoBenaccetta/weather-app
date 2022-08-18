export const formatHour = (date) => {
    const thisDate = new Date(date)
    const hour = thisDate.getHours()

    return `${hour} h`
}
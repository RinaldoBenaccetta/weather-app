export const getHour = (date) => {
    const thisDate = new Date(date)
    const hour = thisDate.getHours()

    return `${hour} h`
}
/**
 * Return the name of the icon file according to the provided API code.
 * 
 * @param {String} icon 
 * @returns {String}
 */
export const formatIcon = (icon) => {
    // console.log(icon);
    const iconNumber = icon.slice(0, 2)

    switch (iconNumber) {
        case '01':
            return 'clear-sky'
        case '02':
            return 'few-clouds'
        case '03':
            return 'scattered-clouds'
        case '04':
            return 'broken-clouds'
        case '09':
            return 'shower-rain'
        case '10':
            return 'rain'
        case '11':
            return 'thunderstorm'
        case '13':
            return 'snow'
        case '50':
            return 'mist'

        default:
            return 'na'
    }
}


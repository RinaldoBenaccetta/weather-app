/**
 * Returns a string containing the HTML of a weather in, populated with provided data's.
 *
 * @param {String} city
 * @returns {String}
 */
export const weatherTitleTemplate = (city: string): string => {
    return `<div class="main__localisation__container">
                <div class="main__localisation__start">Weather in </div>
                <div class="main__localisation__city">${city}</div>
            </div>`
}

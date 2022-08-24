import { APPLICATION } from "../models/application.js"

/**
 * Return the value of the search input.
 * 
 * @returns {String}
 */
export const getCitySearchValue = () => {
    const townInput = APPLICATION.id.header.searchContainer.townInput
    const citySearchInputElement = document.querySelector(townInput)
    const citySearchInputValue = citySearchInputElement.value

    return citySearchInputValue
}
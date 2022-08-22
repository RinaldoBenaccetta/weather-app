import { APPLICATION } from "../models/application.js"

/**
 * Return the value of the search input.
 * 
 * @returns {String}
 */
export const getInput = () => {
    const searchInputElement = document.querySelector(APPLICATION.id.header.searchContainer.townInput)
    const searchInputValue = searchInputElement.value

    return searchInputValue
}
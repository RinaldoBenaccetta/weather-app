import { APPLICATION } from "../models/application.js"
// import { flushAutocomplete } from "../views/flushAutocomplete.js"
import { cityFindHandler } from "./searchButtonListener.js"
import { toggleAutocomplete } from "../utils/toggleAutocomplete.js"

/**
 * Add a listener to the provided element
 * that call the autocomplete handler xhen clicked.
 * 
 * @param {Node} item 
 */
export const autoCompleteItemsListener = (item) => {
    item.addEventListener('click', (element) => autoCompleteItemsHandler(element))
}

/**
 * Get the innerText of the provided item
 * and replace the value of city input by it.
 * Then call the find action as if find button had clicked.
 * 
 * @param {Node} element 
 */
const autoCompleteItemsHandler = (element) => {
    const newValue = getAutocompleteItemValue(element)

    toggleAutocomplete()
    replaceSearchByAutocomplete(newValue)
    cityFindHandler()
}

/**
 * Return the inner text of the provided element.
 * 
 * @param {Node} element 
 * @returns {String}
 */
const getAutocompleteItemValue = element => element.srcElement.innerText

/**
 * Replace value of search input in the DOM by the provided string.
 * 
 * @param {String} text 
 */
const replaceSearchByAutocomplete = (text) => {
    const searchInput = document.querySelector(APPLICATION.id.header.searchContainer.townInput)

    searchInput.value = text
}
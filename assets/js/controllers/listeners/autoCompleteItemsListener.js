import { APPLICATION } from "../../models/application.js"
import { hideAutocomplete } from "../../views/autocomplete/hideAutocomplete.js"
import { weatherController } from "../weatherController.js";

/**
 * Add a listener to the provided element
 * that call the autocomplete handler when clicked.
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

    hideAutocomplete()
    replaceSearchByAutocomplete(newValue)
    weatherController()
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
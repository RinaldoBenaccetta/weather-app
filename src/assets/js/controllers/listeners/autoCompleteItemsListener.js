import {APPLICATION} from "../../models/application.js"
import {weatherController} from "../weatherController.ts"
import {autoCompleteController} from "../autocompleteController.js"

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
 * Then call the find action as if the find button had clicked.
 *
 * @param {Node} element
 */
const autoCompleteItemsHandler = async (element) => {
    const newValue = getAutocompleteItemValue(element)

    replaceSearchByAutocomplete(newValue)
    await autoCompleteController('close')
    await weatherController({city: newValue})
}

/**
 * Return the inner text of the provided element.
 *
 * @param {Node} element
 * @returns {String}
 */
const getAutocompleteItemValue = element => element.target.innerText

/**
 * Replace value of search input in the DOM by the provided string.
 *
 * @param {String} text
 */
const replaceSearchByAutocomplete = (text) => {
    const searchInput = document.querySelector(APPLICATION.id.header.searchContainer.townInput)

    searchInput.value = text
}


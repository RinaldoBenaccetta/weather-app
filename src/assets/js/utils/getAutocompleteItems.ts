import { APPLICATION } from "../models/application.js"

/**
 * Get a nodeList containing all the items of autocomplete.
 *
 * @returns {NodeListOf<Element>}
 */
export const getAutocompleteItems = (): NodeListOf<Element> => {
    return document.querySelectorAll('.' + APPLICATION.class.header.searchContainer.autocomplete.list.item)
}

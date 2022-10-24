import { APPLICATION } from "../../models/application.js"

/**
 * Template the provided string on a LI element
 * to be added to the autocomplete container.
 * @param {String} item
 * @returns {String}
 */
export const autocompleteItemTemplate = (item: string): string => {
    const CLASS: string = APPLICATION.class.header.searchContainer.autocomplete.list.item

    return `<li class="${CLASS}">${item}</li>`
}

import { APPLICATION } from "../../models/application.js"

/**
 * Remove the content of the autocomplete container.
 */
export const removeAutocompleteContent = () => {
    const container = document.querySelector(APPLICATION.id.header.searchContainer.autocomplete.list)

    container.innerHTML = ''
}
import { APPLICATION } from "../models/application.js";

/**
 * Toggle the hidden class of autocomplete container.
 */
export const removeAutocomplete = () => {
    const container = APPLICATION.id.header.searchContainer.autocomplete.container
    const element = document.querySelector(container)
    const className = APPLICATION.class.hidden

    element.classList.add(className)
}
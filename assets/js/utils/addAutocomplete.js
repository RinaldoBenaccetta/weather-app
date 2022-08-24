import { APPLICATION } from "../models/application.js";

/**
 * Show autocomplete container by removing the hidden class of it.
 */
export const addAutocomplete = () => {
    const container = APPLICATION.id.header.searchContainer.autocomplete.container
    const element = document.querySelector(container)
    const hiddenClass = APPLICATION.class.hidden

    element.classList.remove(hiddenClass)
}
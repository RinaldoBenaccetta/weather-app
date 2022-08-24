import { APPLICATION } from "../models/application.js";

/**
 * Show autocomplete container by removing the hidden class of it.
 */
export const showAutocomplete = () => {
    const autocompleteContainerId = APPLICATION.id.header.searchContainer.autocomplete.container
    const autocompleteElementId = document.querySelector(autocompleteContainerId)
    const hiddenClass = APPLICATION.class.hidden

    autocompleteElementId.classList.remove(hiddenClass)
}
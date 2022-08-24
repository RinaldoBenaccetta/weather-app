import { APPLICATION } from "../../models/application.js";

/**
 * Show autocomplete container by removing the hidden class of it.
 */
export const showAutocomplete = () => {
    const autocompleteContainerId = APPLICATION.id.header.searchContainer.autocomplete.container
    const autocompleteContainerElement = document.querySelector(autocompleteContainerId)
    const hiddenClass = APPLICATION.class.hidden

    autocompleteContainerElement.classList.remove(hiddenClass)
}
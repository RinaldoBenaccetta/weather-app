import { APPLICATION } from "../../models/application.js";

/**
 * Hide autocomplete container by adding the hidden class to it.
 */
export const hideAutocomplete = () => {
    const autocompleteContainerId = APPLICATION.id.header.searchContainer.autocomplete.container
    const autocompleteContainerElement = document.querySelector(autocompleteContainerId)
    const hiddenClass = APPLICATION.class.hidden

    autocompleteContainerElement.classList.add(hiddenClass)
}
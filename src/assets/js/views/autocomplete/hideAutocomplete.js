import { APPLICATION } from "../../models/application.js"
import { ELEMENTS } from "../../models/elements.js"

/**
 * Hide autocomplete container by adding the hidden class to it.
 */
export const hideAutocomplete = () => {
    const hiddenClass = APPLICATION.class.hidden

    ELEMENTS.autocompleteContainer.classList.add(hiddenClass)
}
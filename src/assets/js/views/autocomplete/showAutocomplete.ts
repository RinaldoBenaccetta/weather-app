import { APPLICATION } from "../../models/application.js";
import { ELEMENTS } from "../../models/elements.js"

/**
 * Show autocomplete container by removing the hidden class of it.
 */
export const showAutocomplete = (): void => {
    const hiddenClass: string = APPLICATION.class.hidden

    ELEMENTS.autocompleteContainer.classList.remove(hiddenClass)
}

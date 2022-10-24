import { ELEMENTS } from "../../models/elements.js";

/**
 * Remove the content of the autocomplete container.
 */
export const removeAutocompleteContent = (): void => {
    ELEMENTS.autocompleteList.innerHTML = ''
}

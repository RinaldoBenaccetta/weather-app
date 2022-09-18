import { autocompleteItemTemplate } from "./autocompleteItemTemplate.js"
import { templateElement } from "../templateElement.js"
import { autoCompleteItemsListener } from "../../controllers/listeners/autoCompleteItemsListener.js"
import { ELEMENTS } from "../../models/elements.js";

/**
 * Add a city item in autocomplete DOM element.
 * The item is templated according to autocompleteItemTemplate.
 *
 * @param {String} city
 */
export const appendAutocompleteItem = (city) => {
    const element = templateElement(autocompleteItemTemplate(city))

    ELEMENTS.autocompleteList.appendChild(element)

    autoCompleteItemsListener(element)
}

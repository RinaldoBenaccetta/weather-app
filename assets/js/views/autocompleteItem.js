import { APPLICATION } from "../models/application.js"
import { autocompleteItemTemplate } from "./autocompleteItemTemplate.js"
import { templateElement } from "./templateElement.js"
import { autoCompleteItemsListener } from "../controllers/listeners/autoCompleteItemsListener.js";

/**
 * Add a city item in autocomplete DOM element.
 * The item is templated according to autocompleteItemTemplate.
 * 
 * @param {String} city 
 * @param {Integer|String} id 
 */
export const autocompleteItem = (city) => {
    const element = templateElement(autocompleteItemTemplate(city))
    const container = APPLICATION.id.header.searchContainer.autocomplete.list
    const parent = document.querySelector(container)

    parent.appendChild(element)

    autoCompleteItemsListener(element)
}
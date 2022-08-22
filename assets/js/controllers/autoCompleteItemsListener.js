import { APPLICATION } from "../models/application.js"
import { flushAutocomplete } from "../views/flushAutocomplete.js"
import { buttonHandler } from "./searchButtonListener.js";

export const autoCompleteItemsListener = (item) => {
    item.addEventListener('click', (element) => autoCompleteItemsHandler(element))
}

const autoCompleteItemsHandler = (element) => {
    const newValue = getAutocompleteItemValue(element)

    replaceSearchByAutocomplete(newValue)
    flushAutocomplete()
    buttonHandler()
}

const getAutocompleteItemValue = element => element.srcElement.innerHTML

const replaceSearchByAutocomplete = (text) => {
    const searchInput = document.querySelector(APPLICATION.id.header.searchContainer.townInput)

    searchInput.value = text
}
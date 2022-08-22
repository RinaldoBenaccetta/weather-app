import { APPLICATION } from "../models/application.js"

export const autocompleteItemTemplate = (item) => {
    const CLASS = APPLICATION.class.header.searchContainer.autocomplete.list.item

    return `<li class="${CLASS}">${item}</li>`
}
import { APPLICATION } from "../models/application.js"

export const getInput = () => {
    const searchInputElement = document.querySelector(APPLICATION.id.header.searchContainer.townInput)
    const searchInputValue = searchInputElement.value

    return searchInputValue
}
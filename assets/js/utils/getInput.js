import { APPLICATION } from "../models/application.js"
import { encodeInput } from "./encodeInput.js"

export const getInput = () => {
    const searchInputElement = document.querySelector(APPLICATION.id.header.searchContainer.townInput)
    const searchInputValue = encodeInput(searchInputElement.value)

    return searchInputValue
}
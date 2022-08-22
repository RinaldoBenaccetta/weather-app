import { APPLICATION } from "../models/application.js"
import { weatherController } from "./weatherController.js"
// import { encodeInput } from "../utils/encodeInput.js"

export const searchButtonListener = () => {
    const searchButtonElement = document.querySelector(APPLICATION.id.header.searchContainer.search)

    searchButtonElement.addEventListener('click', buttonHandler)
}

export const buttonHandler = () => {
    const searchInputElement = document.querySelector(APPLICATION.id.header.searchContainer.townInput)
    const searchInputValue = searchInputElement.value

    weatherController(searchInputValue)
}
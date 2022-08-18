import { APPLICATION } from "../models/application.js"
import { weatherController } from "./weatherController.js";

export const searchButtonListener = () => {
    const searchButtonElement = document.querySelector(APPLICATION.id.header.search)

    searchButtonElement.addEventListener('click', buttonListener)
}

const buttonListener = () => {
    const searchInputElement = document.querySelector(APPLICATION.id.header.townInput)
    const searchInputValue = searchInputElement.value

    weatherController(searchInputValue)
}
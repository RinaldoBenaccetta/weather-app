import { APPLICATION } from "../models/application.js"

export const flushMainContainer = () => {
    const container = document.querySelector(APPLICATION.id.main.container)

    container.innerHTML = ''
}
import { APPLICATION } from "../models/application.js"

export const flushMainContainer = () => {
    const container = document.querySelector(APPLICATION.id.main.cards.container)

    // console.log(APPLICATION.id.main.cards.container);

    container.innerHTML = ''
}
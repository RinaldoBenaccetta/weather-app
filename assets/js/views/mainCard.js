import { APPLICATION } from "../models/application.js"
import { mainCardTemplate } from "./mainCardTemplate.js"
import { templateElement } from "./templateElement.js"

export const mainCard = (data, id) => {
    const element = templateElement(mainCardTemplate(data, id))

    APPLICATION.element.mainContainer.appendChild(element)
}
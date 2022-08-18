import { APPLICATION } from "../models/application.js"
import { mainCardTemplate } from "./mainCardTemplate.js"

export const mainCard = (data, id) => {
    APPLICATION.element.mainContainer.innerHTML = mainCardTemplate(data, id)
}
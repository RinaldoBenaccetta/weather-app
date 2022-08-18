import { APPLICATION } from "../models/application.js"

export const mainCardTemplate = (data, id) => {
    const CLASS = APPLICATION.class.main.card
    const ID = APPLICATION.id.main.card

    return `<div class="${CLASS.container}" id="${ID.container}-${id}">
                <div class="${CLASS.hour}" id="${ID.hour}-${id}">${data.hour}</div>
                <div class="${CLASS.icon}" id="${ID.icon}-${id}"></div>
                <div class="${CLASS.state}" id="${ID.state}-${id}">${data.state}</div>
                <div class="${CLASS.temp}" id="${ID.temp}-${id}">${data.temp}</div>
                <div class="${CLASS.feel}" id="${ID.feel}-${id}">${data.feel}</div>
            </div>`
}
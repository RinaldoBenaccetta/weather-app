import { APPLICATION } from "../models/application.js";

/**
 * Return the name of the icon file in the provided icon list
 * according to the provided API code.
 *
 * @param {String} iconId
 * @param {Array} iconList
 * @returns {String}
 */
export const formatIcon = (iconId, iconList) => {
    const emptyIcon = APPLICATION.class.icons.empty
    const usableIconId = getUsableIconId(iconId)

    return iconList.reduce((matchIcon, icon) => {
        return icon[0] === usableIconId ? icon[1] : matchIcon
    }, emptyIcon)
}

const getUsableIconId = (iconId) => iconId.slice(0, 2)

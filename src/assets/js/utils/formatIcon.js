import { APPLICATION } from "../models/application.js";

/**
 * Return the name of the icon file in the provided icon list
 * according to the provided API code.
 * 
 * @param {String} iconId
 * @returns {String}
 */
export const formatIcon = (iconId, iconList) => {
    const emptyIcon = APPLICATION.class.icons.empty
    const useableIconId = getuseableIconId(iconId)

    return iconList.reduce((matchIcon, icon) => {
        return icon[0] === useableIconId ? icon[1] : matchIcon
    }, emptyIcon)
}

const getuseableIconId = (iconId) => iconId.slice(0, 2)
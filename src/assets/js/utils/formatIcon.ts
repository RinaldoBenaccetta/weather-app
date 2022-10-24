import { APPLICATION } from "../models/application.js";

/**
 * Return the name of the icon file in the provided icon list
 * according to the provided API code.
 *
 * @param {String} iconId
 * @param {Array} iconList
 * @returns {String}
 */
export const formatIcon = (iconId: string, iconList: string[]): string => {
    const emptyIcon: string = APPLICATION.class.icons.empty
    const usableIconId: string = getUsableIconId(iconId)

    // todo : use find instead of reduce
    return iconList.reduce((matchIcon: string, icon: string): string => {
        return icon[0] === usableIconId ? icon[1] : matchIcon
    }, emptyIcon)
}

const getUsableIconId = (iconId: string): string => iconId.slice(0, 2)

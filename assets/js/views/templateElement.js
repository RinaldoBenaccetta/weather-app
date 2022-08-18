/**
 * Returns a node element from the provided HTML string.
 * Found here : https://www.w3docs.com/snippets/javascript/how-to-create-a-new-dom-element-from-html-string.html
 * 
 * @param {String} html 
 * @returns {Node}
 */
export const templateElement = (html) => {
    let template = document.createElement('template')

    // Never return a space text node as a result
    html = html.trim()
    template.innerHTML = html

    return template.content.childNodes[0]
}
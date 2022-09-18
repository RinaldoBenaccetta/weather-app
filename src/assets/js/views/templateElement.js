/**
 * Returns a node element from the provided HTML string.
 *
 * InnerHTML only add first element of the template,
 * so the template must content a wrapping element to sho
 * all elements in template,
 * that make a div in a div that is not nice.
 * To counter that, we place it in a template element
 * before adding it to the target parent element.
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

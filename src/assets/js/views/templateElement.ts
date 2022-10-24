/**
 * Returns a node element from the provided HTML string.
 *
 * InnerHTML only add first element of the template,
 * so the template must content a wrapping element to show
 * all elements in template,
 * that make a div in a div that is not nice.
 * To counter that, we place it in a template element
 * before adding it to the target parent element.
 * Found here : https://www.w3docs.com/snippets/javascript/how-to-create-a-new-dom-element-from-html-string.html
 *
 * @param {String} html
 * @returns {Node}
 */
export const templateElement = (html: string): Node => {
    let template: HTMLTemplateElement = document.createElement('template')

    // Never return a space text node as a result
    template.innerHTML = html.trim()

    return template.content.childNodes[0]
}

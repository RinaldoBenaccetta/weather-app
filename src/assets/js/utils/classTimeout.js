/**
 * Add provided class to the DOM element with provided id,
 * and remove the class after provided time in miliseconds.
 * 
 * @param {String} elementClass 
 * @param {String} id 
 * @param {Integer} timer 
 */
export const classTimeout = (elementClass, id, timer) => {
    const container = document.querySelector(id);

    // add class to container.
    container.classList.add(elementClass);
    // wait before removing class.
    setTimeout(() => container.classList.remove(elementClass), timer);
};
// I don't wanna write document.querySelector all the time ok
/**
 * @param {string} selector
 * @returns {HTMLElement}
 */
function $(selector) {
  return document.querySelector(selector)
}

$("#addEmployeeForm").addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("hi")
})

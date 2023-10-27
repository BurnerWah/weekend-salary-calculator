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
  const firstName = $("#employeeFirstName")
  const lastName = $("#employeeLastName")
  const id = $("#employeeId")
  const title = $("#employeeTitle")
  const salary = $("#employeeSalary")
  console.log("Employee obtained:", {
    name: `${firstName.value} ${lastName.value}`,
    id: id.value,
    title: title.value,
    salary: salary.value,
  })
})

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

  const employee = createEmployee(
    firstName.value,
    lastName.value,
    id.value,
    title.value,
    salary.value
  )

  $("#employeeTable").appendChild(employee)

  firstName.value = ""
  lastName.value = ""
  id.value = ""
  title.value = ""
  salary.value = ""
})

/**
 * Creates an Employee element
 * @param {string} firstName
 * @param {string} lastName
 * @param {(string|number)} id
 * @param {string} title
 * @param {(string|number)} salary
 * @returns {HTMLTableRowElement}
 */
function createEmployee(firstName, lastName, id, title, salary) {
  const row = document.createElement("tr")

  const firstNameTD = document.createElement("td")
  firstNameTD.innerText = firstName
  const lastNameTD = document.createElement("td")
  lastNameTD.innerText = lastName
  const idTD = document.createElement("td")
  idTD.innerText = id
  const titleTD = document.createElement("td")
  titleTD.innerText = title
  const salaryTD = document.createElement("td")
  salaryTD.innerText = salary
  const deleteTD = document.createElement("td")

  row.appendChild(firstNameTD)
  row.appendChild(lastNameTD)
  row.appendChild(idTD)
  row.appendChild(titleTD)
  row.appendChild(salaryTD)
  row.appendChild(deleteTD)

  return row
}

// I don't wanna write document.querySelector all the time ok
/**
 * @param {string} selector
 * @returns {HTMLElement}
 */
function $(selector) {
  return document.querySelector(selector)
}

let totalMonthly = 0
const TOTAL_MONTHLY_COST = 20000

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
    Number(salary.value)
  )

  $("#employeeTable").appendChild(employee)

  firstName.value = ""
  lastName.value = ""
  id.value = ""
  title.value = ""
  salary.value = ""

  updateTotalMonthly()
})

/**
 * Creates an Employee element
 * @param {string} firstName
 * @param {string} lastName
 * @param {(string|number)} id
 * @param {string} title
 * @param {number} salary
 * @returns {HTMLTableRowElement}
 */
function createEmployee(firstName, lastName, id, title, salary) {
  const row = document.createElement("tr")

  const firstNameTD = document.createElement("td")
  firstNameTD.innerHTML = firstName
  const lastNameTD = document.createElement("td")
  lastNameTD.innerHTML = lastName
  const idTD = document.createElement("td")
  idTD.innerHTML = id
  idTD.classList.add("monospace")
  const titleTD = document.createElement("td")
  titleTD.innerHTML = title
  const salaryTD = document.createElement("td")
  salaryTD.innerHTML = salary.toLocaleString()
  salaryTD.classList.add("money")

  const deleteTD = document.createElement("td")
  const deleteButton = document.createElement("button")
  deleteButton.innerText = "❌"
  deleteButton.addEventListener("click", () => {
    row.remove()
    totalMonthly -= salary / 12
    updateTotalMonthly()
  })
  deleteTD.appendChild(deleteButton)

  // Saving this so we can reuse this value later
  const monthlySalary = salary / 12
  totalMonthly += monthlySalary

  row.appendChild(firstNameTD)
  row.appendChild(lastNameTD)
  row.appendChild(idTD)
  row.appendChild(titleTD)
  row.appendChild(salaryTD)
  row.appendChild(deleteTD)

  return row
}

function updateTotalMonthly() {
  $("#totalMonthly").innerHTML = totalMonthly.toLocaleString()
  if (totalMonthly > TOTAL_MONTHLY_COST) {
    $("footer").classList.add("over-budget")
  } else {
    $("footer").classList.remove("over-budget")
  }
}

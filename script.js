const userCardTempalte = document.querySelector('[data-users-template]')
const userCardContainer = document.querySelector('[data-user-cards-container]')
const searchInput = document.querySelector('[data-search-input]')

let users = []

searchInput.addEventListener("input", (e) => {
    let valueSearch = e.target.value
    users.forEach( user => {
        const isVisible = 
        user.name.toLowerCase().includes(valueSearch)
        ||
        user.email.toLowerCase().includes(valueSearch)
        user.element.classList.toggle("hide", !isVisible)
    })
})


fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTempalte.content.cloneNode(true).children[0]
      const name = card.querySelector("[data-name]")
      const email = card.querySelector("[data-email]")
      name.textContent = user.name
      email.textContent = user.email
      userCardContainer.append(card)
      return { name: user.name, email: user.email, element: card }
    })
  })
// const span = document.querySelector("span")
// let username = '<h1>farrukh<h1>'
// span.style.color = 'red'
// //span.innerText = username
// span.innerHTML = username
// const span = document.createElement("")
// span.innerText='the f is this'
// document.body.append(span)


const usersAPI = 'https://jsonplaceholder.typicode.com/users'
const tbody = document.querySelector('#tbody')

const getUser = async () => {
    const res = await fetch(usersAPI)
    const data = await res.json()

    data.forEach(user => {
        const tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.address.suite}</td>
            <td>${user.address.city}</td>
            <td>${user.phone}</td>
            <td>${user.address.geo.lat}</td>
            `
        tbody.append(tr)
    })
    }
    getUser()

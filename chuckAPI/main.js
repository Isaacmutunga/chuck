let categorySelect = document.getElementById("categories")
let goBtn = document.getElementById("goBtn")
let image = document.getElementById("image")
let joke = document.getElementById("joke")

function get(url, callback) {
    axios.get(url)
        .then(res => {
            callback(res.data)
        })
}

window.onload = () => {
    get("https://api.chucknorris.io/jokes/categories", (categories) => {
        let html = ""
        categories.forEach(category => {
            html += `<option>${category}</option>`
        })
        categorySelect.innerHTML = html
    })
}



goBtn.onclick = () => {
    let cat = categorySelect.value

    get("https://api.chucknorris.io/jokes/random?category=" + cat, (jokeData) => {
        joke.innerHTML = jokeData.value
        image.style.display = "block"
    })


}
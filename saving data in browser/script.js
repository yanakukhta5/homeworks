const textarea = document.querySelector("textarea")
textarea.value = localStorage.getItem("text")

textarea.addEventListener("input", (event) => {
 localStorage.setItem("text", event.target.value)
})

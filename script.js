const elementoH1 = document.querySelector("h1")
const elementoA = document.querySelector("a")
const elementoUl = document.querySelector("ul")
const elementoOl = document.querySelector("ol")


elementoH1.innerText = "Exercicio sobre innerHTML e innerText"
elementoA.innerText = "Proz Educação"
elementoUl.innerHTML = `
    <li>Lista não ordenada item 1</li>
    <li>Lista não ordenada item 2</li>
    <li>Lista não ordenada item 3</li>
`

elementoOl.innerHTML = `
    <li><a href="#">Lista ordenada item 1</a></li>
    <li><a href="#">Lista ordenada item 2</a></li>
    <li><a href="#">Lista ordenada item 3</a></li>
`
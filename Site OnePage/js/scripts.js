const images = [
    "img/lelao.jfif",
    "img/blackflag.jpg",
    "img/montanha.jfif",
    "img/praia.jpg",
    "img/rioverde.jfif"
]

let cabecalho = document.querySelector("#cabecalho")
let children = cabecalho.children

for(let i = 0; i < children.length; i++) {
    let index = Math.round(Math.random() * (images.length - 1))
    console.log(index);
    let child = children.item(i)
    child.style.backgroundImage = `url(${images[index]})`
}

console.log(children)
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let sombra = document.getElementById("sombra")

function abreFechaMenu() {
    // se o menu estiver fechado
    if (window.getComputedStyle(menu).right == "-210px") {
        // abrir menu
        menu.style.right = "0"
        // mostrar icone X
        iconeX.style.display = "inline"
        // esconder icone barras
        iconeBarras.style.display = "none"

        sombra.style.right = "0"
    }
    else {
        menu.style.right = "-210px"

        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"

        sombra.style.right = "-101vw"
    }
}

onresize = () => {
    if (window.getComputedStyle(menu).right == "-210px") {
        iconeX.style.display = "none"
    } else {
        console.log(iconeBarras);
        
        iconeBarras.style.display = "inline"
    }

}
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
  //pegar tag img
  const img = document.querySelector("#profile img")
  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar light
    img.setAttribute("src",  "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "/assets/avatar-dark.png")
  }
  //se tiver sem light mode, manter a img antiga
}

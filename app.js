// Pika-pika suerte!

// NO MODIFICAR

document.querySelector("#red").addEventListener("click", updateBgColor);
document.querySelector("#blue").addEventListener("click", updateBgColor);
document.querySelector("#green").addEventListener("click", updateBgColor);
document.querySelector("#sangria").addEventListener("click", updateBgColor2);

// MODIFICAR A PARTIR DE AQUÍ

function updateBgColor(event) {
  let color = event.target.id;
  if (color) {
      console.log(`He clicado en el color ${color}`);
      document.querySelector("img").style.backgroundColor = color;
  } else {
    const div = document.querySelector('div')
    const divColor = window.getComputedStyle(div);
    color = divColor.getPropertyValue('background-color');
    console.log(color)
    document.querySelector("img").style.backgroundColor = color;
  }
}

function updateBgColor2(event) {
    const div = document.querySelector('#sangria')
    const divColor = window.getComputedStyle(div);
    let color = divColor.getPropertyValue('background-color');
    console.log(color)
    document.querySelector("img").style.backgroundColor = color;
}
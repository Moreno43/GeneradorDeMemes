// ********************************************
//      MODO CLARO | MODO OSCURO        
// ********************************************

function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("modo-light");
}

//*****************************************************************
//                  BOTON DESCARGA MEME 
// *****************************************************************

const contenedorMeme = document.querySelector(".contenedor-meme");
const buttonDescarga = document.getElementById("button-descarga");

// Agrega un evento de clic al botón de descarga
buttonDescarga.addEventListener("click", function () {
  // Utiliza dom-to-image para convertir el contenedor-meme en una imagen
  domtoimage.toBlob(contenedorMeme).then(function (blob) {
    // Crea un enlace de descarga
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "meme.png";

    // Dispara la descarga del meme
    link.click();
  });
});


// ********************************************************
// CAMBIO DE COLUMNA IMAGEN A COLUMNA TEXTO CON BOTONES NAV | BOTON CIERRE RESPONSIVE
// ********************************************************
const btnImg = document.getElementById('button-text-img');
const btnText = document.getElementById('button-text-text');
const panelImagen = document.getElementById('panel-imagen');
const panelTexto = document.getElementById('panel-texto');
const btnPanelCierre = document.getElementById('panel-close-button');

btnImg.addEventListener('click', () => {
    panelImagen.style.display = "block";
    panelTexto.style.display = "none";
})

btnText.addEventListener('click',() => {
    panelTexto.style.display = "block";
    panelImagen.style.display = "none";
})

btnPanelCierre.addEventListener('click', () =>{
    panelTexto.style.display = "none";
    panelImagen.style.display = "none";
})

// **********************************
//         URL INPUT- IMAGEN
// **********************************

// Obtener referencia al elemento de entrada de URL
const urlInput = document.getElementById('url-img');

// Obtener referencia al elemento div
const cajaImagen = document.getElementById('caja-imagen');

// Agregar evento para escuchar cambios en el campo de entrada
urlInput.addEventListener('input', function() {
  // Obtener el valor de la URL de la imagen
  const imageUrl = urlInput.value;

  // Establecer la imagen como fondo del div
  cajaImagen.style.backgroundImage = `url('${imageUrl}')`;
});

// ***************************
// COLOR DE FONDO DE IMAGEN //CAMBIOS SELECT IMAGEN | MEZCLA DE FONDO
// **************************
const contenedora = document.getElementById('caja-meme');
const fondoColorImg = document.getElementById('incolor');
const colorValor = document.getElementById('imagen-color');
const mezcla = document.getElementById('mezcla');

fondoColorImg.addEventListener('input', (event) =>{
    const color = event.target.value;
    contenedora.style.background = color;
    colorValor.innerHTML = `${color}`;
})

const fondoColor = () => {
    imagen.style.backgroundColor = fondoColorImg.value;
}

const actualizarTipoMezcla = () => {
    imagen.style.backgroundBlendMode = mezcla.value;
};

fondoColorImg.addEventListener('change', fondoColor);
mezcla.addEventListener('change', actualizarTipoMezcla);

// *******************************************************
//+++++PANEL DE FILTROS EN LA IMAGEN////CAJA MEME
// *******************************************************

/***************BOTON RESTABLECER FILTROS**************/



// *******************************************************
//      INPUT TEXTO CAJA MEME | CHECKBOX CAJA MEME////
// *******************************************************

function actualizar() {
    var texto = document.getElementById("inputTop").value;
    document.getElementById("textoTop").innerHTML = texto;
    var texto = document.getElementById("inputBut").value;
    document.getElementById("textoInf").innerHTML = texto;
}

// *******************************************************************
//      CAMBIO TIPO DE FUENTE
// *******************************************************************



// *******************************************************************
//      TAMAÑO DE FUENTE
// *******************************************************************
const textSize = document.getElementById('text-size-input');

textSize.addEventListener('input', (event) => {
    const NumberFont = event.target.value;
    textoTop.style.fontSize = `${NumberFont}px`;
    textoInf.style.fontSize = `${NumberFont}px`;
})

// ******************************************************************
//      ALINEACION DE TEXTO 
// *****************************************************************
const btnAlignLeft = document.getElementById('btn-text-left-align');
const btnAlignCenter = document.getElementById('btn-text-center-align');
const btnAlignRight = document.getElementById('btn-text-right-align');

btnAlignLeft.addEventListener('click', () => {
    textoTop.style.textAlign = "left";
    textoInf.style.textAlign = "left";
});
btnAlignCenter.addEventListener('click', () => {
    textoTop.style.textAlign = "center";
    textoInf.style.textAlign = "center";
});
btnAlignRight.addEventListener('click', () => {
    textoTop.style.textAlign = "right";
    textoInf.style.textAlign = "right";
});

// **************************************************
//      COLOR DE TEXTO Y FONDO | FONDO TRANSPARENTE
// *************************************************
const colorTexto = document.getElementById('incolor2');
const colorFondoTexto = document.getElementById('incolor3');
const textoColorValor = document.getElementById('texto-color');
const fondoColorValor = document.getElementById('fondo-color');

const check3 = document.getElementById('sin-fondo');

colorTexto.addEventListener('input', (event) => {
    const colorT = event.target.value;
    textoTop.style.color = `${colorT}`;
    textoInf.style.color = `${colorT}`;
    textoColorValor.innerHTML = `${colorT}`;
})
colorFondoTexto.addEventListener('input', (event) => {
    const colorF = event.target.value;
    textoTop.style.background = `${colorF}`;
    textoInf.style.background = `${colorF}`;
    fondoColorValor.innerHTML = `${colorF}`;
})

check3.addEventListener('change', (event) => {
    if (event.target.checked) {
        textoTop.style.backgroundColor = 'transparent';
        textoInf.style.backgroundColor = 'transparent';
        textoTop.style.position = 'absolute';
        textoInf.style.position = 'absolute';
    }
    else {
        textoTop.style.backgroundColor = colorFondoTexto.value;
        textoInf.style.backgroundColor = colorFondoTexto.value;
        textoTop.style.position = 'relative';
        textoInf.style.position = 'relative';
    }   
});     


// ***********************************************************
//      CONTORNO 
// ***********************************************************
const ninguno = document.getElementById('ninguno');
const claro = document.getElementById('claro');
const oscuro = document.getElementById('oscuro');

ninguno.addEventListener('click', () => {
    textoTop.style.textShadow = '';
    textoInf.style.textShadow = '';
});
claro.addEventListener('click', () => {
    textoTop.style.textShadow = '-2px -2px 1px #fff, 2px 2px 1px #fff, -2px 2px 1px #fff, 2px -2px 1px #fff';
    textoInf.style.textShadow = '-2px -2px 1px #fff, 2px 2px 1px #fff, -2px 2px 1px #fff, 2px -2px 1px #fff';
});
oscuro.addEventListener('click', () => {
    textoTop.style.textShadow = '-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000';
    textoInf.style.textShadow = '-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000';
});

// ***********************************************************
//      ESPACIADO 
// ***********************************************************
const padding = document.getElementById('padding-input');

padding.addEventListener('input', () => {
    textoTop.style.padding = `${padding.value}px`;
    textoInf.style.padding = `${padding.value}px`;
});

// ***********************************************************
//      INTERLINEADO
// ***********************************************************
const lineHeight = document.getElementById('heigth-input')

lineHeight.addEventListener('input', () => {
    textoTop.style.lineHeight = lineHeight.value;
    textoInf.style.lineHeight =lineHeight.value;
});





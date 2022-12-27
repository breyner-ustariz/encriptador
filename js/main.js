const input = document.getElementById('input');
const button_encriptar = document.getElementById('encriptar')
const button_desencriptar = document.getElementById('desencriptar')
const button_copiar = document.getElementById('copiar')
const copiado = document.querySelector('.copiado')
const image = document.getElementById('image');
const desencriptado = document.getElementById('show-text')

button_encriptar.addEventListener('click', encriptar);

// función para encriptar el texto
function encriptar(e){
      e.preventDefault();
      desencriptado.style.display = 'block'
      if (input.value !== ''){
         let cifrar = input.value;
         let encriptacion = cifrar.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
         console.log(encriptacion);
         image.style.display = 'none';
         desencriptado.value = encriptacion
         input.value = ''
      }
      button_copiar.style.display = 'block'
   }

button_desencriptar.addEventListener('click', desencriptar);

// función para desencriptar el texto
function desencriptar(e){
   e.preventDefault();
   desencriptado.style.display = 'block'
   if (input.value !== ''){
      let cifrar = input.value;
      let encriptacion = cifrar.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
      console.log(encriptacion);
      image.style.display = 'none';
      desencriptado.value = encriptacion
      input.value = ''
   }
   button_copiar.style.display = 'block'
}
button_copiar.addEventListener('click', copiar)

// función para copiar al portapapeles el texto encriptado o desencriptado
function copiar(e){
   e.preventDefault();
   desencriptado.focus();
   document.execCommand('selectAll');
   document.execCommand('copy');
   button_copiar.style.display = 'none';
   copiado.style.display = 'block'

   //función para que desaparezca el elemento "copiado al portapapeles" después de 4 segundos
   setTimeout(()=>{
      copiado.style.display = 'none'
      button_copiar.style.display = 'block';
   }, 4000)
}



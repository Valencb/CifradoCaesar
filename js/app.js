// Se le pide una frase al usuario
//Se hace una función la cual codificará los caracteres ingresados
var cadena= '';
var texto= "";
function cipher(texto){
    var numero = 0;
    texto = prompt ('¿Deseas cifrar una frase?','Escribe tu frase, aquí!');
    if (texto === null || typeof texto === isNaN || (isNaN(texto) === false) ){
      alert('Ingrese una cadena válida');
      return cipher(texto);
      }
  for (var j= 0; j< texto.length; j++){
    if (isNaN(texto.charAt(j)) === false)
    numero++
  }
  if (numero > 0){
    alert('La cadena contiene números o carácteres especiales, ingrese una cadena nueva');
    return cipher(texto);
  }

  // Se itera cada caracter para darle una asignación diferente
  for (var i= 0; i< texto.length; i++){
//Se asigna un codigo de acuerdo a nuestra tabla en ASCII
    var code = texto.charCodeAt(i);
//Si el código es de carácter espacio, se deja sin cifrar
    if (code === 32){
      cadena += ' ';
//De acuerdo al número en el código asignado anteriormente se le asigna un nuevo caracter
    }else if ( code >= 65 && code <= 90){ //mayusculas
      var newChar = (code - 65 + 33) % 26 + 65;
      cadena += String.fromCharCode (newChar);// se le da un valor y nos devuelve el caracter
    }else if ( code >= 97 && code <= 122){ //minusculas
      var newChar2 = (code - 97 + 33) % 26 + 97;
      cadena += String.fromCharCode (newChar2);// se le da un valor y nos devuelve el caracter
    }
  }
  return cadena;
}




var phrase = '';
function decipher(texto){
    var numero = 0;
    texto = prompt ('¿Deseas cifrar una frase?','Escribe tu frase, aquí!');
    if (texto === null || typeof texto === isNaN || (isNaN(texto) === false) ){
      alert('Ingrese una cadena válida');
      return decipher(texto);
      }
  for (var j= 0; j< texto.length; j++){
    if (isNaN(texto.charAt(j)) === false)
    numero++
  }
  if (numero > 0){
    alert('La cadena contiene números o carácteres especiales, ingrese una cadena nueva');
    return decipher(texto);
  }

// Se itera cada caracter para darle una asignación diferente
  for (var i= 0; i< texto.length; i++){
//Se asigna un codigo de acuerdo a nuestra tabla en ASCII
    var code = texto.charCodeAt(i);
//Si el código es de carácter espacio, se deja sin cifrar
    if (code === 32){
      phrase += ' ';
//De acuerdo al número en el código asignado anteriormente se le asigna un nuevo caracter
    }else if ( code >= 65 && code <= 90){ // mayusculas
      var newChar = (code-65) - 33 % 26 + 65;
      phrase += String.fromCharCode (newChar); // se le da un valor y nos devuelve el caracter
    }else if ( code >= 97 && code <= 122){ // minusculas
      var newChar2 = (code-97) - 33 % 26 + 97;
      phrase += String.fromCharCode (newChar2);// se le da un valor y nos devuelve el caracter
    }
  }
  return phrase;

}
cipher();
decipher()
document.getElementById("nombre").innerHTML = texto;
document.getElementById("frase").innerHTML = "Tu codigo cipher es " + cadena;
document.getElementById("Codigo").innerHTML ="Tu codigo decipher es "+ phrase;

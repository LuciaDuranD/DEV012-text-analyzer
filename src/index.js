const boton = document.getElementById("reset-button");
const textarea = document.querySelector('textarea[name="user-input"]');

boton.addEventListener("click", function () {
  if (textarea.value === "") {
    alert("Debes ingresar algun texto para poder analizarlo.");
  } else {
    textarea.value = "";
  }
});
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

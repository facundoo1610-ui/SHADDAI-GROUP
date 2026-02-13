let carrito = [];

function agregar(nombre, precio) {
  carrito.push({ nombre, precio });
  alert("Servicio agregado");
}

function finalizar() {
  let mensaje = "Hola, quiero contratar servicios de SHADDAI GROUP:%0A%0A";
  let total = 0;

  carrito.forEach(s => {
    mensaje += `- ${s.nombre} ($${s.precio})%0A`;
    total += s.precio;
  });

  mensaje += `%0A Total: $${total}`;

  window.open("https://wa.me/5493812181145?text=" + mensaje, "_blank");
}

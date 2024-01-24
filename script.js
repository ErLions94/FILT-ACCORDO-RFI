function cambiaTesto() {
  var testo = document.getElementById("testoCambiante");

  if (testo.innerHTML === "Testo iniziale") {
    testo.innerHTML = "Nuovo testo!";
  } else {
    testo.innerHTML = "Testo iniziale";
  }
}

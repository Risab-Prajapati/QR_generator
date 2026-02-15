let input = document.querySelector(".input-box input");
let button = document.querySelector(".qr-container button");
let image = document.querySelector("#qrimg");
let qrImg = document.querySelector(".qr-img");

function generateQR() {
  if (input.value === "") {
    qrImg.style.display = "none";
    input.classList.add("error");
  } else {
    image.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " +
      input.value;
    qrImg.style.display = "block";
    input.classList.remove("error");
  }
}

button.addEventListener("click", generateQR);

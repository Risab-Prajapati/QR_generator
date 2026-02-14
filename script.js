let input = document.querySelector(".input-box input");
let button = document.querySelector(".qr-container button");
let image = document.querySelector("#qrimg");
let qrImg = document.querySelector(".qr-img");

function generateQR() {
  if (input.value < 1) {
    alert("Input field must be filled");
    qrImg.style.display = "none";
  } else {
    image.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " +
      input.value;
    qrImg.style.display = "block";
  }
}

button.addEventListener("click", generateQR);

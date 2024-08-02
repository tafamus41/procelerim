let tutulanSayi = Math.ceil(Math.random() * 100);
console.log(tutulanSayi);
let message = document.querySelector(".guess");

let myScore = 10;
let enYuksekSkor = 0;

/* -------------------------------------------------------------------------- */
/*                    tahmin butonuna her basışta olacaklar                   */
/* -------------------------------------------------------------------------- */

document.querySelector("#tahmin").addEventListener("click", () => {
  const tahmin = document.querySelector("#sayi").value;

  if (!tahmin) {
    message.textContent = "lütfen bir tahmin giriniz";
  } else if (tahmin == tutulanSayi) {
    message.textContent = "Tebrikler Bildiniz..🎉";
    document.querySelector("body").style.backgroundImage =
      "url(./ai-generated-8202054_1280.jpg)";

    document.querySelector(".number").textContent = tutulanSayi;

    document.querySelector("#tahmin").disabled = true;
    if (myScore > enYuksekSkor) {
      enYuksekSkor = myScore;

      document.querySelector(".top-score").textContent = enYuksekSkor;
    }
  } else {
    if (myScore > 1) {
      myScore--;

      document.querySelector(".my-score").textContent = myScore;

      tahmin > tutulanSayi
        ? (message.textContent = "Azalt")
        : (message.textContent = "Arttir");
    } else {
      document.querySelector("body").style.backgroundImage =
        "url(./people-7375715_1280.png)";
      document.querySelector(".my-score").textContent = 0;

      message.textContent = "Oyunu kaybettiniz";
      document.querySelector("#tahmin").disabled = true;
    }
  }
});
/* -------------------------------------------------------------------------- */
/*                      Yeniden Dene butonuna basınca olacaklar                      */
/* -------------------------------------------------------------------------- */

document.querySelector("#dene").onclick = () => {
  tutulanSayi = Math.ceil(Math.random() * 100);
  console.log(tutulanSayi);
  message.textContent = "Oyun yeni oyuncu için tekrar başlıyor";

  document.querySelector("body").style.backgroundImage = "url(./track-19217_1280.jpg)";

  document.querySelector(".number").textContent = "?";

  document.querySelector("#sayi").value = "";

  myScore = 10;

  document.querySelector(".my-score").textContent = myScore;
  document.querySelector("#tahmin").disabled = false;
};
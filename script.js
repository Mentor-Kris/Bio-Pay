// LOGO typing
const logoText = "Bio-Pay";
let l = 0;

setTimeout(() => {
  function typeLogo() {
    if (l < logoText.length) {
      document.getElementById("logoText").innerHTML += logoText[l];
      l++;
      setTimeout(typeLogo, 140);
    }
  }
  typeLogo();
}, 500);


// MAIN TEXT typing
const text = "Securing the\nfuture of\npayments.";
let i = 0;

setTimeout(() => {
  function typeEffect() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML +=
        text[i] === "\n" ? "<br>" : text[i];
      i++;
      setTimeout(typeEffect, 80);
    }
  }
  typeEffect();
}, 1000);


// MOBILE FORMAT
const mobile = document.getElementById("mobile");

mobile.addEventListener("input", function () {
  let v = this.value.replace(/\D/g, "");
  if (v.length > 10) v = v.slice(0, 10);
  if (v.length > 5) v = v.slice(0, 5) + " " + v.slice(5);
  this.value = v;
});


// BUTTON
document.getElementById("verifyBtn").onclick = function () {
  this.innerHTML = "✔ Verified";
  this.style.background = "linear-gradient(90deg,#22c55e,#16a34a)";
};


// AVATAR DROPDOWN
const avatar = document.getElementById("avatar");
const dropdown = document.getElementById("dropdown");

avatar.onclick = () => {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
};

document.addEventListener("click", (e) => {
  if (!avatar.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});
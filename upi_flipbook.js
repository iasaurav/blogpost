

//<script>
document.body.innerHTML = `<div id="flipbook" style="text-align:center; max-width:600px; margin:auto; padding:16px; user-select:none;">
  <div id="bank-name" style="font-size:22px; font-weight:bold; margin-bottom:12px; color:#222;"></div>
  <div id="image-container" style="width:100%;"></div>
</div>`;



let currentIndex = 0;
const nameBox = document.getElementById("bank-name");
const container = document.getElementById("image-container");
const img = document.createElement("img");

// Inline styling for image
img.style.width = "100%";
img.style.height = "auto";
img.style.display = "block";
img.style.margin = "0 auto";
img.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
img.style.borderRadius = "12px";
img.style.maxWidth = "100%";

container.appendChild(img);

function showImage(index) {
  const bank = banks[index];
  img.src = `https://lh3.googleusercontent.com/d/${bank.id}`;
  img.alt = bank.name;
  nameBox.textContent = bank.name;
}

// Touch/swipe support
let touchStartX = 0;
img.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
});
img.addEventListener("touchend", e => {
  const diff = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(diff) > 50) {
    currentIndex = diff > 0
      ? (currentIndex - 1 + banks.length) % banks.length
      : (currentIndex + 1) % banks.length;
    showImage(currentIndex);
  }
});

// Arrow keys support
document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + banks.length) % banks.length;
    showImage(currentIndex);
  } else if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % banks.length;
    showImage(currentIndex);
  }
});

showImage(currentIndex);
//</script>

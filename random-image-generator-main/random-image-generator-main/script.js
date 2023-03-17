const btn = document.querySelector(".btn");
const ranImg = document.querySelector(".ran-img");
const loader = document.querySelector(".loader");

btn.addEventListener("click", async () => {
  ranImg.src = "";
  ranImg.style.opacity = "0";
  loader.style.display = "block";
  try {
    const res = await fetch("https://picsum.photos/500/300?random=1");
    const imgUrl = res.url;
    ranImg.src = imgUrl;
    loader.style.display = "none";
    ranImg.style.opacity = "1";
  } catch (err) {
    throw err;
  }
});

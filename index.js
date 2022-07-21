let painting = document.querySelector(".painting");
painting.addEventListener("click", function(e){
    e.target.textContent = "Hello class!";
    e.target.style.backgroundColor = "blue";
})

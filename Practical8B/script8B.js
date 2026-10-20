let likes = 0;

const likeBtn = document.getElementById("likeBtn");
const resetBtn = document.getElementById("resetBtn");
const likeCount = document.getElementById("likes");

likeBtn.addEventListener("click", function() {
    likes++;
    likeCount.textContent = likes;
});

resetBtn.addEventListener("click", function() {
    likes = 0;
    likeCount.textContent = likes;
});
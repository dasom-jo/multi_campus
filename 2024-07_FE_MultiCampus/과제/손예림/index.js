document.querySelector(".moveToPost").addEventListener("click", function () {
    document.querySelector(".post_container").classList.remove("none");
    document.querySelector(".front_container").classList.add("moveRight");
    document.querySelector(".user_container").classList.add("none");
    document.querySelector(".user_regist").classList.add("gone");
    document.querySelector(".post_regist").classList.remove("gone");
});

document.querySelector(".moveToUser").addEventListener("click", function () {
    document.querySelector(".post_container").classList.add("none");
    document.querySelector(".front_container").classList.remove("moveRight");
    document.querySelector(".front_container").classList.add("moveLeft");
    document.querySelector(".post_regist").classList.add("gone");
    document.querySelector(".user_container").classList.remove("none");
    document.querySelector(".user_regist").classList.remove("gone");
});

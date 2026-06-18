// メールアドレスをクリップボードにコピーする
document.addEventListener("DOMContentLoaded", function () {
    const copyEmailButton = document.getElementById("copyEmailButton");
    const copyMessage = document.getElementById("copyMessage");

    if (!copyEmailButton || !copyMessage) {
        return;
    }

    copyEmailButton.addEventListener("click", function () {
        const email = copyEmailButton.dataset.email;

        navigator.clipboard.writeText(email).then(function () {
            copyMessage.classList.add("show");

            setTimeout(function () {
                copyMessage.classList.remove("show");
            }, 1800);
        });
    });
});
// メールアドレスをクリップボードにコピーする
document.addEventListener("DOMContentLoaded", function () {
    const copyEmailButton = document.getElementById("copyEmailButton");
    const copyMessage = document.getElementById("copyMessage");

    if (!copyEmailButton || !copyMessage) {
        return;
    }

    copyEmailButton.addEventListener("click", async function () {
        const email = copyEmailButton.dataset.email;

        try {
            await copyTextToClipboard(email);

            copyMessage.textContent = "メールアドレスをコピーしました";
            copyMessage.classList.add("show");

            setTimeout(function () {
                copyMessage.classList.remove("show");
            }, 1800);
        } catch (error) {
            console.error("メールアドレスのコピーに失敗しました:", error);

            copyMessage.textContent = "コピーに失敗しました";
            copyMessage.classList.add("show");

            setTimeout(function () {
                copyMessage.classList.remove("show");
            }, 1800);
        }
    });
});

async function copyTextToClipboard(text) {
    // HTTPS / localhost では Clipboard API を使用
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return;
    }

    // HTTP 環境用の fallback
    const textarea = document.createElement("textarea");
    textarea.value = text;

    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    textarea.setAttribute("readonly", "");

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    const success = document.execCommand("copy");

    document.body.removeChild(textarea);

    if (!success) {
        throw new Error("Fallback copy failed");
    }
}
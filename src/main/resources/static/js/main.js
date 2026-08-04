// メールアドレスをクリップボードにコピーする
document.addEventListener("DOMContentLoaded", function () {
    setupCopyEmailButton("copyEmailButton", "copyMessage");
    setupCopyEmailButton("infoCopyEmailButton", "infoCopyMessage");
});

function setupCopyEmailButton(buttonId, messageId) {
    const button = document.getElementById(buttonId);
    const message = document.getElementById(messageId);

    if (!button || !message) {
        return;
    }

    button.addEventListener("click", async function () {
        const email = button.dataset.email;

        try {
            await copyTextToClipboard(email);

            message.textContent = "メールアドレスをコピーしました";
            message.classList.add("show");

            setTimeout(function () {
                message.classList.remove("show");
            }, 1800);
        } catch (error) {
            console.error("メールアドレスのコピーに失敗しました:", error);

            message.textContent = "コピーに失敗しました";
            message.classList.add("show");

            setTimeout(function () {
                message.classList.remove("show");
            }, 1800);
        }
    });
}

async function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return;
    }

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
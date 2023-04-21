
function addCopyFunction(button, textCallback) {
    let buttonHTMLBefore = button.innerHTML;
    button.addEventListener("click", () => {
        navigator.clipboard.writeText(textCallback()).then(() => {
            button.innerHTML = `<i class="bi-clipboard"> Copied!</i>`;
            setTimeout(() => {
                button.innerHTML = buttonHTMLBefore;
            }, 2000);
        });
    });
}

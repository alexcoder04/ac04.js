
function addCopyFunction(button, textCallback) {
    let buttonHTMLBefore = button.innerHTML;
    
    button.addEventListener("click", () => {
        const text = textCallback();
        if (text.trim() == "") {
            return;
        }
        
        navigator.clipboard.writeText(text).then(() => {
            button.innerHTML = `<i class="bi-clipboard"> Copied!</i>`;
            setTimeout(() => {
                button.innerHTML = buttonHTMLBefore;
            }, 2000);
        });
    });
}

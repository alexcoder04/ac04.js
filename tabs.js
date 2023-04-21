
// preserve the last open tab in Bootstrap
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;

    document.querySelectorAll(tabQuery || ".nav-tabs > li > button").forEach(tab => {
        tab.addEventListener("click", () => {
            localStorage.setItem(`ac04.js-${path}-activeTab`, tab.getAttribute("data-bs-target"));
        });
    });

    const activeTab = localStorage.getItem(`ac04.js-${path}-activeTab`);
    if (activeTab) {
        const tab = document.querySelector(`${tabQuery || ".nav-tabs > li > button"}[data-bs-target="${activeTab}"]`);
        tab.click();
    }
});

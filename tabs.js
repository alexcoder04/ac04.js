
// preserve the last open tab in Bootstrap
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;

    if (tabQuery == undefined) {
        var tabQuery = ".nav-tabs > li > button";
    }
    document.querySelectorAll(tabQuery).forEach(tab => {
        tab.addEventListener("click", () => {
            localStorage.setItem(`ac04.js-${path}-activeTab`, tab.getAttribute("data-bs-target"));
        });
    });

    const activeTab = localStorage.getItem(`ac04.js-${path}-activeTab`);
    if (activeTab) {
        const tab = document.querySelector(`${tabQuery}[data-bs-target="${activeTab}"]`);
        tab.click();
    }
});

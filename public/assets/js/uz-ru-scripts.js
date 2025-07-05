// === Languages js start ===
document.querySelectorAll(".language[id]").forEach(function(langBtn) {
    langBtn.addEventListener("click", function () {
        const selectedLang = this.id;
        const pageClass = document.querySelector("aside")?.className.split(" ")[0];

        // if (!pageClass) return;

        let langPath = selectedLang === "en" ? "./../" : "./../" + selectedLang + "/";
        let targetUrl = langPath + pageClass;

        window.location.href = targetUrl;
    });
});
// === /Languages js end ===
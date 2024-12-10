window.addEventListener("message", (event) => {
    if (event.data === "hidePopUp") {
        document.getElementById("PopUpContentFrame").style.display = "none";
        const iframe = document.getElementById("MainContentFrame");
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage("Complete", "*");
        }
    }

    if (event.data === "fail") {
        document.getElementById("PopUpContentFrame").style.display = "none";
        const iframe = document.getElementById("MainContentFrame");
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage("Fail", "*");
        }
    }

    if (event.data === "showPopUp") {
        document.getElementById("PopUpContentFrame").style.display = "block";
    }
});

window.onload = function () {
    var language = sessionStorage.getItem("language");
    var p_explain = document.getElementById("p_explain");

    if(language == "ch") {
        p_explain.innerText = "文字说明。";
    } else if(language == "jp") {
        p_explain.innerText = "テキストの説明";
    } else {
        p_explain.innerText = "Text description";
    }
}
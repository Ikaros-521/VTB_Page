var quotations = [
    "xxx ———— 昵称",
    "xxx ———— 昵称",
];

window.onload = function () {
    var parent_div = document.getElementsByClassName("layui-row")[0]; 
    
    var arr = randomArr(quotations.length, 0, quotations.length);

    for(var i = 0; i < quotations.length; i++) {
        var child_div1 = document.createElement("div");
        child_div1.className = "layui-col-md6";
        var child_div2 = document.createElement("div");
        child_div2.className = "layui-panel";
        var child_div3 = document.createElement("div");
        child_div3.className = "common_content_div";
        child_div3.innerHTML = quotations[arr[i]];
        child_div3.style.padding = "30px";

        child_div2.appendChild(child_div3);
        child_div1.appendChild(child_div2);
        parent_div.appendChild(child_div1);
    }
}

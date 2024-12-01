function toggleStyleSheet(){
    // 1 (a) Get style element by ID (hint: getElementById)
    var style = document.getElementById("mainStyleSheet");

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var name = style.getAttribute("href");

    // 1 (c) Determine new stylesheet file name
    var new_name = "";
    if (name == "style.css") {
        new_name = "style2.css";
    }
    else {
        new_name = "style.css";
    }

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    style.setAttribute("href", new_name);

    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    localStorage.setItem("style_file", new_name);
}


window.onload = function(){
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var file_name = localStorage.getItem("style_file") || 'style2.css';

    // 2 (b) get html style element by ID
    var style = document.getElementById("mainStyleSheet");

    // 2 (c) replace href attribute of html element.
    style.setAttribute("href", file_name);
    
}
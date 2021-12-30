var reader = new XMLHttpRequest() || new ActiveXObject("MSXML2.XMLHTTP");

function loadFile() {
    reader.open("get", "history.txt", true);
    reader.onreadystatechange = displayContents;
    reader.send(null);
}

function displayContents() {
    if (reader.readyState == 4) {
        var el = document.getElementById("history");
        var result = reader.responseText
        var result = result.split("\n")
        var result = result.join("<br><br>");
        console.log(result)
        el.innerHTML = result;
    }
}

loadFile();

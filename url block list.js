/*
    Chrome ou Brave Extensão:
    https://chromewebstore.google.com/detail/url-blocker/jpakadanffilpnjijlmmkljogkfaognd
    
    Mirror:
    https://github.com/KingRider/blockhosts/raw/refs/heads/main/URL-Blocker-Chrome-Web-Store.crx

    Utilize console em dentro extensão URL BLOCKER (SHIFT+CTRL+J):
*/

/*
Salva a lista:

for (var ubs = 0; ubs < document.querySelectorAll('option').length; ubs++) {
    console.log(document.querySelectorAll('option')[ubs].innerText);
}
*/

/* 
Carregar a lista:

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://github.com/KingRider/blockhosts/raw/refs/heads/main/url%20blocker%20list.txt");
xhr.onload = function() {
    text = xhr.responseText;
    var textByLine = text.split("\n");
}
xhr.send();

for (var lista = 0; lista < textByLine.length; lista++) {
    if (textByLine[lista] != '') {
        document.querySelector('input#urlInput').value = textByLine[lista];
        document.querySelector('button#addButton').click();
    }
}
*/

/* 1. Same litery i krotszy niz 8 znakow to obrazek i w paragrafie napis haslo slabe (na czerwono)
    2. Same litery dluzsze niz 8 znakow napis haslo średnie (na żółto)
    3. Haslo zawiera cyfre i jest dluzsze niz 8 znakow to haslo dobre 
    4. Zawiera cyfre znak specjalny i jest dluzsze niz 8 znakow to haslo bardzo dobre
*/

var znaki = ["-","_","+","!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/"];
var liczby = ["1","2","3","4","5","6","7","8","9","0"];

function check(){
    var pswd = document.getElementById("wyraz").value;
    if(pswd.length <= 8){
        clear();
        document.getElementById("red").style.backgroundColor = "red";
        document.getElementById("wynik").innerHTML = "hasło <span style='color: red'>słabe</span>";
    }
    if(pswd.length > 8){
        var cyfra = false;
        var specjalny = false;
        for(let znak of pswd){
            if(znaki.includes(znak)){
                specjalny = true;
            }
            if(liczby.includes(znak)){
                cyfra = true;
            }
        }
        if(cyfra == true){
            clear();
            document.getElementById("green").style.backgroundColor = "green";
            document.getElementById("wynik").innerHTML = "hasło <span style='color: chartreuse'>dobre</span>";
        }
        if(cyfra == true && specjalny == true){
            clear();
            document.getElementById("green").style.backgroundColor = "green";
            document.getElementById("wynik").innerHTML = "hasło <span style='color: green'>bardzo dobre</span>";
        }
        if(specjalny == false && cyfra == false){
            clear();
            document.getElementById("yellow").style.backgroundColor = "yellow";
            document.getElementById("wynik").innerHTML = "hasło <span style='color: yellow'>średnie</span>";
        }
    }
}

function clear(){
    document.getElementById("green").style.backgroundColor = "#111";
    document.getElementById("yellow").style.backgroundColor = "#111";
    document.getElementById("red").style.backgroundColor = "#111";
}
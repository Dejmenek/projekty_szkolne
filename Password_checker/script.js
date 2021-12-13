var znaki = ["-","_","+","!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/"];
var liczby = ["1","2","3","4","5","6","7","8","9","0"];

function check(){
    var pswd = document.getElementById("wyraz").value;
    if(pswd.length <= 8){
        document.getElementById("obraz").innerHTML = "<img src='images/cancel.png' alt='slabe'>";
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
        if(cyfra === true){
            document.getElementById("obraz").innerHTML = "<img src='images/check.png' alt='dobre'>";
            document.getElementById("wynik").innerHTML = "hasło <span style='color: chartreuse'>dobre</span>";
        }
        if(cyfra == true && specjalny == true){
            document.getElementById("obraz").innerHTML = "<img src='images/padlock.png' alt='slabe'>";
            document.getElementById("wynik").innerHTML = "hasło <span style='color: green'>bardzo dobre</span>";
        }
        if(specjalny == false && cyfra == false){
            document.getElementById("obraz").innerHTML = "<img src='images/check2.png' alt='sredni'>";
            document.getElementById("wynik").innerHTML = "hasło <span style='color: yellow'>średnie</span>";
        }
    }
}
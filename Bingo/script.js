var bitmap = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]


function random_number(){
    return Math.floor(Math.random()*75)+1;
}

function start(){
    document.getElementById("wylacz").disabled = false;
    var li = [];
    for(var i = 0; i < 25; i++)
    {
        var num = random_number();
        while(li.includes(num)){
            num = random_number();
        }
        document.getElementById("c" + i).innerHTML = num;
        li.push(num);
    }
}

var li2 = []; //used numbers
function los(){
    if(li2.length < 75){
        var num = random_number();
        while(li2.includes(num)){
            num = random_number();
        }
        li2.push(num);
        return num;
    }
}

function change_circles(){
    if(li2.length < 75){
        let a = los();
        let r = document.getElementById("red");
        let g = document.getElementById("green");
        let y = document.getElementById("yellow");
        y.innerHTML = g.innerHTML;
        g.innerHTML = r.innerHTML;  
        r.innerHTML = a;
    }
}

function change_bg(n){
    var element = document.getElementById("c" + n);
    var x = Math.floor(n/5); //
    var y = n % 5; //
    if(element.style.background == "" || element.style.background == "white"){
        element.style.background = "red";
        bitmap[x][y] = 1;
    } else {
        bitmap[x][y] = 0;
        element.style.background = "white";
    }
    console.log(bitmap);
    check_win();
}


function check_win(){
    for(var i = 0; i < bitmap.length; i++){
        var exist = 0;
        for (var j = 0; j < bitmap[i].length; j++){
            if(bitmap[i].includes(0) == false){ //check rows
                exist += 1;
                console.log(exist);
            }
            else if (bitmap[j][i] == 1){ //check columns
                exist += 1;
                console.log(exist);
            }
        }
        if(exist == 5){
            win();
            clear_bitmap();
            break;
        }
    }
}

function win(){
    document.getElementById("win").innerHTML = "Wygrałeś";
    document.getElementById("table").style.display = "none";
}

function restart(){
    window.location.reload();
}

function clear_bitmap() {
    for(var i = 0; i < bitmap.length; i++){
        for(var j = 0; j < bitmap[i].length; j++){
            bitmap[i][j] = 0;
        }
    }
}
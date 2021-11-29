var bitmap = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]

var li2 = [];

function random_number(){
    return Math.floor(Math.random()*75)+1;
}

function start(){
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

function los(){
    var num = random_number();
    while(li2.includes(num)){
        num = random_number();
    }
    li2.push(num);
    return num;
}

function change_circles(){
    let a = los();
    let r = document.getElementById("red");
    let g = document.getElementById("green");
    let y = document.getElementById("yellow");
    y.innerHTML = g.innerHTML;
    g.innerHTML = r.innerHTML;  
    r.innerHTML = a;
}

function change_bg(n){
    var element = document.getElementById("c" + n);
    var x = Math.floor(n/5);
    var y = n % 5;
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
        for (var j = 0; j < 5; j++){
            if(bitmap[i][j] == 1 || bitmap[j][i] == 1 || bitmap[i+1][j+1] == 1){
                exist += 1;
                console.log(exist);
            }
        }
        if(exist == 5){
            alert("Wygrales");
            //win();
            exist = 0;
            break;
        }
    }
}

function win(){
    document.getElementsById("win").innerHTML = "Wygrałeś";
    document.getElementById("table").style.display = "none";
}
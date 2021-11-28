var bit_map = [
    ['c1','c2','c3','c4','c5'],
    ['c6','c7','c8','c9','c10'],
    ['c11','c12','c13','c14','c15'],
    ['c16','c17','c18','c19','c20'],
    ['c21','c22','c23','c24','c25'],
    ['c1','c7','c13','c19','c25'],
    ['c5','c9','c13','c17','c21']
]

selected = [];

var li2 = [];

function random_number(){
    return Math.floor(Math.random()*75)+1;
}

function start(){
    var li = [];
    for(var i = 1; i <= 25; i++)
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
    var element = document.getElementById("c" + n)
    if(element.style.background == "" || element.style.background == "white"){
        element.style.background = "red";
        selected.push(element.id)
    } else {
        element.style.background = "white";
    }
    check_win();
    console.log(selected)
}


function check_win(){
    for(var i = 0; i < bit_map.length; i++){
        var exist = 0;
        for (var j = 0; j < bit_map[i].length; j++){
            if(bit_map[i][j].includes(selected[j])){
                exist += 1;
                console.log(exist)
            }
        }
        if(exist == 5){
            alert("Wygrales");
            break;
        }
    }
}
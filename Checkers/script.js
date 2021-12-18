var player_score = 12;
var player2_score = 12;
var turn = true; //false - ruch czarnych a true - ruch bialych
var player_pieces = document.querySelectorAll("td > p");
var player2_pieces = document.querySelectorAll("td > div");

var board = [
    [0,1,0,2,0,3,0,4],
    [5,0,6,0,7,0,8,0],
    [0,9,0,10,0,11,0,12],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [13,0,14,0,15,0,16,0],
    [0,17,0,18,0,19,0,20],
    [21,0,22,0,23,0,24,0]
]

function start() {
    //clear();
    assign_pieces();
 }


function player_move(id) {
    console.log("Cichy");
    console.log(id);
    //index = board.indexOf()
    change_player();
}

function player2_move(id) {
    console.log("Chuj");
    console.log(id);
    change_player();
} 

function assign_pieces(){
    var draw = Math.round(Math.random());
    
    if(draw == 1){
        for(var i = 0; i < player_pieces.length; i++){
            player_pieces[i].className = "r_piece";
        }
        for(var j = 0; j < player2_pieces.length; j++){
            player2_pieces[j].className = "w_piece";
        }
    }
    else {
        for(var i = 0; i < player_pieces.length; i++){
            player_pieces[i].className = "w_piece";
        }
        for(var j = 0; j < player2_pieces.length; j++){
            player2_pieces[j].className = "r_piece";
        }
    }
}

function reset_borders(){
    for(var i = 0; i < player_pieces.length; i++){
        player_pieces[i].style.border = "none";
    }
}


function add_event_listeners(){
    if(turn){
        for(var i = 0; i < player_pieces.length; i++){
            player_pieces[i].addEventListener("click",function(){player_move(this.id)});
        }
    }
    else {
        for(var i = 0; i < player2_pieces.length; i++){
            player2_pieces[i].addEventListener("click",function(){player2_move(this.id)});
        }
    }
}

function remove_event_listeners(){
    if(turn){
        turn = false;
        for(var i = 0; i < player_pieces.length; i++){
            player_pieces[i].removeEventListener("click",player_move);
        }
    }
    else {
        turn = true;
        for(var i = 0; i < player2_pieces.length; i++){
            player2_pieces[i].removeEventListener("click",player2_move);
        }
    }
    check_win();
}

function check_win() {
    if(player_score == 0){
        document.getElementById("player_result").innerHTML = "Przegrałeś";
    }
    if(player2_score == 0){
        document.getElementById("player_result").innerHTML = "Wygrałeś";
    }
}

function change_player() {
    if(turn){
        remove_event_listeners();
    }
    else {
        remove_event_listeners();
    }
    add_event_listeners();
}

add_event_listeners();
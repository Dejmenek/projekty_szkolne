var player_score = 12;
var bot_score = 12;
var turn = false;
var player_pieces;
var bot_pieces;

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


function player_move() {
    
}

function bot_move() {

} 

function check_win() {
    if(player_score == 0){
        document.getElementById("player_result").innerHTML = "Przegrałeś";
    }
    if(bot_score == 0){
        document.getElementById("player_result").innerHTML = "Wygrałeś";
    }
}

function assign_pieces(){
    var draw = Math.round(Math.random())
    var player_tiles = document.querySelectorAll(".player_tile")
    var bot_tiles = document.querySelectorAll(".bot_tile")
    
    if(draw == 1){
        for(var i = 0; i < player_tiles.length; i++){
            player_tiles[i].innerHTML = "<p class='r_piece'></p>";
        }
        for(var j = 0; j < bot_tiles.length; j++){
            bot_tiles[j].innerHTML = "<p class='w_piece'></p>";
        }
        player_pieces = document.querySelectorAll(".r_piece");
        bot_pieces = document.querySelectorAll(".w_piece");
    }
    else {
        for(var i = 0; i < player_tiles.length; i++){
            player_tiles[i].innerHTML = "<p class='w_piece'></p>";
        }
        for(var j = 0; j < bot_tiles.length; j++){
            bot_tiles[j].innerHTML = "<p class='r_piece'></p>";
        }
        player_pieces = document.querySelectorAll(".w_piece");
        bot_pieces = document.querySelectorAll(".r_piece");
    }
}

function reset_borders(){
    for(var i = 0; i < player_pieces.length; i++){
        player_pieces[i].style.border = "none";
    }
}

function add_piece_location(){

}

var player_pieces = 12;
var bot_pieces = 12;


function start() {
    assign_pieces();
    //check_win();
 }


function player_move() {

}

function bot_move() {

} 

function check_win() {
    if(player_pieces == 0){
        document.getElementById("player_result").innerHTML = "Przegrałeś";
    }
    if(bot_pieces == 0){
        document.getElementById("player_result").innerHTML = "Wygrałeś";
    }
}

function assign_pieces (){
    var draw = Math.round(Math.random())
    var player = document.querySelectorAll(".player_piece")
    var bot = document.querySelectorAll(".bot_piece")
    
    if(draw == 1){
        for(var i = 0; i < player.length; i++){
            player[i].innerHTML = "<p class='r_piece'></p>";
        }
        for(var j = 0; j < bot.length; j++){
            bot[j].innerHTML = "<p class='w_piece'></p>";
        }
    }
    else {
        for(var i = 0; i < player.length; i++){
            player[i].innerHTML = "<p class='w_piece'></p>";
        }
        for(var j = 0; j < bot.length; j++){
            bot[j].innerHTML = "<p class='r_piece'></p>";
        }
    }
}

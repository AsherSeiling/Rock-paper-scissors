// © 2020 Asher Seiling
var user_input = "";
var computer_input = "";

// Run and lost messages
var lost_message = "You lost!";
var won_message = "You won!";
var tie_message = "It's a tie!"

// Image addresses
var scissors_url = "images/Sissiors.png";
var dunder_paper = "images/Dunder_paper.png";
var paper = "images/Paper.png";
var the_rock = "images/The_rock.png";
var rock_url = "images/rock.png";

// Assign value to won
class user_input_num{
    static paper(){
        user_input = "paper";
    };
    static rock(){
        user_input = "rock";
    };
    static scissors(){
        user_input = "scissors";
    };
};

// Alert lost or won
class lost_won{
    static lost(){
        document.getElementById("lost_or_won").innerHTML = lost_message;
    };
    static won(){
        document.getElementById("lost_or_won").innerHTML = won_message;
    };
    static tie(){
        document.getElementById("lost_or_won").innerHTML = tie_message;
    };
};

// Determine if won or lost
function won_or_lost(){
    computer_random = Math.floor(Math.random() * 5) + 1;
    if(computer_random == 2){
        img.paper();
        computer_input = "paper";
    }
    else if (computer_random == 3){
        img.rock();
        computer_input = "rock";
    }
    else if (computer_random == 4){
        img.scissors();
        computer_input = "scissors";
    };

    if(user_input == "rock"){
        if(computer_input == "rock"){
            lost_won.tie();
        }
        else if(computer_input == "scissors"){
            lost_won.won();
        }
        else{
            lost_won.lost();
        };
    }
    else if(user_input == "scissors"){
        if(computer_input == "scissors"){
            lost_won.tie();
        }
        else if(computer_input == "paper"){
            lost_won.won();
        }
        else{
            lost_won.lost();
        };
    }
    else if(computer_input == "paper"){
        if(computer_input == "paper"){
            lost_won.tie();
        }
        else if(computer_input == "rock"){
            lost_won.won();
        }
        else{
            lost_won.lost();
        };
    }
};

// Main function
function main(){
    won_or_lost();
};


// Class to change the image
class img{
    static rock(){
        var random = Math.floor(Math.random() * 50) + 1;
        if(random == 25){
            document.getElementById("image").src = the_rock;
        }
        else{
            document.getElementById("image").src = rock_url;
        };
    };
    static paper(){
        var random = Math.floor(Math.random() * 50) + 1;
        if(random == 30){
            document.getElementById("image").src = dunder_paper;
        }
        else{
            document.getElementById("image").src = paper;
        };
    };
    static scissors(){
        document.getElementById("image").src = scissors_url;
    };
};
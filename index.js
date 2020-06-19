// © 2020 Asher Seiling
var user_input = 0;
var computer_input = 0;

// Run and lost messages
var lost_message = "You lost!";
var won_message = "You won!";

// Images wait
function wait_num(interval){
    document.getElementById("image").src = "images/three_to_one/three.png".src;
    setTimeout(interval);
    document.getElementById("image").src = "images/three_to_one/two.png".src;
    setTimeout(interval);
    document.getElementById("image").src = "images/three_to_one/one.png".src;
    setTimeout(interval);
};

// Determine if won or lost
function won_or_lost(){
    
};

// Main function
function main(){
    wait_num(1000);
    won_or_lost();
};


// Class to change the image
class image{
    static rock(){
        var random = Math.floor(Math.random() * 50) + 1;
        if(random == 25){
            document.getElementById("image").src = "images/The_rock.png".src;
        }
        else{
            document.getElementById("image").src = "images/rock.png".src;
        };
    };
    static paper(){
        var random = Math.floor(Math.random() * 50) + 1;
        if(random == 30){
            document.getElementById("image").src = "images/Paper.png".src;
        }
        else{
            document.getElementById("image").src = "images/Dunder_paper.png".src;
        };
    };
    static scissors(){
        document.getElementById("image").src = "images/rock.png".src;
    };
};

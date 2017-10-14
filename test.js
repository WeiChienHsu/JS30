function solve(grades){
    if (grades < 38){
        return grades;
    } while(grades%10 != 0){
        if(grades%10 > 5){ //66,67,68,69
            if(grades%5 > 2){ //68,69
                grades ++;
            } else{ //66 67
                grades --;
            } 
        } // >5
        else if(grades % 10 < 5){ //61,62,63,64
            if(grades%5 > 2){
                grades ++;
            } else{
                grades --;
            }
        }
    } // while
    
    return grades; //60,65,70,75
}

solve(67);
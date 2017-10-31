function solve(grades){
    if (grades < 38){
        return grades;
    } else{
    
    // while(grades%10 != 0){
        if(grades%10 > 5){ //66,67,68,69
            if(grades%5 == 2){ //67
                grades -= 2;
            }else if(grades%5 == 1){ //66
            	grades -= 1;
            }else if(grades%5 == 3){ //68
                grades += 2;
            } else{
            	grades += 1;
            }
        } // >5
        else if(grades % 10 < 5){ //61,62,63,64
            if(grades%5 == 2){ //62
                grades -= 2;
            }else if(grades%5 == 1){ //61
            	grades -= 1;
            }else if(grades%5 == 3){ //63
                grades += 2;
            } else{
            	grades += 1;
            }
        }
        return grades; //60,65,70,75
     }  
    
}

console.log(solve(60));
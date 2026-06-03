// problem 1

function totalFine( fare ) {
    let result = fare + (fare*0.2) + 30 ;
          if (fare <=0) {
            return "Invalid"
          }

          else{
            return result;
          }

}


console.log(totalFine(0));



// problem 2


function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  let result = "";

  for (let index = 0; index < str.length; index++) {
let value = str[index].charCodeAt(0);
    if (value === 32) {
continue;
}

   
    if (value >= 97 && value <= 122) {
result = result+ String.fromCharCode(value - 32);
    } 

else {
      
result = result+ str[index];
    }
  }

  return result;
}

console.log(onlyCharacter("  h e llo wor   ld"));


console.log(onlyCharacter("Cy   bar- At tac k"));

console.log(onlyCharacter(" ha ck m e 1 @ru.c  n "));
console.log(onlyCharacter(["hack", "me"]));




// problem 3

function bestTeam(player1, player2 ) {

     if (
        typeof player1 !== "object" ||
        
        typeof   player2 !== "object"
    
    ) {
        return "Invalid";
     }




else{

      class player {
    constructor(name , foul , cardY , cardR) {
        this.name = name;
        this.foul = foul;
        this.cardR = cardR;
        this.cardY = cardY;
    }

  
  }

     const p1 = new player(player1.name,player1.foul, player1.cardR , player1.cardY);
     const p2 = new player(player2.name,player2.foul, player2.cardR , player2.cardY);


     let result1 = p1.foul + p1.cardR + p1.cardY;
     let result2 = p2.foul + p2.cardR + p2.cardY;

    if (result1 > result2 ) {
       return p2.name;
    }
    else if (result2 > result1) {
        return p1.name
    }

    else{
        return "Tie"
    }
}

    
}


console.log(
      bestTeam(
    { name: "Brazil", foul: 6, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
  )
)


// problem 4


function  isSame(arr1 , arr2 ) {
    
   let count = 0;

        if (arr1.length === arr2.length) 

         
            
            {
                for (let index = 0; index < arr1.length; index++) {

        let element1 = arr1[index];
        let element2 = arr2[index];

        if (element1 == element2) {
            count++;
        }
        



    }

     if (count == arr1.length) {
            return true;
        }
        else {
        return false;
        }


        }


        else{
return "Invalid"
        }
            
        
       
        



}


console.log(isSame([456,43,34,22],[456,43,34,22])
)


console.log(isSame([2 , 5 , 6] ,256
)
)


// problem 5

    function  resultReport( marks ) {
      
      if (!Array.isArray(marks)) {
        return "Invalid"
      }
      else{
          const  totalSub = marks.length;

        let totalMark = 0;
        let fail = 0;
        let pass = 0;


        for (let i = 0; i < marks.length; i++) {
            totalMark = totalMark + marks[i];

            if (marks[i] < 40) {
                fail++
            }
            else{
                pass++
            }
            


        }

        let FinalScore = 0;
        if (marks.length === 0) {
            FinalScore = 0
        }
        else{
            FinalScore =  Math.round(totalMark / totalSub);
        }


       return{
        FinalScore: FinalScore,
        pass : pass,
        fail: fail
       }

       
      }


      
}

// resultReport([45,67,98,89,34])

console.log(resultReport([45,67,98,89,34]))
console.log(resultReport([99, 87, 67, 12 ,87]))
console.log(resultReport([99]))
console.log(resultReport([]))
console.log(resultReport(100))
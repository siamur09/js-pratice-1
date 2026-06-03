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
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

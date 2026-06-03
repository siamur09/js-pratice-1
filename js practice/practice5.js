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
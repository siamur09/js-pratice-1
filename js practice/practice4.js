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



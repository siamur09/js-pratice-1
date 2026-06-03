

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

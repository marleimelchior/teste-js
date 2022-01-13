const escola = "cef14"
console.log(escola.charAt(4));// vai passar a letra que estou pedindo dentro da variavel
console.log(escola.charAt(6)); //vai passar uma letra nulla porque minha variavel tem 5 letras
console.log(escola.charCodeAt(3));
console.log(escola.indexOf("3")); 
console.log(escola.substring(1));
console.log(escola.substring(0, 3 ));

console.log("escola" + escola + "!");
console.log("escola".concat(escola).concat("!"));
console.log(escola.replace(3, "e"));

console.log("Ana, Maria, Pedro, Marlei".split(","));

// Iteration 1: Names and Input
const hacker1 = "Jason Statham"
console.log(`the driver's name is ${hacker1}`);
const hacker2 = "Arnold"
console.log(`the driver's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if ( hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length, hacker2.length} characters`)
};

// Iteration 3: Loops

let bigName = ""
for (let i = 0; i < hacker1.length; i++) {
bigName += ' ' + hacker1[i].toUpperCase();
};
console.log(bigName);

let reverseName=''

for (let i= hacker2.length -1; i >= 0; i--){
    reverseName += hacker2[i]
}
console.log(reverseName)


let lexiName =''
for (i = 0; i < hacker1.length; i++)
hacker1.localeCompare(hacker2);



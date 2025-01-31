let i = 10; 
 
if (i > 0) {
    console.log('i is positive'); 
}
else if (number < 0) {
     console.log('i is negative')
} 
else {
     console.log('i is zero')
}

var dayNumber = '8';

switch(dayNumber) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
    default:
        console.log('Please enter a number between 1 and 7')        
    
}

let age = 18;

while (age < 21) {
    console.log(" You are " + age + ". You cannot consume Alcohol in California.");
    age++;

}

console.log("You are now 21 or older you can engoy drinking Alcohol now!")

let workingOut = 0;

do {
    console.log("Days of working out: " + (workingOut + 1));
    workingOut++;
} while (workingOut < 6);

console.log("Please take a rest day.");

for (let i = 7; i > 0; i--) {
    console.log(i);

}

for (let i = 7; i > 0; i--) {
    console.log(i);
    if (i===3) {
        break;
    }

}

function calculateArea(width, height) {
    let area = width * height;
    console.log("the area is:"  + area)
}

calculateArea(10, 9);
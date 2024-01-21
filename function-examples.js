function getAverage (assignment1,assignment2,assignment3){
    const total = assignment1+assignment2+assignment3;
    const average = total/3;
    return average;
}
var assignment1Marks = 60;
var assignment2Marks = 50;
var assignment3Marks = 40;
var myaverage = getAverage(assignment1Marks,assignment2Marks,assignment3Marks);
console.log(myaverage);
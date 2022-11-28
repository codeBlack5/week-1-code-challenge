// //Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade as follows: 
// A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.
const prompt = require("prompt-sync")();
let studentMarks = parseInt(prompt('Enter your marks: '));
function checkStudentGrade(studentMarks){
if (studentMarks > 79 && studentMarks <= 100) {
        return "A"
    } else if (studentMarks > 60 && studentMarks <= 79) {
        return "B"
    } else if (studentMarks > 49 && studentMarks <= 59) {
        return "C"
    }else if (studentMarks >= 40 && studentMarks <=49) {
        return "D"
    } else if (studentMarks < 40) {
        return "E"
    } else {
        return "Enter valid marks"
    }
}
console.log(checkStudentGrade(studentMarks));
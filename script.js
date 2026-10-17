var name = prompt("Enter Your Name")
var english = parseInt(prompt("Enter Your English Marks"))
var urdu = parseInt(prompt("Enter Your Urdu Marks"))
var maths = parseInt(prompt("Enter Your Maths Marks"))
var computer = parseInt(prompt("Enter Your Computer Marks"))
var physice = parseInt(prompt("Enter Your Physice Marks"))

var total = 500

var obtained_marks = english + urdu + maths + computer + physice;
var percentage = (obtained_marks / total) * 100 

var grade;
if (percentage >= 90){
    grade = "A+"
}
else if (percentage >= 80){
    grade = "A"
}
else if (percentage >= 70){
    grade = "B"
}
else if (percentage >= 60){
    grade = "C"
}
else if (percentage >= 50){
    grade = "D"
}
else {
    grade ="Fail"
}

document.write(`<h1> Your Name is ${name}</h1>`)
document.write(`<h1> Your English Marks is ${english}</h1>`)
document.write(`<h1> Your Urdu Marks is ${urdu}</h1>`)
document.write(`<h1> Your Maths Marks is ${maths}</h1>`)
document.write(`<h1> Your Computer Marks is ${computer}</h1>`)
document.write(`<h1> Your Physice is ${physice}</h1>`)

document.write(`<h1> Your Total is ${total}</h1>`)
document.write(`<h1> Your obtained Marks is ${obtained_marks}</h1>`)
document.write(`<h1> Your Percentage is ${percentage}</h1>`)
document.write(`<h1> Your Grade is ${grade}</h1>`)
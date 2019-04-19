

const students=["Mike"," Michelle"," James"," John"," Vickie"," Joe"," Bill"," Bob"," Nick"," Leon"];

const grades= [60,65,70,75,80,58,85,90,95,88];

var total = 0;
for(var i = 0; i < grades.length; i++) {
    total += grades[i];
}
var avg = total / grades.length;



document.write(students+" "+grades);
window.alert(avg)

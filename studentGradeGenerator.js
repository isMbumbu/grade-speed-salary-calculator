function getGrade(marks) {
    if (marks >= 80 && marks <= 100) return 'A';
    if (marks >= 60) return 'B';
    if (marks >= 50) return 'C';
    if (marks >= 40) return 'D';
    return 'E';
}

// Input
let marks = prompt("Enter student marks (0-100):");
marks = parseInt(marks, 10);

if (marks >= 0 && marks <= 100) {
    console.log(`Grade: ${getGrade(marks)}`);
} else {
    console.log("Invalid marks entered.");
}
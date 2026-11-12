const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

function calculateAverage(data) {
    if (data.length === 0) return 0;

    let sum = 0;
    for (const student of data) {
        sum += student.score;
    }
    return sum / data.length;
}

function findTopStudent(data) {
    if (data.length === 0) return null;

    let top = data[0];
    for (const student of data) {
        if (student.score > top.score) {
            top = student;
        }
    }
    return top.name;
}

function filterFailed(data, passScore) {
    return data
        .filter(student => student.score < passScore)
        .map(student => student.name);
}

function addLetterGrade(data) {
    return data.map(student => ({
        ...student,
        letter: student.score >= 90
            ? "A"
            : student.score >= 75 ? "B" : "C"
    }));
}

console.log("Средний балл группы:", calculateAverage(grades));
console.log("Лучший студент:", findTopStudent(grades));
console.log("Список должников:", filterFailed(grades, 60));
console.log("Массив с буквенными оценками:");
console.log(addLetterGrade(grades));

const grades = Array.from(
  { length: 12 },
  () => Math.floor(Math.random() * 100) + 1
);

const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log(`Средний балл: ${average.toFixed(2)}`);

const maxGrade = Math.max(...grades);
console.log(`Максимальный балл: ${maxGrade}`);

const minGrade = Math.min(...grades);
console.log(`Минимальный балл: ${minGrade}`);

const positiveGradesCount = grades.filter((grade) => grade >= 60).length;
console.log(`Количество положительных оценок: ${positiveGradesCount}`);

const negativeGradesCount = grades.filter((grade) => grade < 60).length;
console.log(`Количество отрицательных оценок: ${negativeGradesCount}`);

const letterGrades = grades.map((grade) => {
  if (grade >= 80) return "A";
  else if (grade >= 60) return "B";
  else if (grade >= 40) return "C";
  else if (grade >= 20) return "D";
  else return "E";
});
console.log(`Буквенные оценки: ${letterGrades.join(", ")}`);

console.log(`Исходные оценки: ${grades.join(", ")}`);

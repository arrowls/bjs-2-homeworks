function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName; 
}
Student.prototype.addMark = function(mark) {
  if (this.marks == undefined) {
    this.marks = [];
  }
  this.marks.push(mark);
}
Student.prototype.addMarks = function() {
  if (this.marks == undefined) {
    this.marks = [];
  }
  for (let key in arguments) {
    this.marks.push(arguments[key]);
  }
}
Student.prototype.getAverage = function() {
  return this.marks.slice().reduce((previous, current) => previous + current, 0) / this.marks.length;
}
Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}
// ваш код для остальных методов
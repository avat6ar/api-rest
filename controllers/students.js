import { v4 as uuidv4 } from "uuid";

let students = [
  {
    id: "1",
    name: "Anas",
    grade: 70,
  },
  {
    id: "2",
    name: "Ali",
    grade: 90,
  },
];

export const getStudents = (requset, response) => {
  response.send(students);
};

export const getStudent = (requset, response) => {
  const id = requset.params.id;

  const student = students.find((student) => student.id === id);

  if (student) {
    response.send(student);
  } else {
    response.send("Student not found");
  }
};

export const deleteStudent = (requset, response) => {
  const id = requset.params.id;

  students = students.filter((student) => student.id !== id);

  response.send(students);
};

export const addStudent = (requset, response) => {
  const student = { ...requset.body, id: uuidv4() };
  students.push(student);
  response.send(`Student with name ${requset.body.name} has been added`);
};

export const updaetStudent = (requset, response) => {
  const id = requset.params.id;
  const { name, grade } = requset.body;
  let student = students.find((student) => student.id === id);

  if (name) {
    student.name = name;
  }
  if (grade) {
    student.grade = grade;
  }

  response.send(`Student with id ${id} has been updated`);
};

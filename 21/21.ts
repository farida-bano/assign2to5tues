// Define an interface for a book object
interface itCourse {
    courseName: string;
    location: string;
    onsiteStudents: number;
    onlineStudents: number;
}

let itCourse: itCourse = {
    courseName: "Cloud Applied Generative AI Engineering",
    location: "Governor Sindh House",
    onsiteStudents: 50000,
    onlineStudents: 500000
};

console.log(itCourse);
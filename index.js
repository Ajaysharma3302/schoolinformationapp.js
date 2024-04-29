const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };
  
  // countDestructuring
  function countCalculation(){

const {departments:{
   
    math:{teachers:mathTeachersCount,students:mathStudentsCount},
    history:{teachers:historyTeachersCount,students:historyStudentsCount}

}



}=school
return{mathTeachersCount,historyTeachersCount,mathStudentsCount,historyStudentsCount}
  }

  console.log(countCalculation(school))

// find topstudents

  function findTopStudent(school,courseName){

    const TopStudent = school.students.reduce((prev,curr)=>{
      
        return curr.scores[courseName] > prev.scores[courseName] ? curr : prev


    })

    return TopStudent
  }
  console.log(findTopStudent(school,"math"))



//   use spreading
let newdept={art:{Teacher:5, Students:140}}
function addnewdept(){
 
    let updateddepartments ={...school.departments,...newdept}

return{...school,departments:updateddepartments}
}

console.log(addnewdept(school,newdept))

//greeting message

function generateGreeting(name,language="english"){

  let greetings={
      'english':`Hello${name}`,
      'spanish':`Hola! ${name}`,
      'french':`Bonjour${name}`
  }

return greetings[language]
}
console.log(generateGreeting("Alice"))
console.log(generateGreeting("Bob","spanish"))
console.log(generateGreeting("charlie","french"))
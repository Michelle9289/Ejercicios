let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
function resp4(){
    for (let i = 0; i < student1Courses.length; i++) {
        const course1= student1Courses[i];
        for (let j = 0; j < student2Courses.length; j++) {
            const course2 = student2Courses[j];
            if ( course1 === course2) {
                console.log(`La materia ${course1} se repite`);
                document.getElementById("pr4").innerHTML = `La materia ${course1} se repite`;
            }else{
                document.getElementById("pr4").innerHTML = `No se encontraron coincidencias`;
            }
        }
        }
}
/*
 * Complete the gradingStudents function below.
 * If the difference between the grade and the next higher multiple of 5 is less than 3, round to the next higher multiple of 5
 * If the grade is less than 38, don’t bother as it’s still a failing grade
 */

function gradingStudents(grades) {

    for (var x =0; x< grades.length; x++){
        if (grades[x] % 5 > 2 && grades[x] >= 38){
            grades[x] = 5 - grades[x] % 5 + grades[x]
        }
        }

        return grades

}



console.log(gradingStudents([73, 67, 38, 33, 54]));
let studentScore = [
    {
        name : 'andi',
        score : 90
    },
    {
        name : 'Rudi',
        score : 80
    },
    {
        name : 'Dira',
        score : 100
    },
]

let highestScoreStudent = studentScore.reduce((max, student) =>{
    return student.score > max.score ? student : max
});
const averageExams = (valuesExam = [50, 60, 90, 80]) => {
    const numberValidation = valuesExam.every(exam => typeof exam === "number")
    if (!numberValidation) throw Error("please input number")

    const sumValue = valuesExam.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return sumValue / valuesExam.length
}

const isStudentPassExam = (valueExam, name) => {
    const minValues = 75
    const avarage = averageExams(valueExam)

    if (avarage > minValues) {
        console.log(`${name} pass the exam`);
        return true
    } else {
        console.log(`${name} fail the exam`);
        return false
    }
}

isStudentPassExam([80, 100, 100, 90], "Nurkholiq Agani Hafid")

module.exports = { averageExams, isStudentPassExam }
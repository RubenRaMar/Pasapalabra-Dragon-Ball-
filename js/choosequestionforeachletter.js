export const chooseQuestionForEachLetter = (questions) => questions.forEach((question) => question.questionIndex = Math.round(Math.random() * 2));
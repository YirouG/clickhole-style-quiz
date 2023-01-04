const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
       id: 0,
       text: "Pick a number?",
       answers: [
           {
               text: "612778",
               image: "https://images.unsplash.com/photo-1464347572096-b33bfc5f3a6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=230&w=320&crop=edges",
               alt: "candles",
               credit: "Rainer Gelhot"
           },
           {
               text: "4.2.19",
               image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
               alt:"Time-lapse photography car lights on bridge",
               credit: "Carlos Alfonso"
           },
           {
               text: "No",
               image: "https://images.unsplash.com/photo-1574352592361-32d1327beef6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=230&w=320&crop=edges",
               alt:"sando",
               credit: "Elena Kuchko"
           },
           {
               text: "7",
               image: "https://plus.unsplash.com/premium_photo-1668790459193-95f86452a5dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=230&w=320&crop=edges",
               alt:"Nana",
               credit: "Ai Yazawa"
           }
       ]
    },
    {
        id: 1,
        text: "Are you secretly a space preacher?",
        answers: [
            {
                text: "Yes",
                image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"Pepperoni Pizza",
                credit: "Alan Hardman"
            },
            {
                text: "Somewhat agree",
                image: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"ham sandwich on white surface",
                credit: "Eaters Collective"
            },
            {
                text: "Not sure",
                image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"Pasta in tomato sauce",
                credit: "Mgg Vitchakorn"
            },
            {
                text: "35%~77%",
                image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"hamburger",
                credit: "sk"
            }
        ]
    },
    {
        id: 2,
        text: "Ready for court martial?",
        answers: [
            {
                text: "Absoluately",
                image: "https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=230&w=320&crop=edges",
                alt:"focus photography of building windows",
                credit: "Chris Liverani"
            },
            {
                text: "Thanks for letting me know",
                image: "https://images.unsplash.com/photo-1489494098705-24dcbf192bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=230&w=320&crop=edges",
                alt:"low angle view of building",
                credit: "Mitchell Orr"
            },
            {
                text: "Tonight",
                image: "https://images.unsplash.com/photo-1520853504280-249b72dc947c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=230&w=320&crop=edges",
                alt:"trees beside white house",
                credit: "Brandon Giggs"
            },
            {
                text: "Sounds good",
                image: "https://images.unsplash.com/photo-1613376285451-9163bd277f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=230&w=320&crop=edges",
                alt:"brown wooden cabin infront of forest",
                credit: "engin akyurt"
            }
        ]
    }
]

const answers = [
    {
        combination: ["612778", "Yes", "Absoluately"],
        text: "Come with us",
        image: "https://images.unsplash.com/photo-1517174898021-ae562c04f44c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=fillmax",
        alt: "Blue cheese"
    },
    {
        combination: ["4.2.19", "35%~77%", "Sounds good"],
        text: "Stay here and don't forget your mission again",
        image: "https://images.unsplash.com/photo-1549313861-33587f3d2956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Cheddar cheese"
    },
    {
        combination: ["7", "Not sure", "Thanks for letting me know"],
        text: "Wrong person?",
        image: "https://images.unsplash.com/photo-1559813251-063297683d0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Feta cheese"
    },
    {
        combination: ["No", "Somewhat agree", "Tonight"],
        text: "Halloumi Cheese",
        image: "https://images.unsplash.com/photo-1505281036624-fac2862357b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        alt: "Halloumi"
    }
]
// need to have a default answer to compensate for lack of combination data

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.image)
            imageLink.textContent = answer.credit
            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://www.unsplash.com')
            answerInfo.append(imageLink, ' to ', sourceLink)

            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock)

    })
}
populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }
    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestionBlock(questionId, chosenAnswer)
    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

    if (!unansweredQuestions.length) {
        location.href = '#answer'
        showAnswer()
    }
}

const showAnswer = () => {
    let result
    answers.forEach(answer => {
        if (
            chosenAnswers.includes(answer.combination[0]) +
            chosenAnswers.includes(answer.combination[1]) +
            chosenAnswers.includes(answer.combination[2])
        ) {
            result = answer
            return
        } else if (!result) {
            //first answer object is default
            result = answers[0]
        }
    })

    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)

    answerBlock.append(answerTitle, answerImage)

    answerDisplay.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText !== chosenAnswer) {
            block.style.opacity = "50%"
        }
    })
}






import { flagCall, updateScoreUser } from '../requests/RequestUser';
import { countries } from '../data/countries';


export const triggerAnswers = async (setAnswer, result) => {
    let optionsAnswer = []
    console.log(result)
    for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * countries.length)
        Object.keys(countries[index]).forEach(async (key) => {
            optionsAnswer.push(countries[index][key])
            return optionsAnswer
        })
    }
    const index = Math.floor(Math.random() * 4)
    if (index === 0) {
        optionsAnswer.unshift(result)
        setAnswer(optionsAnswer)
    } else if (index === 1) {
        const newArraySliced = [...optionsAnswer.slice(0, 1), result, ...optionsAnswer.slice(index)]
        setAnswer(newArraySliced)
    } else if (index === 2) {
        const newArraySliced = [...optionsAnswer.slice(0, 2), result, ...optionsAnswer.slice(index)]
        setAnswer(newArraySliced)
    } else if (index === 3) {
        optionsAnswer.push(result)
        setAnswer(optionsAnswer)
    }
    return optionsAnswer
}


export const startGame = async (setResult, setAnswer, setFlag, result) => {
    try {
        const index = Math.floor(Math.random() * countries.length)
        Object.keys(countries[index]).forEach(async (key) => {
            console.log(key, countries[index][key])
            setResult(countries[index][key])
            const resultFlag = await flagCall(`${key}`)
            setFlag(resultFlag.request.responseURL)
            triggerAnswers(setAnswer, countries[index][key])
        })
    } catch (error) {
        console.log(error)
    }
}


export const handleSubmit = (e, result, input, setMessage, setScore, score, setFlag, setResult, setInput, setUpdated, setAnswer) => {
    e.preventDefault()
    console.log(result)
    console.log(input)
    if (result === input) {
        setMessage(`Good answer, keep going !`)
        setScore(score + 1)
        setTimeout(() => {
            startGame(setResult, setAnswer, setFlag, result)
        }, 1000);
    } else if (!result || result === '') {
        alert("You didnt start a game, please press start game !");
    } else if (result !== input) {
        setMessage(`Bad answer, it was ${result}, try again!`)
        setAnswer([])
        if (score > localStorage.getItem('score')) {
            updateScoreUser(score, setUpdated)
            setScore(0)
            localStorage.setItem('score', JSON.stringify(score))
        }
        setFlag('https://www.placecage.com/300/200')
        setResult('')
    } else {
        setMessage(`A problem occured. couldn't upload your new score ...`)
        setFlag('https://www.placecage.com/300/200')
        setResult('')
    }
    setInput('')
}
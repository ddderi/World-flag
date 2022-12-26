import { flagCall } from '../requests/RequestUser';
import { countries } from '../data/countries';


export const triggerAnswers = async (setResult, rightresult, setAnswer, result, valueToRemove, arraycountries, setArraycountries) => {


    let filteredCountry = countries.filter(country => country !== valueToRemove)
    let optionsAnswer = []

    for (let i = 0; i < 3; i++) {

        const index = Math.floor(Math.random() * filteredCountry.length)
        console.log(index)
        Object.keys(filteredCountry[index]).forEach(async (key) => {
            optionsAnswer.push(filteredCountry[index][key])
            filteredCountry.filter(country => country !== filteredCountry[index])
            return optionsAnswer
        })
    }

    ////
    const index = Math.floor(Math.random() * 4)
    if (index === 0) {
        optionsAnswer.unshift(rightresult)
        setAnswer(optionsAnswer)
    } else if (index === 1) {
        const newArraySliced = [...optionsAnswer.slice(0, 1), rightresult, ...optionsAnswer.slice(index)]
        setAnswer(newArraySliced)
    } else if (index === 2) {
        const newArraySliced = [...optionsAnswer.slice(0, 2), rightresult, ...optionsAnswer.slice(index)]
        setAnswer(newArraySliced)
    } else if (index === 3) {
        optionsAnswer.push(rightresult)
        setAnswer(optionsAnswer)
    }
    setResult(rightresult)
    return optionsAnswer
}


export const startGame = async (arraycountries, setArraycountries, setResult, setAnswer, setFlag, setScore, setDisplayed, setDisabled) => {
    try {

        setDisabled(false)
        setResult('')
        setAnswer([])
        setDisplayed(false)
        const index = Math.floor(Math.random() * arraycountries.length)

        Object.keys(arraycountries[index]).forEach(async (key) => {
            let newarray = arraycountries.filter(country => country !== arraycountries[index])
            setArraycountries(newarray)
            let valueToRemove = arraycountries[index]
            let rightresult = arraycountries[index][key]
            const resultFlag = await flagCall(`${key}`)
            setFlag(resultFlag.request.responseURL)
            triggerAnswers(setResult, rightresult, setAnswer, countries[index][key], valueToRemove, arraycountries, setArraycountries)
        })
    } catch (error) {
        console.log(error)
    }
}


export const endOfGame = (setArraycountries, user, lastscore, score, createPoint, setTriggerscore, updatePoint, setLastscore, setFlag, setScore, setResult, setInput, existscore) => {

    if (score > localStorage.getItem('userscore')) {
        updatePoint(score)
        setTriggerscore(true)
        localStorage.setItem('userscore', JSON.stringify(score))
    }

    if (score > lastscore) {
        setLastscore(score)
    }
    setArraycountries(countries)
    setResult('')
    setInput('')
}


export const handleSubmit = (e, result, input, etarget, setScore, score, setFlag, setResult, setInput, setAnswer, setColor, setDisplayed, setOver, setGoodanswer, life, lastlife, arraycountries, setArraycountries, setDisabled, setRightanswer, setWronganswer) => {
    e.preventDefault()
    setDisabled(true)
    if (result === input) {
        setScore(score + 1)
        setColor(true)
        // console.log(etarget.style.backgroundColor)
        etarget.style.backgroundColor = 'green'

        setGoodanswer(true)
        setTimeout(() => {
            etarget.style.backgroundColor = ''
            startGame(arraycountries, setArraycountries, setResult, setAnswer, setFlag, result, setDisplayed, setDisabled)

        }, 1000);
    }
    else if (!result || result === '') {
        setDisplayed(true)
    } else if (result !== input) {
        etarget.style.backgroundColor = 'red'
        const mydiv = document.getElementsByClassName('answer')
        for (let i = 0; i < mydiv.length; i++) {
            if (mydiv[i].innerHTML === result) {
                mydiv[i].style.backgroundColor = 'green'
            }
        }
        setColor(false)
        setOver(true)
        if (life > 0 && !lastlife) {
            setTimeout(() => {
                etarget.style.backgroundColor = ''
                startGame(arraycountries, setArraycountries, setResult, setAnswer, setFlag, result, setDisplayed, setDisabled)

            }, 1000);
        }
    } else {
        // setMessageFooter(`A problem occured. couldn't upload your new score ...`)
        // setFlag(imglost)
        // setScore(0)
        // setResult('')
    }
    // setInput('')
}
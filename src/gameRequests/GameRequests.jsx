import { flagCall } from '../requests/RequestUser';
import { countries } from '../data/countries';


export const triggerAnswers = async (setAnswer, result, valueToRemove, arraycountries, setArraycountries) => {


    let filteredCountry = countries.filter(country => country !== valueToRemove)

    // let countriestomap = [...countries]
    let optionsAnswer = []

    for (let i = 0; i < 3; i++) {
        
        const index = Math.floor(Math.random() * filteredCountry.length)
        console.log(index)
        Object.keys(filteredCountry[index]).forEach(async (key) => {
            optionsAnswer.push(filteredCountry[index][key])
            filteredCountry.filter(country => country !== countries[index])
            return optionsAnswer
        })
    }

    ////
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


export const startGame = async (arraycountries, setArraycountries, setResult, setAnswer, setFlag, setScore, setDisplayed, setDisabled) => {
    try {
        setDisabled(false)
        setResult('')
        setAnswer([])
        setDisplayed(false)
        const index = Math.floor(Math.random() * countries.length)
        Object.keys(countries[index]).forEach(async (key) => {
            setResult(countries[index][key])
            const valueToRemove = countries[index]
            //    console.log(arraycountries[index][key])
            //setResultFooter(countries[index][key])
            const resultFlag = await flagCall(`${key}`)
            setFlag(resultFlag.request.responseURL)
            triggerAnswers(setAnswer, countries[index][key], valueToRemove, arraycountries, setArraycountries)
        })
    } catch (error) {
        console.log(error)
    }
}


export const endOfGame = (user, lastscore, score, createPoint, setTriggerscore, updatePoint, setLastscore, setFlag, setScore, setResult, setInput, existscore) => {

    if (score > localStorage.getItem('userscore')) {
        updatePoint(score)
        setTriggerscore(true)
        localStorage.setItem('userscore', JSON.stringify(score))
    }

    if (score > lastscore) {
        setLastscore(score)
    }
    setResult('')
    setInput('')
}


export const handleSubmit = (e, result, input, etarget, setScore, score, setFlag, setResult, setInput, setAnswer, setColor, setDisplayed, setOver, setGoodanswer, life, lastlife, arraycountries, setArraycountries, setDisabled) => {
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
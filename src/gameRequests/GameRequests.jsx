import { flagCall, updateScoreUser } from '../requests/RequestUser';
import { countries } from '../data/countries';


export const triggerAnswers = async (setAnswer, result) => {
    let optionsAnswer = []
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


export const startGame = async (setMessageFooter, setResult, setResultFooter, setAnswer, setFlag, setScore, setDisplayed) => {
    try {
        setMessageFooter('')
        //setResultFooter('')
        setResult('')
        setAnswer([])
        setDisplayed(false)
        const index = Math.floor(Math.random() * countries.length)
        Object.keys(countries[index]).forEach(async (key) => {
            setResult(countries[index][key])
            console.log(countries[index][key])
            setResultFooter(countries[index][key])
            const resultFlag = await flagCall(`${key}`)
            //console.log(resultFlag)
            setFlag(resultFlag.request.responseURL)
            triggerAnswers(setAnswer, countries[index][key])
        })
    } catch (error) {
        console.log(error)
    }
}



export const handleSubmit = (e, result, input, etarget, setMessageFooter, setResultFooter, setScore, score, setFlag, setResult, setInput, setUpdated, setAnswer, setColor, setColoranswer, answer, setLastscore, setDisplayed, lastscore, createPoint, updatePoint, setExistscore, existscore, user) => {
    e.preventDefault()
    //setMessageFooter('')

    if (result === input) {
        setMessageFooter('messageFooter.2')
        setScore(score + 1)
        setColor(true)
        console.log(etarget.style.backgroundColor)
        etarget.style.backgroundColor = 'green'
        setTimeout(() => {
            etarget.style.backgroundColor = ''
            startGame(setMessageFooter, setResult, setResultFooter, setAnswer, setFlag, result, setDisplayed)
        }, 1500);
    } else if (!result || result === '') {
        setDisplayed(true)
    } else if (result !== input) {
        setMessageFooter('messageFooter.3')
        etarget.style.backgroundColor = 'red'
        const mydiv = document.getElementsByClassName('answer')
        for (let i = 0; i < mydiv.length; i++) {
            if (mydiv[i].innerHTML === result) {
                mydiv[i].style.backgroundColor = 'green'
            }
        }
        setColor(false)
        if (score > localStorage.getItem('userscore')) {
            if(existscore === false){
                createPoint(score, user)
            }else if(existscore === true){
                updatePoint(score)
            }
            // updateScoreUser(score, setUpdated)
            // PUT UPDATE FUNCTION HERE
            console.log('ITS HAPPENING BCS ')
            localStorage.setItem('userscore', JSON.stringify(score))
        }
        if (score > lastscore) {
            setLastscore(score)
        }
        setFlag('https://www.placecage.com/300/200')
        setScore(0)
        setResult('')
    } else {
        setMessageFooter(`A problem occured. couldn't upload your new score ...`)
        setFlag('https://www.placecage.com/300/200')
        setScore(0)
        setResult('')
    }
    setInput('')
}
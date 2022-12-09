import { flagCall } from '../requests/RequestUser';
import { countries } from '../data/countries';


export const triggerAnswers = async (setAnswer, result, valueToRemove, arraycountries, setArraycountries ) => {
  
    // let optionsAnswer = []
    // console.log(result)
    // for (let i = 0; i < 3; i++) {
    //     const index = Math.floor(Math.random() * countries.length)
    //     Object.keys(countries[index]).forEach(async (key) => {
    //         optionsAnswer.push(countries[index][key])
    //         return optionsAnswer
    //     })
    // }
      

    ///
    //   const propName = objects[0];
    //   console.log(propName)
      // use filter() to create a new array without objects with the specified property name
      //const filteredObjects = objects.filter(obj => obj !== propName);
      
      // the filtered array should not contain the object with the property "shape"
      //console.log(filteredObjects);
    
    
    // console.log(countries)
    // console.log(result)
    
    let filteredCountry = countries.filter(country => country !== valueToRemove )
    // console.log(filteredCountry)
    let countriestomap = [...countries]
    let optionsAnswer = []
    //const countriestomap = [...countries]
    for (let i = 0; i < 3; i++) {
        
        const index = Math.floor(Math.random() * filteredCountry.length)
        Object.keys(filteredCountry[index]).forEach(async (key) => {
            optionsAnswer.push(filteredCountry[index][key])
            filteredCountry = [...filteredCountry.filter(country => country !== countries[index])]
            console.log(filteredCountry.length)
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


export const startGame = async (arraycountries, setArraycountries, setMessageFooter, setResult, setResultFooter, setAnswer, setFlag, setScore, setDisplayed, setDisabled) => {
    try {
        setDisabled(false)
        setMessageFooter('')
        setResult('')
        setAnswer([])
        setDisplayed(false)
        const index = Math.floor(Math.random() * countries.length)
        Object.keys(countries[index]).forEach(async (key) => {
            setResult(countries[index][key])
            const valueToRemove = countries[index]
        //    console.log(arraycountries[index][key])
            setResultFooter(countries[index][key])
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
        if (existscore === false) {
            createPoint(score, user)
            setTriggerscore(true)
        } else if (existscore === true) {
            updatePoint(score)
            setTriggerscore(true)
        }
        localStorage.setItem('userscore', JSON.stringify(score))
    }
    if (score > lastscore) {
        setLastscore(score)
    }
    setResult('')
    setInput('')
}


export const handleSubmit = (e, result, input, etarget, setMessageFooter, setResultFooter, setScore, score, setFlag, setResult, setInput, setAnswer, setColor, setDisplayed, setOver, setGoodanswer, life, lastlife, arraycountries, setArraycountries, setDisabled) => {
    e.preventDefault()
    setDisabled(true)
    if (result === input) {
        setMessageFooter('messageFooter.2')
        setScore(score + 1)
        setColor(true)
        console.log(etarget.style.backgroundColor)
        etarget.style.backgroundColor = 'green'

        setGoodanswer(true)
        setTimeout(() => {
            etarget.style.backgroundColor = ''
            startGame(arraycountries, setArraycountries, setMessageFooter, setResult, setResultFooter, setAnswer, setFlag, result, setDisplayed, setDisabled)

        }, 1000);
    }
    else if (!result || result === '') {
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
        setOver(true)
        if (life > 0 && !lastlife) {
            setTimeout(() => {
                etarget.style.backgroundColor = ''
                startGame(arraycountries, setArraycountries, setMessageFooter, setResult, setResultFooter, setAnswer, setFlag, result, setDisplayed, setDisabled)

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
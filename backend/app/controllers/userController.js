const User = require("../models/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const signup = async (req, res) => {
    try {
        const { username, password, passwordConfirmation } = req.body;
        const data = {
            username,
            password: await bcrypt.hash(password, 10)
        }

        const alreadyExistsUser = await User.findOne({
            where: {
                username
            }
        }).catch((error) => {
            console.log(error)
        })

        if (alreadyExistsUser) {
            return res.json({ message: "Username already exists" })
        }else if(password !== passwordConfirmation){
            return res.json({ message: "Password don't match" })
        }
        const user = await User.create(data)
        
        // JWT TO DO HERE
        if (user) {
            let token = jwt.sign({ id: user.id }, process.env.TOKEN_KEY, {
                expiresIn: "2h"
            });

            res.cookie("jwt", token, { maxAge: 86000, httpOnly: true, httpOnly: true })
            console.log("user", JSON.stringify(user, null, 2));
            console.log(token);
            // JWT TO DO HERE
            // JWT TO DO HERE
            // JWT TO DO HERE
            console.log('registered')
            return res.status(201).json({ user, login: true, message: 'Account succesfully created !' })
        } else {
            console.log('bug')
            return res.status(409).send("details are not correct")
        }

    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });

        if (user) {
            const isSame = await bcrypt.compare(password, user.password);
            if (isSame) {
                let token = jwt.sign({ id: user.id }, process.env.TOKEN_KEY, {
                    expiresIn: "2h"
                });

                res.cookie(`jwt`, token, { maxAge: 10 * 90000 * 24, httpOnly: true })
                return res.status(200).json({ message: 'succesfully connected', user, success: true })
            } else {
                return res.status(401).json({ message: "identification incorrect", success: false })
            }
        } else {
            return res.status(401).json({ message: "identification incorrect" })
        }
    } catch (error) {
        console.log(error)
    }
}


const logout = async (req, res, next) => {
    try {
        const result = await res.clearCookie('jwt').end()
        return result

    } catch (error) {
        console.log(error)
    }
}


const changePassword = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        const { username, password, newPassword } = req.body
        const user = await User.findOne({ where: { username } });
        jwt.verify(token, process.env.TOKEN_KEY, async (error, verifiedJWT) => {
            try {
                if (verifiedJWT) {
                    if (user) {
                        const isSame = await bcrypt.compare(password, user.password);
                        const userFound = await User.findOne({ where: { id: verifiedJWT.id } })
                        if (isSame && userFound) {
                            const newUser = await userFound.update({ password: await bcrypt.hash(newPassword, 10) })
                            res.status(201).json({ message: 'password properly updated', newUser, success: true })
                        } else {
                            res.status(401).json({ message: 'Problem with your identifications', success: false })
                        }
                    }
                } else {
                    res.status(401).json({ error, message: "a problem occured", success: false })
                }
            } catch (error) {
                res.status(401).json({ error, message: "a problem occured", success: false })
            }
        })
    } catch (error) {
        res.status(400).json({ error, message: "a problem occured" })
    }
}



const userLogged = async (req, res) => {
    try {
        const token = req.cookies.jwt
        jwt.verify(token, process.env.TOKEN_KEY, (error, verifiedJWT) => {
            if (error) {
                res.status(403).json({ message: "you are not connected", login: false })
            } else {
                res.status(201).json({ login: true })
            }
        })
    } catch (error) {
        console.log(error)
    }
}


const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({ where: { id } })
        const deleting = await user.destroy()
        res.status(200).json({ message: 'user succesfully deleted' })
    } catch (error) {
        console.log(error)
    }
}

const updateScore = async (req, res) => {
    try {
        const token = req.cookies.jwt
        const { score } = req.body
        console.log(score)
        jwt.verify(token, process.env.TOKEN_KEY, async (error, verifiedJWT) => {
            try {
                if (verifiedJWT) {
                    const user = await User.findOne({ where: { id: verifiedJWT.id } });
                    // const user = await User.update(
                    //     { bestscores: score },
                    //     { where: { id: verifiedJWT } })
                    if (user) {
                        const newUser = await user.update({ bestscores: score })
                        res.status(201).json({ message: 'Sour score is updated', newUser, updated: true })
                    } else {
                        res.status(401).json({ message: 'Coudlnt update score' })
                    }
                    // if (user) {
                    //     const newUser = User.update
                    //     res.status(201).json({ message: 'SCORE WILL BE UPDATED' })
                    // } else {
                    //     res.status(401).json({ message: 'Coudlnt update scores' })
                    // }

                } else {
                    res.status(401).json({ error, message: "a problem occured" })
                }
            } catch (error) {
                res.status(401).json({ error, message: "a problem occured" })
            }
        })
    } catch (error) {
        res.status(400).json({ error, message: "a problem occured" })
    }
}

const bestPlayers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['username', 'bestscores'],
            order: [
                ["bestscores", "DESC"]
            ],
            limit: 5
        })
        res.status(201).json({ users })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    signup,
    login,
    logout,
    userLogged,
    changePassword,
    deleteUser,
    updateScore,
    bestPlayers
};
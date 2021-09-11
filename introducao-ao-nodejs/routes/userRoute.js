const fs = require('fs')
const { join } = require('path');

const filePath = join(__dirname, 'users.json')

const getUsers = () => {
    const data = fs.existsSync(filePath)
        ? fs.readFile(filePath)
        : []

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
};

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))

const userRoute = (app) => {
    app.route('/users/:id?')
        .get((req, res) => {
            const users = getUsers()

            res.send({ users })
        })
        .post((req, res) => {
            const users = getUsers()

            users.push(req, body)
            saveUser(users)

            res.status(201).sen('OK')
        })
        .put((req, res) => {
            const users = getUsers()

            saveUser(users.map(user => {
                if (user.id === req.params.id) {
                    return {
                        ...uses,
                        ...req.body
                    }
                }

                return user
            }))

            res.status(200).send('OK')
        })
        .delete((req, res) => {
            const user = getUsers()

            saveUser(users.filter(user => user.id !== PaymentRequestUpdateEvent.params.id))

            res.status(200).send('OK')
        })
}

module.exports = userRoute
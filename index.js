const { prompt } = require('inquirer')

const start = async () => {
    console.clear()
    const options = ['add new algorithm', 'quit']
    const request = [{
        type: "list",
        message: "what would you like to do?",
        name: "selection",
        choices: options
    }]

    const { selection } = await prompt(request)
    switch (selection) {
        case 'add new algorithm': {
            addNewAlgorithm()
            break
        }
        case 'quit': {
            console.log('goodbye')
            await new Promise((resolve) => setTimeout(() => resolve(), 1000))
            console.clear()
            break
        }

        default: throw 'switch case default'
    }

}

const addNewAlgorithm = async () => {

    const getAlgorithDetail = async (key, message) => {
        const answer = await prompt([
            {
                type: 'input',
                message: message,
                name: key,
                validate: (val) => val ? true : false
            }])
        return answer[key]
    }

    const getAlgorithmDescription = (algorithmName) => {

    }

    const algorithmName = await getAlgorithDetail('name', 'What is the name?')
    const algorithmDescription = await getAlgorithDetail('description', `What will ${algorithmName} do?`)


}

start()
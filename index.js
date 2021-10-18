const { prompt } = require('inquirer')
const { createNewAlgo, getDirectories } = require('./utils/new-challenge')

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
            addNewAlgo()
            break
        }
        case 'quit': {
            console.log('\ngoodbye\n')
            await new Promise((resolve) => setTimeout(() => resolve(), 2000))
            console.clear()
            break
        }

        default: throw 'switch case default'
    }

}


const addNewAlgo = async () => {

    const getAlgoDetail = async (key, message, cb) => {
        const answer = await prompt([{
            type: 'input',
            message: message,
            name: key,
            validate: (val) => cb(val)
        }]);
        return answer[key];
    }

    const defaultValidate = (val) => val ? true : false
    const formattedName = (algoName) => algoName.replace(' ', '-')
    const validateName = (val) => getDirectories('./algorithms').indexOf(formattedName(val)) === -1
    const algoName = await getAlgoDetail('name', 'What is the name? ** use-snake-case or camelCase **', validateName)
    const algoDescription = await getAlgoDetail('description', `Complete this sentance:  ${algoName} will`, defaultValidate);

    createNewAlgo(`./algorithms`, formattedName(algoName), algoDescription)
};

start();
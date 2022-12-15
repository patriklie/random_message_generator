const randomNumber = num => {
    return Math.floor(Math.random() * num)
}

const optionsObject = {
    weather: ['rainy', 'snowy', 'sunny', 'windy', 'snowstorm', 'lava rain', 'firestorm'],
    advice: ['fix the weather', 'stay in bed', 'stay inside and play Zelda', 'go hiking']
}


let randomizedMessage = []

for(let option in optionsObject){
    let randomChoice = randomNumber(optionsObject[option].length)

    switch(option) {
        case 'weather':
            randomizedMessage.push(`Todays weather is ${optionsObject[option][randomChoice]}.`)
            break
        case 'advice':
            randomizedMessage.push(`You should just ${optionsObject[option][randomChoice]}.`)
            break
        default:
            randomizedMessage.push('There is no info to generate a message!')
    }
}

function joinArray(arr) {
   const messageJoined = arr.join('\n');
   console.log(messageJoined);
}

joinArray(randomizedMessage);
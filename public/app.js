// Global Variables
const key = 'ddb32c28535519ff8e479f5099a03619'
const zipHolder = document.querySelector('#zip')
const feelingsHolder = document.querySelector('#feelings')
const generateButton = document.querySelector('#generate')
const dateHolder = document.querySelector('#date')
const tempHolder = document.querySelector('#temp')
const contentHolder = document.querySelector('#content')

// Async GET
const getAllEntries = async () => {
    const response = await fetch('/getAllEntries')
    const body = await response.json()

    if (response.status !== 200) {
        throw Error(body.message)
    }

    console.log('body', body)
    return body
}

// Async POST - create an entry
const createEntry = async e => {
    e.preventDefault()

    let newDate = moment().format('MMMM D, YYYY')
    // if no zip code entered, default to 90210
    let newZipCode = zipHolder.value || '90210'
    let newFeelings = feelingsHolder.value
    let newTemperature = await getTemperature(newZipCode, key)

    const newData = {
        date: newDate,
        temp: newTemperature,
        content: newFeelings
    }

    const response = await fetch('/addEntry', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            newData
        })
    })

    const body = await response.json()
    console.log(body)

    if (response.status !== 200) {
        throw Error(body.message)
    }

    // TODO: call a function to update UI

}

// Function to retrieve temperature based on zip code
const getTemperature = async (zipCode, apiKey) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${apiKey}`)
    const body = await response.json()

    return body.main.temp.toFixed()
}

generateButton.addEventListener('click', createEntry)
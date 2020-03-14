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
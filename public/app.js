// GET function
const retrieveData = async () => {
    const response = await fetch('http://localhost:3000/all')
    const body = await response.json()

    if (response.status !== 200) {
        throw Error(body.message)
    }

    return body
}

// retrieveData()
//     .then( res => console.log('working', res.name))
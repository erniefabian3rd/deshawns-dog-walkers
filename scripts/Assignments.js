import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()

const findWalkerCity = (walker, allCities) => {
    let walkerCity = null

    for (const city of allCities) {
        if (walker.cityId === city.id) {
            walkerCity = city.name
        }
    }
    return walkerCity
}


// Function whose responsibility is to find the walker assigned to a pet
const findPet = (walker, allPets) => {
    let foundPet = null

    for (const pet of allPets) {
        if (walker.id === pet.walkerId) {
            foundPet = pet.name
        }
    }

    return foundPet
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML += "<ul>"

    for (const walker of walkers) {
        const pet = findPet(walker, pets)
        const city = findWalkerCity(walker, cities)
        assignmentHTML += `
            <li>
                ${pet} is being walked by
                ${walker.name} in ${city}
            </li>
        `
    }
    assignmentHTML += "</ul>"

    return assignmentHTML
}


const name = 'Manohar'
const userAge =  22

const user = {
    name,
    age: userAge,
    location: 'Hyderabad'
} 
const {age, location, name: firstName} = user
console.log(firstName)
console.log(age)
console.log(location)

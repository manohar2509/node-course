const names = ["Manohar","Chunduri"]
setTimeout(()=>{
    console.log("After two seconds")
},2000)
const shortNames = names.filter((name)=>{
    return name.length<=4
}
)
console.log(shortNames)

const geocode = (address,callback) => {
    setTimeout(()=>{
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    },2000)
}
geocode("Philadelphia",(data)=>{
    console.log(data)
}   
)
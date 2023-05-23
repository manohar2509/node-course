const square = (x) => {return x*x;}
console.log(square(8));
const event = {
    name: "Birthday Party",
    guestList: ["Manohar", "Sai", "Sai", "Sai"],
    printGuestList(){
        console.log("Guest list for "+this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending "+this.name)
        })
    }   
}
event.printGuestList();
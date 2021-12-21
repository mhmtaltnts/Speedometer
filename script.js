const speedometer = document.getElementById("speedometer")
const select = document.getElementById("select")
const time = document.getElementById("time")
let currentLocation = ""
let timeTaken = 0

let destination = [
    {
        name: "Munich",
        distanceFromPrevDestination: 2892
    },
    {
        name: "Kiev",
        distanceFromPrevDestination: 1111
    },
    {
        name: "Ulaanbaatar",
        distanceFromPrevDestination: 5324
    },
     {
        name: "Sydney",
        distanceFromPrevDestination: 5458
    },
    {
        name: "Tijuana",
        distanceFromPrevDestination: 6531
    },
    {
        name: "Chicago",
        distanceFromPrevDestination: 1729
    }
]

function calculateSpeed() {
    let speed = 0    
    currentLocation = select.value
    destination.forEach( (item) =>
        {if(item.name === currentLocation){
            timeTaken = parseInt(time.value)
            speed = parseInt(item.distanceFromPrevDestination/timeTaken)
            speedometer.innerText = speed
        }}
    )
    
    
    // Task:
    // - Retrieve distance from previous destination from array of objects.
    // - Calculate speed and round speed to an integer (whole number).
    // - Display speed in speedometer paragraph.
   
}
time.addEventListener("change", calculateSpeed)
select.addEventListener("change", calculateSpeed)

// Stretch goals: 
// - Calculate average overall speed.
// - Display location as North Pole on pageload.

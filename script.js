
function convertTime() {
    let n = document.getElementById('inputTime').value
    let [hours, rest] = n.split(":");
    let minutes = rest.slice(0, 2);
    let ampm = rest.slice(2).toLocaleUpperCase();
    hours = parseInt(hours);


    if (isNaN(hours) || isNaN(minutes) || hours > 24 || hours < 0) {
        //console.log("Invalid time")
        document.getElementById('convertedTime').innerText = 'Invalid time'
    }
    else {
        if (ampm === "AM" || ampm === "PM") {
            if (hours < 12 && ampm == "PM") {
                hours += 12;
            }
            if (hours === 12 && ampm == "AM") {
                hours = 0;
            }
            //console.log(`The relway time is ${hours.toString().padStart(2,'0')}:${minutes.toString(0).padStart(2,'0')}`)
            document.getElementById('convertedTime').innerText = `The time is ${hours.toString().padStart(2, '0')}:${minutes.toString(0).padStart(2, '0')}`
        }
        else {
            if (hours >= 12) {
                ampm = "PM";
                if (hours > 12) {
                    hours -= 12;
                }
            }
            else {
                ampm = "AM";
                if (hours === 0) {
                    hours = 12;
                }
            }
            //console.log(`The real time is ${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}${ampm}`)
            document.getElementById('convertedTime').innerText = `The time is ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}${ampm}`

        }
    }
}

// Button click listener
document.getElementById('convertButton').addEventListener('click', function(){
    convertTime();
})

// key listener  for Enter key
document.getElementById('inputTime').addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        convertTime();
    }
    
})





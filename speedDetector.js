function checkSpeed(speed) {
    const speedLimit = 70;
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / 5);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Input
let speed = prompt("Enter car speed (in km/h):");
speed = parseInt(speed, 10);
checkSpeed(speed);
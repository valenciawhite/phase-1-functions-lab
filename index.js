let headQuartLocation = 42;

function distanceFromHqInBlocks(pickupLocation){
    return Math.abs(pickupLocation - headQuartLocation)
}

let blockToFeet = 264;

function distanceFromHqInFeet(pickupLocation){
   let distance = distanceFromHqInBlocks(pickupLocation);
   return distance * blockToFeet
}

function distanceTravelledInFeet(start, destination){
    return Math.abs((start - destination) * blockToFeet)
}


function calculatesFarePrice(start, destination){
    let feet = distanceFromHqInFeet(start, destination);

    if(feet <= 400){
        return 0;
    } else if (feet > 400 && feet < 2000){
        return (feet - 400) * 0.02;
    } else if(feet > 2000) {
        return 25;
    }else{
        return 'cannot travel that far';
    }

}



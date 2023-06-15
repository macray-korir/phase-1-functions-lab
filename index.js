// Code your solution in this file!
// Calculate the distance in blocks from the headquarters
function distanceFromHqInBlocks(blocks) {
  const hqLocation = 42;
  return Math.abs(blocks - hqLocation);
}

// Calculate the distance in feet from the headquarters
function distanceFromHqInFeet(blocks) {
  const blockInFeet = 264;
  return distanceFromHqInBlocks(blocks) * blockInFeet;
}

// Calculate the distance in feet between two locations
function distanceTravelledInFeet(start, destination) {
  const blockInFeet = 264;
  return Math.abs(start - destination) * blockInFeet;
}

// Calculate the fare price based on the distance traveled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; 
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far'; 
  }
}


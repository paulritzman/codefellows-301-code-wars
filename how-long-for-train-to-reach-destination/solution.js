function reachDestination(distance, speed) {
  let time = Math.round((distance / speed) * 2) / 2;
  let strHours = (time === 1) ? 'hour' : 'hours';

  time = (time.toFixed() === time.toString()) ? time.toFixed() : time.toFixed(1);

  return `The train will be there in ${time} ${strHours}.`;
}
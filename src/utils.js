const timeUnits = ["hours", "minutes", "seconds", "milliseconds"];
const [hours, minutes, seconds, milliseconds] = timeUnits;

function handleZerosPadding(timeUnit, timeValue) {
  let convertedTimeValue;

  switch (timeUnit) {
    case hours:
    case minutes:
    case seconds:
      if (timeValue < 10) convertedTimeValue = "0" + timeValue;
      else convertedTimeValue = timeValue;
      break;
    case milliseconds:
      if (timeValue < 10) convertedTimeValue = "00" + timeValue;
      else if (timeValue < 100) convertedTimeValue = "0" + timeValue;
      else if (timeValue <= 999) convertedTimeValue = timeValue;
      break;
    default:
      throw new Error(`Provided time unit: ${timeUnit} could not be recognized as valid unit.`);
  }

  return convertedTimeValue;
}

export { handleZerosPadding, timeUnits };

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
      console.error(
        `Provided time unit: ${timeUnit} coudln not be recognized as valid unit.`
      );
      break;
  }

  return convertedTimeValue;
}

export { handleZerosPadding, timeUnits };

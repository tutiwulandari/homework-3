class ConvertTemperature {

  temperatureCelcius(to, number) {
    if ((to == 'Celcius')) {
      return number;
    }
    if ((to == 'Reamur')) {
      return (4 / 5) * number;
    }
    if ((to == 'Fahrenheit')) {
      return (9 / 5) * number + 32;
    }
  }

  temperatureReamur(to, number) {
    if ((to == 'Reamur')) {
      return number;
    }
    if ((to == 'Celcius')) {
      return (5 / 4) * number;
    }
    if (to = 'Fahrenheit') {
      return (9 / 4) * number + 32;
    }
  }

  temperatureFahrenheit(to, number) {
    if (to == 'Fahrenheit') {
      return number;
    }
    if (to == 'Celcius') {
      return (5 / 9) * (number - 32);
    }
    if ((to == 'Reamur')) {
      return (4 / 9) * (number - 32);
    }
  }
}

module.exports = ConvertTemperature;

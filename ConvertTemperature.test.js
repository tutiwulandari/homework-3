const ConvertTemperature = require("./ConvertTemperature")

test("test Celcius to Reamur", () => {
    const convertTest = new ConvertTemperature() 
    expect (convertTest.temperatureCelcius('Reamur', 100)).toBe(80)

})

test("test Celcius to Fahrenheit", () => {
    const convertTest = new ConvertTemperature() 
    expect (convertTest.temperatureCelcius('Fahrenheit', 100)).toBe(212)

})

test("test Reamur to Celcius", () => {
    const convertTest = new ConvertTemperature() 
    expect (convertTest.temperatureReamur('Celcius', 100)).toBe(125)

})

test("test Reamur to Fahrenheit", () => {
    const convertTest = new ConvertTemperature() 
    expect (convertTest.temperatureReamur('Fahrenheit', 100)).toBe(257)

})

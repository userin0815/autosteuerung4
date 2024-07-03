input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(-0.5)
    basic.showString("L")
})
radio.onReceivedNumber(function (receivedNumber) {
    v = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showString("V")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(0.5)
    basic.showString("R")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(-1)
    basic.showString("H")
})
let v = 0
let speed = 20
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
radio.setGroup(1)
basic.forever(function () {
    if (v == 1) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, speed)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, speed)
        basic.showString("V")
    } else if (v == -1) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, speed)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, speed)
        basic.showString("H")
    } else if (v == 0.5) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, speed)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, speed)
        basic.showString("L")
    } else if (v == -0.5) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, speed)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, speed)
        basic.showString("R")
    } else {
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
        basic.showString("O")
    }
})

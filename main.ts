radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(1000)
        for (let index = 0; index < 8; index++) {
            music.playTone(131, music.beat(BeatFraction.Whole))
            basic.pause(200)
        }
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
})
input.onButtonPressed(Button.A, function () {
	
})
radio.setGroup(1)
pins.digitalWritePin(DigitalPin.P12, 1)
pins.digitalWritePin(DigitalPin.P2, 1)

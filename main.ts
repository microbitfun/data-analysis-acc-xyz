basic.forever(function () {
    serial.writeValue("acc-x", input.acceleration(Dimension.X))
    serial.writeValue("acc-y", input.acceleration(Dimension.Y))
    serial.writeValue("acc-z", input.acceleration(Dimension.Z))
})

let Reading = 0
kitronik_VIEW128x64.clear()
basic.forever(function () {
    Reading = input.rotation(Rotation.Roll)
    kitronik_VIEW128x64.plot(Reading)
})

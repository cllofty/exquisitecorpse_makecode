namespace SpriteKind {
    export const Arrow = SpriteKind.create()
}
function cycleLegs (direction: number) {
    currentLegIdx += direction
    if (currentLegIdx >= legList.length) {
        currentLegIdx = 0
    }
    if (currentLegIdx < 0) {
        currentLegIdx = legList.length - 1
    }
    setLegImage(currentLegIdx)
}
function enableArrow (leftSprite: Sprite, rightSprite: Sprite) {
    leftSprite.setImage(img`
        ........aaaa............
        ........ad7a............
        .......a777a............
        ......a777da............
        .....a77d77aaaaaaaaaaaaa
        ....a77d777777777777777a
        ...a7dd7777d7d77777ddd7a
        ..a77777777777777777777a
        ..a77777777777777777777a
        ...a7777777777777777777a
        ....a777777777777777777a
        .....a77777777777777777a
        ......a7777aaaaaaaaaaaaa
        .......a777a............
        ........a77a............
        ........aaaa............
        `)
    rightSprite.setImage(img`
        ............aaaa........
        ............a7da........
        ............a777a.......
        ............ad777a......
        aaaaaaaaaaaaa77d77a.....
        a777777777777777d77a....
        a7ddd77777d7d7777dd7a...
        a77777777777777777777a..
        a77777777777777777777a..
        a7777777777777777777a...
        a777777777777777777a....
        a77777777777777777a.....
        aaaaaaaaaaaaa7777a......
        ............a777a.......
        ............a77a........
        ............aaaa........
        `)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    currentCyclingPart += -1
    if (currentCyclingPart < 0) {
        currentCyclingPart = 0
    }
    selectArrow(currentCyclingPart)
})
function setLegImage (legIdx: number) {
    legSprite.setImage(legList[legIdx])
    legSprite.setPosition(80, 95)
}
function setupHeadParts () {
    headList = [img`
        .......333333333333333........
        .....3333333333333333333......
        ....333333333333333333333.....
        ...3333333333333333333333.....
        ...33333333333333333333333....
        ..33333333333333333333333333..
        ..333333333333333333333333333.
        .33333333333333333333333333333
        .33333333333333333333333333333
        333333333333333333333333333333
        333333333333333333333333333333
        333333333333333333333333333333
        333333333333333333333333333333
        333333333333333333333333333333
        333333333333333333333333333333
        333333333333333333333333333333
        333333333333333333333333333333
        333333333333333333333333333333
        333333333333333333333333333333
        333333333333333333333333333333
        333333333333333333333333333333
        333333333333333333333333333333
        333333333333333333333333333333
        .3333333333333333333333333333.
        ..333333333333333333333333333.
        ...33333333333333333333333333.
        ....333333333333333333333333..
        .....3333333333333333333333...
        .......33333333333333333......
        ..........33333333333.........
        `, img`
        .......666666666666666........
        .....6666666666666666666......
        ....666666666666666666666.....
        ...6666666666666666666666.....
        ...66666666666666666666666....
        ..66666666666666666666666666..
        ..666666666666666666666666666.
        .66666666666666666666666666666
        .66666666666666666666666666666
        666666666666666666666666666666
        666666666666666666666666666666
        666666666666666666666666666666
        666666666666666666666666666666
        666666666666666666666666666666
        666666666666666666666666666666
        666666666666666666666666666666
        666666666666666666666666666666
        666666666666666666666666666666
        666666666666666666666666666666
        666666666666666666666666666666
        666666666666666666666666666666
        666666666666666666666666666666
        666666666666666666666666666666
        .6666666666666666666666666666.
        ..666666666666666666666666666.
        ...66666666666666666666666666.
        ....666666666666666666666666..
        .....6666666666666666666666...
        .......66666666666666666......
        ..........66666666666.........
        `, assets.image`myImage`]
    currentHeadIdx = 0
    headSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    setHeadImage(currentHeadIdx)
}
function cycleBody (direction: number) {
    currentBodyIdx += direction
    if (currentBodyIdx >= bodyList.length) {
        currentBodyIdx = 0
    }
    if (currentBodyIdx < 0) {
        currentBodyIdx = bodyList.length - 1
    }
    setBodyImage(currentBodyIdx)
}
function disableArrow (leftSprite: Sprite, rightSprite: Sprite) {
    leftSprite.setImage(img`
        ........aaaa............
        ........adba............
        .......abbba............
        ......abbbda............
        .....abbdbbaaaaaaaaaaaaa
        ....abbdbbbbbbbbbbbbbbba
        ...abddbbbbdbdbbbbbdddba
        ..abbbbbbbbbbbbbbbbbbbba
        ..abbbbbbbbbbbbbbbbbbbba
        ...abbbbbbbbbbbbbbbbbbba
        ....abbbbbbbbbbbbbbbbbba
        .....abbbbbbbbbbbbbbbbba
        ......abbbbaaaaaaaaaaaaa
        .......abbba............
        ........abba............
        ........aaaa............
        `)
    rightSprite.setImage(img`
        ............aaaa........
        ............abda........
        ............abbba.......
        ............adbbba......
        aaaaaaaaaaaaabbdbba.....
        abbbbbbbbbbbbbbbdbba....
        abdddbbbbbdbdbbbbddba...
        abbbbbbbbbbbbbbbbbbbba..
        abbbbbbbbbbbbbbbbbbbba..
        abbbbbbbbbbbbbbbbbbba...
        abbbbbbbbbbbbbbbbbba....
        abbbbbbbbbbbbbbbbba.....
        aaaaaaaaaaaaabbbba......
        ............abbba.......
        ............abba........
        ............aaaa........
        `)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cyclePart(-1)
})
function cycleHeads (direction: number) {
    currentHeadIdx += direction
    if (currentHeadIdx >= headList.length) {
        currentHeadIdx = 0
    }
    if (currentHeadIdx < 0) {
        currentHeadIdx = headList.length - 1
    }
    setHeadImage(currentHeadIdx)
}
function setHeadImage (idx: number) {
    headSprite.setImage(headList[idx])
    headSprite.setPosition(80, 20)
}
function setBodyImage (bodyIdx: number) {
    bodySprite.setImage(bodyList[bodyIdx])
    bodySprite.setPosition(80, 55)
}
function setupLegParts () {
    legList = [img`
        999999999999999999999999999999
        999999999999999999999999999999
        999999999999999999999999999999
        999999999999999999999999999999
        999999999999999999999999999999
        999999999999999999999999999999
        999999999999999999999999999999
        999999999999999999999999999999
        999999999999999999999999999999
        999999999999999999999999999999
        999999999999999999999999999999
        999999999999999999999999999999
        999999999999999999999999999999
        999999999999999999999999999999
        999999999999999999999999999999
        99999999999999..99999999999999
        9999999999999....9999999999999
        999999999999.....9999999999999
        999999999999......999999999999
        999999999999......999999999999
        99999999999.......999999999999
        99999999999........99999999999
        99999999999........99999999999
        99999999999........99999999999
        99999999999........99999999999
        99999999999.........9999999999
        99999999999.........9999999999
        9999999999..........9999999999
        9999999999..........9999999999
        9999999999..........9999999999
        9999999999..........9999999999
        9999999999.........99999999999
        9999999999.........99999999999
        9999999999.........99999999999
        9999999999.........99999999999
        9999999999.........99999999999
        9999999999.........99999999999
        9999999999..........9999999999
        9999999999..........9999999999
        9999999999..........9999999999
        `, img`
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaa..aaaaaaaaaaaaaa
        aaaaaaaaaaaaa....aaaaaaaaaaaaa
        aaaaaaaaaaaa.....aaaaaaaaaaaaa
        aaaaaaaaaaaa......aaaaaaaaaaaa
        aaaaaaaaaaaa......aaaaaaaaaaaa
        aaaaaaaaaaa.......aaaaaaaaaaaa
        aaaaaaaaaaa........aaaaaaaaaaa
        aaaaaaaaaaa........aaaaaaaaaaa
        aaaaaaaaaaa........aaaaaaaaaaa
        aaaaaaaaaaa........aaaaaaaaaaa
        aaaaaaaaaaa.........aaaaaaaaaa
        aaaaaaaaaaa.........aaaaaaaaaa
        aaaaaaaaaa..........aaaaaaaaaa
        aaaaaaaaaa..........aaaaaaaaaa
        aaaaaaaaaa..........aaaaaaaaaa
        aaaaaaaaaa..........aaaaaaaaaa
        aaaaaaaaaa.........aaaaaaaaaaa
        aaaaaaaaaa.........aaaaaaaaaaa
        aaaaaaaaaa.........aaaaaaaaaaa
        aaaaaaaaaa.........aaaaaaaaaaa
        aaaaaaaaaa.........aaaaaaaaaaa
        aaaaaaaaaa.........aaaaaaaaaaa
        aaaaaaaaaa..........aaaaaaaaaa
        aaaaaaaaaa..........aaaaaaaaaa
        aaaaaaaaaa..........aaaaaaaaaa
        `, img`
        888888888888888888888888888888
        888888888888888888888888888888
        888888888888888888888888888888
        888888888888888888888888888888
        888888888888888888888888888888
        888888888888888888888888888888
        888888888888888888888888888888
        888888888888888888888888888888
        888888888888888888888888888888
        888888888888888888888888888888
        888888888888888888888888888888
        888888888888888888888888888888
        888888888888888888888888888888
        888888888888888888888888888888
        888888888888888888888888888888
        88888888888888..88888888888888
        8888888888888....8888888888888
        888888888888.....8888888888888
        888888888888......888888888888
        8888eee88888......888888888888
        ....eee...........888888888888
        ....eee............88888888888
        ....eee............88888888888
        ....eee............88888888888
        ....eee............88888888888
        ....eee.............8888888888
        ....eee.............8888888888
        ....eee.............8888888888
        ....eee.............8888888888
        ....eee.............8888888888
        ....eee.............8888888888
        ...eeeee...........88888888888
        ...eeeee...........88888888888
        ...eeeee...........88888888888
        ...eeeee...........88888888888
        ...eeeee...........88888888888
        ...................88888888888
        ....................8888888888
        ....................8888888888
        ....................8888888888
        `]
    currentLegIdx = 0
    legSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    setLegImage(currentLegIdx)
}
function cyclePart (direction: number) {
    if (currentCyclingPart == 0) {
        cycleHeads(direction)
    } else if (currentCyclingPart == 1) {
        cycleBody(direction)
    } else {
        cycleLegs(direction)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cyclePart(1)
})
function selectArrow (idx: number) {
    disableArrow(leftHeadArrow, rightHeadArrow)
    disableArrow(leftBodyArrow, rightBodyArrow)
    disableArrow(leftLegArrow, rightLegArrow)
    if (idx == 0) {
        enableArrow(leftHeadArrow, rightHeadArrow)
    } else if (idx == 1) {
        enableArrow(leftBodyArrow, rightBodyArrow)
    } else {
        enableArrow(leftLegArrow, rightLegArrow)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    currentCyclingPart += 1
    if (currentCyclingPart > 2) {
        currentCyclingPart = 2
    }
    selectArrow(currentCyclingPart)
})
function setupBodyParts () {
    bodyList = [img`
        ....................444444444444..................
        ....................444444444444..................
        ...................44444444444444.................
        ...................444444444444444................
        .................444444444444444444...............
        ............444444444444444444444444..............
        ..........444444444444444444444444444.............
        .......4444444444444444444444444444444............
        ....44444444444444444444444444444444444...........
        ..4444444444444444444444444444444444444...........
        44444444444444444444444444444444444444444.........
        44444444444444444444444444444444444444444.........
        444444444444444444444444444444444444444444........
        4444444444444444444444444444444444444444444.......
        44444444444444444444444444444444444444444444......
        444444444444444444444444444444444444444444444.....
        4444444444444444444444444444444444444444444444....
        44444444444444444444444444444444444444444444444...
        44444444444444444444444444444444444444444444444...
        444444444444444444444444444444444444444444444444..
        ..4444444444.444444444444444444444444.4444444444..
        ..444444444..44444444444444444444444...4444444444.
        .444444444....4444444444444444444444.....44444444.
        .444444444....4444444444444444444444......4444444.
        .44444444.....4444444444444444444444.......444444.
        .4444444......4444444444444444444444..............
        .444444........444444444444444444444..............
        .4444..........444444444444444444444..............
        ...............444444444444444444444..............
        ................44444444444444444444..............
        ...............444444444444444444444..............
        ..............4444444444444444444444..............
        .............444444444444444444444444.............
        .............444444444444444444444444.............
        .............4444444444444444444444444............
        ............444444444444444444444444444...........
        ...........4444444444444444444444444444...........
        ...........4444444444444444444444444444...........
        ...........4444444444444444444444444444...........
        ..........444444444444444444444444444444..........
        `, img`
        ....................999999999999..................
        ....................999999999999..................
        ...................99999999999999.................
        ...................999999999999999................
        .................999999999999999999...............
        .............99999999999999999999999..............
        .............999999999999999999999999.............
        .bbbbbbbbbb..9999999999999999999999999............
        .bbbbbbbbbbbb99999999999999999999999999...........
        .bbbbbbbbbbbb99999999999999999999999999...........
        .bbbb...bbbbb9999999999999999999999999999.........
        .bbbb........9999999999999999999999999999.........
        .bbbb........99999999999999999999999999999........
        .bbbb........999999999999999999999999999999.......
        ..bbb........9999999999999999999999999999999......
        ..bbb........99999999999999999999999999999999.....
        ..bbb........999999999999999999999999999999999....
        ..bbb........9999999999999999999999999999999999...
        ..bbb........9999999999999999999999999999999999...
        ..bbb........99999999999999999999999999999999999..
        ..bbb........999999999999999999999999.9999999999..
        ..bbbb.......99999999999999999999999...9999999999.
        ..bbbb........9999999999999999999999.....99999999.
        ..bbbbb.......9999999999999999999999......9999999.
        ..bbbbb.......9999999999999999999999.......999999.
        .bbbbbbbb.....9999999999999999999999..............
        .bbbbbbbbbb....999999999999999999999..............
        bbbbbbbbbbbb...999999999999999999999..............
        bbbb..bbbbbb...999999999999999999999..............
        bbbb....bbbb....99999999999999999999..............
        bbb.....bbbb...999999999999999999999..............
        bbb.....bbbb..9999999999999999999999..............
        bbb..........999999999999999999999999.............
        .............999999999999999999999999.............
        .............9999999999999999999999999............
        ............999999999999999999999999999...........
        ...........9999999999999999999999999999...........
        ...........9999999999999999999999999999...........
        ...........9999999999999999999999999999...........
        ..........999999999999999999999999999999..........
        `, assets.image`myImage0`]
    currentBodyIdx = 0
    bodySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    setBodyImage(currentBodyIdx)
}
function positionArrows (leftSprite: Sprite, lx: number, ly: number, rightSprite: Sprite, rx: number, ry: number) {
    leftSprite.setPosition(lx, ly)
    rightSprite.setPosition(rx, ry)
}
function initArrows () {
    leftHeadArrow = sprites.create(img`
        ........aaaa............
        ........adba............
        .......abbba............
        ......abbbda............
        .....abbdbbaaaaaaaaaaaaa
        ....abbdbbbbbbbbbbbbbbba
        ...abddbbbbdbdbbbbbdddba
        ..abbbbbbbbbbbbbbbbbbbba
        ..abbbbbbbbbbbbbbbbbbbba
        ...abbbbbbbbbbbbbbbbbbba
        ....abbbbbbbbbbbbbbbbbba
        .....abbbbbbbbbbbbbbbbba
        ......abbbbaaaaaaaaaaaaa
        .......abbba............
        ........abba............
        ........aaaa............
        `, SpriteKind.Arrow)
    rightHeadArrow = sprites.create(img`
        ............aaaa........
        ............abda........
        ............abbba.......
        ............adbbba......
        aaaaaaaaaaaaabbdbba.....
        abbbbbbbbbbbbbbbdbba....
        abdddbbbbbdbdbbbbddba...
        abbbbbbbbbbbbbbbbbbbba..
        abbbbbbbbbbbbbbbbbbbba..
        abbbbbbbbbbbbbbbbbbba...
        abbbbbbbbbbbbbbbbbba....
        abbbbbbbbbbbbbbbbba.....
        aaaaaaaaaaaaabbbba......
        ............abbba.......
        ............abba........
        ............aaaa........
        `, SpriteKind.Arrow)
    positionArrows(leftHeadArrow, 30, 20, rightHeadArrow, 130, 20)
    leftBodyArrow = sprites.create(img`
        ........aaaa............
        ........adba............
        .......abbba............
        ......abbbda............
        .....abbdbbaaaaaaaaaaaaa
        ....abbdbbbbbbbbbbbbbbba
        ...abddbbbbdbdbbbbbdddba
        ..abbbbbbbbbbbbbbbbbbbba
        ..abbbbbbbbbbbbbbbbbbbba
        ...abbbbbbbbbbbbbbbbbbba
        ....abbbbbbbbbbbbbbbbbba
        .....abbbbbbbbbbbbbbbbba
        ......abbbbaaaaaaaaaaaaa
        .......abbba............
        ........abba............
        ........aaaa............
        `, SpriteKind.Arrow)
    rightBodyArrow = sprites.create(img`
        ............aaaa........
        ............abda........
        ............abbba.......
        ............adbbba......
        aaaaaaaaaaaaabbdbba.....
        abbbbbbbbbbbbbbbdbba....
        abdddbbbbbdbdbbbbddba...
        abbbbbbbbbbbbbbbbbbbba..
        abbbbbbbbbbbbbbbbbbbba..
        abbbbbbbbbbbbbbbbbbba...
        abbbbbbbbbbbbbbbbbba....
        abbbbbbbbbbbbbbbbba.....
        aaaaaaaaaaaaabbbba......
        ............abbba.......
        ............abba........
        ............aaaa........
        `, SpriteKind.Arrow)
    positionArrows(leftBodyArrow, 30, 60, rightBodyArrow, 130, 60)
    leftLegArrow = sprites.create(img`
        ........aaaa............
        ........adba............
        .......abbba............
        ......abbbda............
        .....abbdbbaaaaaaaaaaaaa
        ....abbdbbbbbbbbbbbbbbba
        ...abddbbbbdbdbbbbbdddba
        ..abbbbbbbbbbbbbbbbbbbba
        ..abbbbbbbbbbbbbbbbbbbba
        ...abbbbbbbbbbbbbbbbbbba
        ....abbbbbbbbbbbbbbbbbba
        .....abbbbbbbbbbbbbbbbba
        ......abbbbaaaaaaaaaaaaa
        .......abbba............
        ........abba............
        ........aaaa............
        `, SpriteKind.Arrow)
    rightLegArrow = sprites.create(img`
        ............aaaa........
        ............abda........
        ............abbba.......
        ............adbbba......
        aaaaaaaaaaaaabbdbba.....
        abbbbbbbbbbbbbbbdbba....
        abdddbbbbbdbdbbbbddba...
        abbbbbbbbbbbbbbbbbbbba..
        abbbbbbbbbbbbbbbbbbbba..
        abbbbbbbbbbbbbbbbbbba...
        abbbbbbbbbbbbbbbbbba....
        abbbbbbbbbbbbbbbbba.....
        aaaaaaaaaaaaabbbba......
        ............abbba.......
        ............abba........
        ............aaaa........
        `, SpriteKind.Arrow)
    positionArrows(leftLegArrow, 30, 100, rightLegArrow, 130, 100)
}
let rightLegArrow: Sprite = null
let leftLegArrow: Sprite = null
let rightBodyArrow: Sprite = null
let leftBodyArrow: Sprite = null
let rightHeadArrow: Sprite = null
let leftHeadArrow: Sprite = null
let bodySprite: Sprite = null
let bodyList: Image[] = []
let currentBodyIdx = 0
let headSprite: Sprite = null
let currentHeadIdx = 0
let headList: Image[] = []
let legSprite: Sprite = null
let legList: Image[] = []
let currentLegIdx = 0
let currentCyclingPart = 0
currentCyclingPart = 0
setupHeadParts()
setupBodyParts()
setupLegParts()
initArrows()
selectArrow(currentCyclingPart)

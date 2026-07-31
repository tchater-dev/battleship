namespace SpriteKind {
    export const Friendly = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(0, 0)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 
    2 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 2 
    2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 
    `, SpriteKind.Player)
let Landing_craft = sprites.create(assets.image`Light Cruiser`, SpriteKind.Friendly)
grid.moveWithButtons(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)

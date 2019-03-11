abstract class Shape {
    
    x: number
    y: number
    size: number
    
    constructor(x: number, y: number, size: number) {
        this.x = x
        this.y = y
        this.size = size
    }

    abstract draw(canvas: HTMLCanvasElement) : void

}

export class Rectangle extends Shape {

    width: number
    height: number

    constructor(x: number, y: number, width: number, height: number) {
        super(x,y,1)
        this.width = width
        this.height = height
    }

    draw(canvas: HTMLCanvasElement) {

        let context = canvas.getContext("2d")
        context.rect(this.x,this.y,this.width, this.height)
        context.stroke()

    }

}
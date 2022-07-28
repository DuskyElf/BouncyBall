const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

class Circle {
    constructor(x, y, radius, color, velocity){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    
    update() {
        this.x += this.velocity.x
        this.y += this.velocity.y

        if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width)
            this.velocity.x = -this.velocity.x
        if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height)
            this.velocity.y = -this.velocity.y
        
        this.draw()
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true)
        ctx.fill()
    }
}

const circle = new Circle(
    canvas.width / 2,
    canvas.height / 2,
    50, 'white',
    {
        x: 7,
        y: 7
    }
)

function animate() {
    ctx.fillStyle = "rgba(24, 24, 24, 0.6)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    circle.update()

    requestAnimationFrame(animate)
}

canvas.width = window.innerWidth
canvas.height = window.innerHeight

requestAnimationFrame(animate)

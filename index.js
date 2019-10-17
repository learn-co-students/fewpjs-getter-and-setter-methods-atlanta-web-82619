// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;}
    get diameter(){
        return this.radius *2
    }
    get circumference(){
        return (2 * Math.PI * (this.radius))
    }
    get area(){
        return 2*Math.PI * (this.radius**2)
    }
    set diameter(nd){
        this.radius = nd/2
    }
    set circumference(nc){
        this.radius = nc/(2*Math.PI)
    }

    set area(a){
        var b = (a / Math.PI)
        this.radius = Math.sqrt(b)
    }
    // set area( area ) {
    //     this.radius = Math.sqrt( area / pi )}

}
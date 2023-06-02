namespace Canvas{

    export class Vektor{

        x:number;
        y:number;
    
        constructor(_x:number, _y:number){
            this.x = x;
            this.y = y;
        }
    
        add(vector: Vektor): Vektor {
            return new Vektor(this.x + vector.x, this.y + vector.y);
          }
      
          multiply(scalar: number): Vektor {
            return new Vektor(this.x * scalar, this.y * scalar);
          }
        }

}
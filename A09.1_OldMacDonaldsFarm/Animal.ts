namespace OMDF {
    export class Animal {
        name: string;
        sound: string;
        foodType: string;
        foodAmount: number;


        constructor(_name: string, _sound: string, _foodType: string, _foodAmount: number) {
            this.name = _name;
            this.sound = _sound;
            this.foodType = _foodType;
            this.foodAmount = _foodAmount;
        }

        drawChicken() {
            crc2.fillStyle = "#ffffff";
            crc2.fillRect(645, 250, 60, 50);
            crc2.fillStyle = "#ffffff";
            crc2.fillRect(637, 195, 75, 70);
            crc2.fillStyle = "black";
            crc2.fillRect(650, 215, 10, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(653, 218, 4, 4);
            crc2.fillStyle = "black";
            crc2.fillRect(685, 215, 10, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(688, 218, 4, 4);
            crc2.fillStyle = "#d6b245";
            crc2.beginPath();
            crc2.moveTo(660, 240);
            crc2.lineTo(688, 240);
            crc2.lineTo(673, 260);
            crc2.fill();
            crc2.fillStyle = "#dbc991";
            crc2.fillRect(668, 165, 10, 30);
        }

        drawCow(): void {
            crc2.fillStyle = "#e3dfdc";
            crc2.fillRect(250, 250, 50, 50);
            crc2.fillStyle = "#f0ece9";
            crc2.fillRect(240, 195, 70, 70);
            crc2.fillStyle = "black";
            crc2.fillRect(250, 215, 10, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(253, 218, 4, 4);
            crc2.fillStyle = "black";
            crc2.fillRect(285, 215, 10, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(288, 218, 4, 4);
            crc2.beginPath();
            crc2.ellipse(273, 245, 15, 10, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#e3dfdc";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.ellipse(267, 245, 4, 4, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#ababab";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.ellipse(280, 245, 4, 4, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#ababab";
            crc2.fill();
            crc2.closePath();
            crc2.fillStyle = "#f0ece9";
            crc2.beginPath();
            crc2.moveTo(260, 175);
            crc2.lineTo(225, 195);
            crc2.lineTo(260, 195);
            crc2.fill();
            crc2.fillStyle = "#f0ece9";
            crc2.beginPath();
            crc2.moveTo(290, 175);
            crc2.lineTo(330, 195);
            crc2.lineTo(290, 195);
            crc2.fill();
        }

        drawDog(): void {


            crc2.fillStyle = "#858585";
            crc2.fillRect(50, 250, 50, 50);
            crc2.fillStyle = "#858585";
            crc2.fillRect(40, 195, 70, 70);
            crc2.fillStyle = "black";
            crc2.fillRect(50, 215, 14, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(53, 218, 4, 4);
            crc2.fillStyle = "black";
            crc2.fillRect(85, 215, 14, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(88, 218, 4, 4);
            crc2.fillStyle = "black";
            crc2.fillRect(68, 238, 10, 5);
            crc2.fillStyle = "#858585";
            crc2.fillRect(25, 188, 25, 15);
            crc2.fillStyle = "#858585";
            crc2.fillRect(100, 188, 25, 15);
        }

        drawDonkey(): void {
            crc2.fillStyle = "#8a8a8a";
            crc2.fillRect(847, 250, 55, 50);
            crc2.fillStyle = "#9c9b9a";
            crc2.fillRect(837, 195, 75, 70);
            crc2.fillStyle = "black";
            crc2.fillRect(850, 215, 12, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(853, 218, 4, 4);
            crc2.fillStyle = "black";
            crc2.fillRect(885, 215, 12, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(888, 218, 4, 4);
            crc2.beginPath();
            crc2.ellipse(873, 248, 12, 12, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#8a8a8a";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.ellipse(867, 248, 3, 3, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#9c9b9a";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.ellipse(878, 248, 3, 3, 0, 0, Math.PI * 2);
            crc2.fillStyle = "#9c9b9a";
            crc2.fill();
            crc2.closePath();
            crc2.fillStyle = "#9c9b9a";
            crc2.beginPath();
            crc2.moveTo(830, 160);
            crc2.lineTo(837, 195);
            crc2.lineTo(860, 195);
            crc2.fill();
            crc2.fillStyle = "#9c9b9a";
            crc2.beginPath();
            crc2.moveTo(920, 160);
            crc2.lineTo(912, 195);
            crc2.lineTo(890, 195);
            crc2.fill();
        }

        drawPig(): void {
            crc2.fillStyle = "#e8bebe";
            crc2.fillRect(445, 250, 60, 50);
            crc2.fillStyle = "#e8bebe";
            crc2.fillRect(437, 195, 75, 70);
            crc2.fillStyle = "black";
            crc2.fillRect(445, 215, 18, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(447, 218, 4, 4);
            crc2.fillStyle = "black";
            crc2.fillRect(485, 215, 18, 20);
            crc2.fillStyle = "white";
            crc2.fillRect(488, 218, 4, 4);
            crc2.fillStyle = "#f5cece";
            crc2.fillRect(462, 238, 20, 20);
            crc2.fillStyle = "#e3b1b1";
            crc2.fillRect(466, 242, 4, 11);
            crc2.fillStyle = "#e3b1b1";
            crc2.fillRect(476, 242, 4, 11);
            crc2.fillStyle = "#e8bebe";
            crc2.beginPath();
            crc2.moveTo(460, 175);
            crc2.lineTo(430, 195);
            crc2.lineTo(460, 195);
            crc2.fill();
            crc2.fillStyle = "#e8bebe";
            crc2.beginPath();
            crc2.moveTo(490, 175);
            crc2.lineTo(518, 195);
            crc2.lineTo(490, 195);
            crc2.fill();

        }

        sing(): void {
            const heading = document.createElement("h3");
            heading.textContent = this.name + ":";
            document.body.appendChild(heading);

            const text = document.createElement("p");
            text.textContent = "Old MacDonald had a farm, and on his farm he had a " + this.name + ", Ee i ee i o!";
            document.body.appendChild(text);
        }

        eat(): void {
            const eatText = document.createElement("p");
            eatText.textContent = this.name + " is eating " + this.foodType + ".";
            document.body.appendChild(eatText);

            if (this.foodAmount > 0) {
                const remainingText = document.createElement("p");
                remainingText.textContent = "Remaining " + this.foodType + ": " + this.foodAmount;
                document.body.appendChild(remainingText);
            } else {
                const noFoodText = document.createElement("p");
                noFoodText.textContent = "No more " + this.foodType + " left!";
                document.body.appendChild(noFoodText);
            }
        }
    }

    class Farm {
        animals: Animal[];

        constructor() {
            this.animals = [];
        }

        addAnimal(animal: Animal): void {
            this.animals.push(animal);
        }

        simulateDay(): void {
            for (const animal of this.animals) {
                animal.sing();
                animal.eat();
            }
        }
    }

    // Create animals
    const cow = new Animal("Cow", "Moo", "Grass", 10);
    const chicken = new Animal("Chicken", "Gack", "Grains", 5);
    const dog = new Animal("Dog", "Woof", "Meat", 3);

    // Create farm and add animals
    const farm = new Farm();
    farm.addAnimal(cow);
    farm.addAnimal(chicken);
    farm.addAnimal(dog);

    // Simulate a day on the farm
    farm.simulateDay();
}
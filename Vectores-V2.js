class Vector {
    constructor() {
        this.array;
    }

    llenar(array) {
        this.array = array;
        for (let i = 0; i <= 9; i++) {
            array[i] = (i + 1);
        }
        for (let p = 0; p <= array.length; p++) {
            if ((array[p] % 2) != 0) {
                array.splice(p, 1);
            }
        }
    }

    mostrar() {
        return (this.array);
    }

    girarDerecha() {
        let numF = this.array[(this.array.length - 1)];
        this.array.splice(0, 0, numF);
        this.array.splice((this.array.length - 1), 1);
        return (this.array);
    }

    girarIzquierda() {
        let numI = this.array[0];
        this.array.splice(this.array.length, 0, numI);
        this.array.splice(0, 1);
        return (this.array);
    }

    invertir() {
        for (let i = 0; i <= this.array.length; i++) {
            let numF = this.array[(this.array.length - 1)];
            this.array.splice(i, 0, numF);
            this.array.splice((this.array.length - 1), 1);
        }
        return (this.array);
    }
}

let vector = new Vector;
vector.llenar(new Array);
console.log(`Los numeros pares son: ${vector.mostrar()}`);
console.log(`Numeros hacia a la derecha: ${vector.girarDerecha()}`);
console.log(`Numeros hacia a la izquierda: ${vector.girarIzquierda()}`);
console.log(`Numeros invertidos ${vector.invertir()}`);

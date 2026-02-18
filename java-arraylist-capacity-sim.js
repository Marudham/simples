/*
just a simple logic to simulate Java ArrayList capacity growth.
For a given number of elements, this calculates how many times
the internal array needs to resize based on the default 1.5x growth strategy.
*/

class ArrayListCap {
    n = 0;
    constructor(n) {
        this.n = n;
    }

    printGrowth() {
        let initialArrayCap = 10;
        let itCount = 0;
        console.log("start");
        do {
            console.log(initialArrayCap);
            initialArrayCap = Math.floor(initialArrayCap * 1.5);
            itCount++;
        } while (initialArrayCap < this.n);
        console.log(initialArrayCap);
        console.log("total iteration count:" + itCount);
        console.log("end");
        console.log("----");
    }
}

function printArrayCap() {
    const userInput = parseInt(prompt("Enter Total No. of Elements in ArrayList: "));
    // anon
    new ArrayListCap(userInput).printGrowth();
}

printArrayCap();

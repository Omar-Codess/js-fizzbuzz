const row = document.querySelector(".row");
// Stampa numeri da 1 a 100
for (let i = 1; i <= 100; i++){
    console.log(i);

    let multiplo = i;

    // SE il numero stampato è multiplo di 3 E di 5
        // scrivi FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        multiplo = "FizzBuzz";
        console.log(multiplo);
    }

    // SE il numero stampato è multiplo di 3
        // scrivi Fizz
    else if (i % 3 === 0) {
        multiplo = "Fizz";
        console.log(multiplo);
    }   

    // SE il numero stampato è multiplo di 5
        // scrivi Buzz
    else if (i % 5 === 0) {
        multiplo = "Buzz";
        console.log(multiplo);
    }

    // Scrivo output
    
}


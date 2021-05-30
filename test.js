var fruits = ["Banana", "Orange", "Apple", "Mango"];

for (let i = 0; i < 10; i++) {
    fruits.sort((a, b) => {
        let result = Math.random() - 0.5;
        console.log(a, b, result)
        return result
    });
    console.log(fruits)
}
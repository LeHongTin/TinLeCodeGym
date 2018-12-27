var adam = new Human("Adam", "Male", 60);
var eva = new Human("Eva", "Female", 50)
var apple = new Apple();

while (!apple.isEmpty()) {
    adam.eat(apple);
    eva.eat(apple);
}

console.log("ADAM WEIGHT: ", adam.getWeight());
console.log("EVA WEIGHT: ", eva.getWeight());
console.log("APPLE WEIGHT: ", apple.getWeight());

document.write("ADAM WEIGHT: ", adam.getWeight() + "<br>");
document.write("EVA WEIGHT: ", eva.getWeight() + "<br>");
document.write("APPLE WEIGHT: ", apple.getWeight());
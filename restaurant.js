var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree ;
    this.citrusFree = citrusFree;
}

FoodItem.prototype.toString = function() {
    if (!this.vegan) {
        var veganFormat = "Vegan: no";
    }
    if (!this.glutenFree) {
        var glutenFreeFormat = "Gluten Free: no";
    }
    if (!this.citrusFree) {
        var citrusFreeFormat = "Citrus Free: no";
    }

    return this.name + " has " +  
        this.calories + " calories - Dietary Informat: " + 
        veganFormat + ", " + 
        glutenFreeFormat + ", " + 
        citrusFreeFormat; 
}

// It should return a string description of the food including its name, 
// calories, and dietary information, formatted as you choose. 
// toString should not have any side effects.

var cookies = new FoodItem("cookies", 100, false, false, false);
// original toString method
console.log(cookies.toString());
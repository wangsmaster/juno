// imports

// class Clothes
// the model for clothes recommendations

class Clothes {
    // //constructor
    constructor() {}

    // methods

    // clothes recomendation
    // input: weatherObj (from lookup)
    // output: js object with all the clothes recommended
    clothesRecommended(weatherObj) {
        // console.log("clothesRecommended is executed"); // TBD
        // alert(lookup);
        // console.log(this.lookup.fifteen_non_rain.accs1);

        // get parent div
        const parent = document.querySelector(".recomms");

        // test - display message
        // let message = document.createElement("div");
        // message.textContent = this.lookup.minus10C_any.accs1;

        // test
        console.log("weatherObj is printed in the next line:")
        console.log(this.lookup[weatherObj]);

        // loop through an object with pre-determined weather
        // create a 'div' to contain each property;
        // attach the div to the parent 'div'
        for (const property in this.lookup[weatherObj]) {
            let div = document.createElement("div");
            // div.style.backgroundColor = "orange";
            div.classList.add("clothes");

            let img_description = document.createElement("p");
            img_description.textContent =  this.lookup[weatherObj][property];
            div.append(img_description);

            let img = document.createElement("img");
            img.classList.add("clothes_img");
            img.src = "/img/clothes/" + this.lookup[weatherObj][property] +".svg"
            img.alt = this.lookup[weatherObj][property];
            div.append(img);

            parent.append(div);
        }
    }

    // take temp and weather from weatherAPI, and return the corresponding weather object from lookup object;
    // input: temp, weather (from weathe API);
    // output: weatherObj (from this.lookup object);
    selectWeatherObj(temp, weatherID) {
        let temperature, weather;
        // pass a string of temperature to 'temp'; use switch statement
        if (temp <= -10) temperature = "minus10C";
        else if (temp > -10 && temp <= -5) temperature = "minus10C";
        else if (temp > -5 && temp <= 0) temperature = "minus5C";
        else if (temp > 0 && temp <= 5) temperature = "zero";
        else if (temp > 5 && temp <= 10) temperature = "five";
        else if (temp > 10 && temp <= 15) temperature = "ten";
        else if (temp > 15 && temp <= 20) temperature = "ten";
        else if (temp > 20) temperature = "twenty";

        // pass a string of weather to 'weather'; use weatherID
        if (weatherID >= 800) weather = "non_rain";
        else weather = "rain";

        let weatherObj = temperature + "_" + weather;
        console.log("the type of weatherObj is " + typeof weatherObj);
        return weatherObj;
    }

    displayWeather(temp, weatherID) {
        console.log("function displayWeather() is executed")
        let weatherObj = this.selectWeatherObj(temp, weatherID);   // test mode
        console.log("weatherObj is: " + weatherObj);
        this.clothesRecommended(weatherObj);
    }


    // static look up table, a 2-D array to store the weather-clothes info
    // Inside braces, there is a list of properties separated by commas. Each property has a name followed by a colon and a value. - Eloquent Javascript
    lookup = {
        minus10C_non_rain: {
            top1: "tank top",
            top2: "long sleeve *thermal*",
            top3: "sweater / hoodie *thermal*",
            top4: "down parka",
            bottom1: "leggings *thermal*",
            bottom3: "snow pants",
            shoe1: "snow boots",
            accs1: "scarf",
            accs2: "gloves",
            accs3: "beanie *thermal*",
        }, 
        minus5C_non_rain: {
            top1: "tank top",
            top2: "long sleeve *thermal*",
            top4: "down parka",
            bottom1: "leggings *thermal*",
            bottom3: "snow pants",
            shoe1: "snow boots",
            accs1: "scarf",
            accs2: "gloves",
            accs3: "beanie *thermal*",
        },
        zero_non_rain: {
            top1: "tank top",
            top2: "long sleeve",
            top4: "down parka",
            bottom1: "leggings",
            bottom2: "sweatpants",
            shoe1: "leather sneaker",
            accs1: "scarf",
            accs2: "beanie",
        },
        zero_rain: {
            top1: "tank top",
            top2: "long sleeve",
            top3: "down parka",
            top4: "muddy buddy",
            bottom1: "legging",
            bottom2: "sweatpants",
            shoe1: "leather sneaker",
            shoe2: "rain boots",
            accs1: "scarf",
            accs2: "beanie",
            accs3: "umbrella",
        },
        five_non_rain: {
            top1: "long sleeve",
            top2: "fleece",
            top3: "trench coat *thermal*",
            bottom1: "legging",
            bottom2: "sweatpants",
            shoe1: "leather sneaker",
            accs1: "beanie",
        },
        five_rain: {
            top1: "long sleeve",
            top2: "fleece",
            top3: "trench coat *thermal*",
            bottom1: "legging",
            bottom2: "sweatpants",
            shoe1: "leather sneaker",
            shoe2: "rain boots",
            accs1: "beanie",
            accs2: "umbrella",
        },
        ten_non_rain: {
            top1: "tee",
            top2: "hoodie",
            top3: "windbuster",
            bottom1: "pants",
            shoe1: "sneaker",
            accs1: "bucket hat",
        },
        ten_rain: {
            top1: "tee",
            top2: "hoodie",
            top3: "raincoat",
            bottom1: "pants",
            shoe1: "sneaker",
            accs1: "bucket hat",
            accs2: "umbrella",
        },
        fifteen_non_rain: {
            top1: "tee",
            top2: "windbuster",
            bottom1: "pants",
            shoe1: "sandals",
            accs1: "sunglasses",
            accs2: "bucket hat",
            accs3: "sunscreen",
        },
        fifteen_rain: {
            top1: "tee",
            top2: "raincoat",
            bottom1: "pants",
            shoe1: "sandals",
            shoe2: "rain boots",
            accs1: "umbrella",
        },
        twenty_non_rain: {
            top1: "tee",
            top2: "sun jacket",
            bottom1: "capris",
            shoe1: "sandals",
            accs1: "sunglasses",
            accs2: "sun hat",
            accs3: "sunscreen",
        },
        twenty_rain: {
            top1: "tee",
            top2: "sun jacket",
            bottom1: "capris",
            shoe1: "sandals",
            shoe2: "rain boots",
            accs1: "umbrella",
        },
        twenty_five_non_rain: {
            top1: "tank top",
            top2: "sun jacket",
            bottom1: "shorts",
            shoe1: "sandals",
            accs1: "sunglasses",
            accs2: "sun hat",
            accs3: "sunscreen",
        },
        twenty_five_rain: {
            top1: "tank top",
            top2: "sun jacket",
            bottom1: "shorts",
            shoe1: "sandals",
            shoe2: "rain boots",
            accs1: "umbrella",
        },

        // template format
        // temp_weather1: {
                // topLayer1: top type1,
                // topLayer2: top type2,
                // bottomLayer1: bottom type1,
                // bottomLayer2: bottome type2,
                // shoes: shoes type1,
                // accessories1: accessory type1,
                // accessories2: accossory type2,
         //}，
        // temp_weather2: {...},
        // temp_weather3: {...},

    }; 

    /* pseudo code:
    1. class have function to take the required input from weather;
    2. Clothes has a static look up table which store the clothes;
    3.  
    */
    
}

export {Clothes};
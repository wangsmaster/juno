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
        console.log(this.lookup[weatherObj]);

        // loop through an object with pre-determined weather
        // create a 'div' to contain each property;
        // attach the div to the parent 'div'
        for (const property in this.lookup[weatherObj]) {
            let div = document.createElement("div");
            // div.style.backgroundColor = "orange";
            div.classList.add("clothes");

            let img_description = document.createElement("p");
            img_description.textContent = property + ": " + this.lookup[weatherObj][property];
            div.append(img_description);

            let img = document.createElement("img");
            img.classList.add("clothes_img");
            img.src = "/img/clothes/tank top.svg"
            img.alt = property + ": " + this.lookup[weatherObj][property];
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
    lookup = {
        minus10C_non_rain: {
            top: "tank top",
            top: "warm long sleeves",
            top: "sweater hoodie",
            top: "down parka",
            bottom: "cotton leggings",
            bottom: "knit pants",
            bottom: "snow pants",
            shoe: "snow boots",
            accs: "scarf",
            accs: "gloves",
            accs: "wool beanie",
        }, 
        minus10C_rain: {
            top: "tank top",
            top: "warm long sleeves",
            top: "sweater hoodie",
            top: "down parka",
            bottom: "cotton leggings",
            bottom: "knit pants",
            bottom: "snow pants",
            shoe: "snow boots",
            accs: "scarf",
            accs: "gloves",
            accs: "wool beanie",
        },
        minus5C_non_rain: {
            top: "tank top",
            top: "warm long sleeves",
            top: "sweater hoodie",
            top: "down parka",
            bottom: "cotton leggings",
            bottom: "knit pants",
            bottom: "snow pants",
            shoe: "snow boots",
            accs: "scarf",
            accs: "gloves",
            accs: "wool beanie",
        },
        minus5C_rain: {
            top: "tank top",
            top: "warm long sleeves",
            top: "sweater hoodie",
            top: "down parka",
            bottom: "cotton leggings",
            bottom: "knit pants",
            bottom: "snow pants",
            shoe: "snow boots",
            accs: "scarf",
            accs: "gloves",
            accs: "wool beanie",
        },
        zero_non_rain: {
            top: "tank top",
            top: "warm long sleeves",
            top: "hoodie",
            top: "warm coat",
            bottom: "cotton leggings",
            bottom: "sweatpants",
            shoe: "sneakers",
            accs: "scarf",
            accs: "beanie",
        },
        zero_rain: {
            top: "tank top",
            top: "warm long sleeves",
            top: "hoodie",
            top: "warm raincoat",
            bottom: "cotton leggings",
            bottom: "sweatpants",
            shoe: "sneakers",
            shoe: "rain boots",
            accs: "scarf",
            accs: "beanie",
            accs: "umbrella",
        },
        five_non_rain: {
            top: "long sleeve shirt or dress",
            top: "hoodie or fleece, thick",
            top: "wind jacket thick",
            bottom: "cotton legging, thick",
            bottom: "sweatpants",
            shoe: "sneakers",
            accs: "knit hat",
        },
        five_rain: {
            top: "long sleeve shirt or dress",
            top: "hoodie or fleece, thick",
            top: "wind jacket thick",
            bottom: "cotton legging, thick",
            bottom: "sweatpants",
            shoe: "sneakers",
            shoe: "rain boots",
            accs: "knit hat",
            accs: "umbrella",
        },
        ten_non_rain: {
            top: "t-shirt",
            top: "hoodie",
            top: "wind jacket, light",
            bottom: "pants or jeans",
            shoe: "sneakers",
            accs: "bucket hat",

        },
        ten_rain: {
            top: "t-shirt",
            top: "hoodie",
            top: "rain jacket, light",
            bottom: "pants or jeans",
            shoe: "sneakers",
            accs: "bucket hat",
        },
        fifteen_non_rain: {
            top: "tee",
            top: "jacket, light",
            bottom: "pants or capris",
            shoe: "sneakers",
            accs: "sunglasses",
            accs: "sun hat",
            accs: "sunscreen",
        },
        fifteen_rain: {
            top: "tee",
            top: "jacket, light",
            bottom: "pants or capris",
            shoe: "sneakers",
            shoe: "rain boots",
            accs: "umbrella",
        },
        twenty_non_rain: {
            top: "tank top or tee",
            top: "sunshield jacket, superlight",
            bottom: "capris or short",
            shoes: "sandels",
            accs: "sunglasses",
            accs: "sun hat",
            accs: "sunscreen",
        },
        twenty_rain: {
            top: "tank top or tee",
            top: "rain jacket, superlight",
            bottom: "capris or short",
            shoe: "sandels",
            shoe: "rain boots",
            accs: "umbrella",
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
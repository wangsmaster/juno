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
            img_description.textContent = this.lookup[weatherObj][property];
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
    // Inside braces, there is a list of properties separated by commas. Each property has a name followed by a colon and a value. - Eloquent Javascript
    lookup = {
        minus10C_non_rain: {
            top1: "tank top",
            top2: "warm long sleeves",
            top3: "sweater hoodie",
            top4: "down parka",
            bottom1: "cotton leggings",
            bottom2: "knit pants",
            bottom3: "snow pants",
            shoe1: "snow boots",
            accs1: "scarf",
            accs2: "gloves",
            accs3: "wool beanie",
        }, 
        minus10C_rain: {
            top1: "tank top",
            top2: "warm long sleeves",
            top3: "sweater hoodie",
            top4: "down parka",
            bottom1: "cotton leggings",
            bottom2: "knit pants",
            bottom3: "snow pants",
            shoe1: "snow boots",
            accs1: "scarf",
            accs2: "gloves",
            accs3: "wool beanie",
        },
        minus5C_non_rain: {
            top1: "tank top",
            top2: "warm long sleeves",
            top3: "sweater hoodie",
            top4: "down parka",
            bottom1: "cotton leggings",
            bottom2: "knit pants",
            bottom3: "snow pants",
            shoe1: "snow boots",
            accs1: "scarf",
            accs2: "gloves",
            accs3: "wool beanie",
        },
        minus5C_rain: {
            top1: "tank top",
            top2: "warm long sleeves",
            top3: "sweater hoodie",
            top4: "down parka",
            bottom1: "cotton leggings",
            bottom2: "knit pants",
            bottom3: "snow pants",
            shoe1: "snow boots",
            accs1: "scarf",
            accs2: "gloves",
            accs3: "wool beanie",
        },
        zero_non_rain: {
            top1: "tank top",
            top2: "warm long sleeves",
            top3: "hoodie",
            top4: "warm coat",
            bottom1: "cotton leggings",
            bottom2: "sweatpants",
            shoe1: "sneakers",
            accs1: "scarf",
            accs2: "beanie",
        },
        zero_rain: {
            top1: "tank top",
            top2: "warm long sleeves",
            top3: "hoodie",
            top4: "warm raincoat",
            bottom1: "cotton leggings",
            bottom2: "sweatpants",
            shoe1: "sneakers",
            shoe2: "rain boots",
            accs1: "scarf",
            accs2: "beanie",
            accs3: "umbrella",
        },
        five_non_rain: {
            top1: "long sleeve shirt or dress",
            top2: "hoodie or fleece, thick",
            top3: "wind jacket thick",
            bottom1: "cotton legging, thick",
            bottom2: "sweatpants",
            shoe1: "sneakers",
            accs1: "knit hat",
        },
        five_rain: {
            top1: "long sleeve shirt or dress",
            top2: "hoodie or fleece, thick",
            top3: "wind jacket thick",
            bottom1: "cotton legging, thick",
            bottom2: "sweatpants",
            shoe1: "sneakers",
            shoe2: "rain boots",
            accs1: "knit hat",
            accs2: "umbrella",
        },
        ten_non_rain: {
            top1: "t-shirt",
            top2: "hoodie",
            top3: "wind jacket, light",
            bottom1: "pants or jeans",
            shoe1: "sneakers",
            accs1: "bucket hat",

        },
        ten_rain: {
            top1: "t-shirt",
            top2: "hoodie",
            top3: "rain jacket, light",
            bottom1: "pants or jeans",
            shoe1: "sneakers",
            accs1: "bucket hat",
        },
        fifteen_non_rain: {
            top1: "tee",
            top2: "jacket, light",
            bottom1: "pants or capris",
            shoe1: "sneakers",
            accs1: "sunglasses",
            accs2: "sun hat",
            accs3: "sunscreen",
        },
        fifteen_rain: {
            top1: "tee",
            top2: "jacket, light",
            bottom1: "pants or capris",
            shoe1: "sneakers",
            shoe2: "rain boots",
            accs1: "umbrella",
        },
        twenty_non_rain: {
            top1: "tank top or tee",
            top2: "sunshield jacket, superlight",
            bottom1: "capris or short",
            shoe1: "sandels",
            accs1: "sunglasses",
            accs2: "sun hat",
            accs3: "sunscreen",
        },
        twenty_rain: {
            top1: "tank top or tee",
            top2: "rain jacket, superlight",
            bottom1: "capris or short",
            shoe1: "sandels",
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
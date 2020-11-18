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
            img.src = "/img/clothes/placeholder.png"
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
            top_inner: "tank top",
            top_mid: "long sleeve shirt or dress, thick",
            top_outer_1: "sweater hoodie",
            top_outer_2: "down parka",
            bottom_inner: "cotton legging",
            bottom_mid: "knitted pant",
            bottom_outer: "snow pant",
            shoes_1: "snow shoes",
            shoes_2: "NA",
            accs1: "scarf",
            accs2: "gloves",
            accs3: "wool knit hat",
            accs4: "NA",
        }, 
        minus10C_rain: {
            top_inner: "tank top",
            top_mid: "long sleeve shirt or dress, thick",
            top_outer_1: "sweater hoodie",
            top_outer_2: "down parka",
            bottom_inner: "cotton legging",
            bottom_mid: "knitted pant",
            bottom_outer: "snow pant",
            shoes_1: "snow shoes",
            shoes_2: "NA",
            accs1: "scarf",
            accs2: "gloves",
            accs3: "wool knit hat",
            accs4: "NA",
        },
        minus5C_non_rain: {
            top_inner: "tank top",
            top_mid: "long sleeve shirt or dress, thick",
            top_outer_1: "sweater hoodie",
            top_outer_2: "down parka",
            bottom_inner: "cotton legging",
            bottom_mid: "knitted pant",
            bottom_outer: "snow pant",
            shoes_1: "snow shoes",
            shoes_2: "NA",
            accs1: "scarf",
            accs2: "gloves",
            accs3: "wool knit hat",
            accs4: "NA",
        },
        minus5C_rain: {
            top_inner: "tank top",
            top_mid: "long sleeve shirt or dress, thick",
            top_outer_1: "sweater hoodie",
            top_outer_2: "down parka",
            bottom_inner: "cotton legging",
            bottom_mid: "knitted pant",
            bottom_outer: "snow pant",
            shoes_1: "snow shoes",
            shoes_2: "NA",
            accs1: "scarf",
            accs2: "gloves",
            accs3: "wool knit hat",
            accs4: "NA",
        },
        zero_non_rain: {
            top_inner: "tank top",
            top_mid: "long sleeve shirt or dress, thick",
            top_outer_1: "hoodie or fleece, thick",
            top_outer_2: "wind jacket thick",
            bottom_inner: "cotton legging, thick",
            bottom_mid: "NA",
            bottom_outer: "sweat pants",
            shoes_1: "sneakers",
            shoes_2: "NA",
            accs1: "scarf",
            accs2: "NA",
            accs3: "knit hat",
            accs4: "NA",
        },
        zero_rain: {
            top_inner: "tank top",
            top_mid: "long sleeve shirt or dress, thick",
            top_outer_1: "hoodie or fleece, thick",
            top_outer_2: "rain jacket thick",
            bottom_inner: "cotton legging, thick",
            bottom_mid: "NA",
            bottom_outer: "sweat pants",
            shoes_1: "sneakers",
            shoes_2: "rain boots",
            accs1: "scarf",
            accs2: "NA",
            accs3: "knit hat",
            accs4: "umbrella",
        },
        five_non_rain: {
            top_inner: "NA",
            top_mid: "long sleeve shirt or dress",
            top_outer_1: "hoodie or fleece, thick",
            top_outer_2: "wind jacket thick",
            bottom_inner: "cotton legging, thick",
            bottom_mid: "NA",
            bottom_outer: "sweat pants",
            shoes_1: "sneakers",
            shoes_2: "NA",
            accs1: "NA",
            accs2: "NA",
            accs3: "knit hat",
            accs4: "NA",
        },
        five_rain: {
            top_inner: "NA",
            top_mid: "long sleeve shirt or dress",
            top_outer_1: "hoodie or fleece, thick",
            top_outer_2: "wind jacket thick",
            bottom_inner: "cotton legging, thick",
            bottom_mid: "NA",
            bottom_outer: "sweat pants",
            shoes_1: "sneakers",
            shoes_2: "rain boots",
            accs1: "NA",
            accs2: "NA",
            accs3: "knit hat",
            accs4: "umbrella",
        },
        ten_non_rain: {
            top_inner: "NA",
            top_mid: "t-shirt",
            top_outer_1: "hoodie",
            top_outer_2: "wind jacket, light",
            bottom_inner: "NA",
            bottom_mid: "NA",
            bottom_outer: "pants or jeans",
            shoes_1: "sneakers",
            shoes_2: "NA",
            accs1: "NA",
            accs2: "NA",
            accs3: "bucket hat",
            accs4: "NA",
        },
        ten_rain: {
            top_inner: "NA",
            top_mid: "t-shirt",
            top_outer_1: "hoodie",
            top_outer_2: "rain jacket, light",
            bottom_inner: "NA",
            bottom_mid: "NA",
            bottom_outer: "pants or jeans",
            shoes_1: "sneakers",
            shoes_2: "NA",
            accs1: "NA",
            accs2: "NA",
            accs3: "bucket hat",
            accs4: "NA",
        },
        fifteen_non_rain: {
            top_inner: "NA",
            top_mid: "NA",
            top_outer_1: "tee",
            top_outer_2: "jacket, light",
            bottom_inner: "NA",
            bottom_mid: "NA",
            bottom_outer: "pants or capris",
            shoes_1: "sneakers",
            shoes_2: "NA",
            accs1: "NA",
            accs2: "sunglasses",
            accs3: "sun hat",
            accs4: "sunscreen",
        },
        fifteen_rain: {
            top_inner: "NA",
            top_mid: "NA",
            top_outer_1: "tee",
            top_outer_2: "jacket, light",
            bottom_inner: "NA",
            bottom_mid: "NA",
            bottom_outer: "pants or capris",
            shoes_1: "sneakers",
            shoes_2: "rain boots",
            accs1: "NA",
            accs2: "NA",
            accs3: "NA",
            accs4: "umbrella",
        },
        twenty_non_rain: {
            top_inner: "NA",
            top_mid: "NA",
            top_outer_1: "tank top or tee",
            top_outer_2: "sunshield jacket, superlight",
            bottom_inner: "NA",
            bottom_mid: "NA",
            bottom_outer: "capris or short",
            shoes_1: "sandels",
            shoes_2: "NA",
            accs1: "NA",
            accs2: "sunglasses",
            accs3: "sun hat",
            accs4: "sunscreen",
        },
        twenty_rain: {
            top_inner: "NA",
            top_mid: "NA",
            top_outer_1: "tank top or tee",
            top_outer_2: "rain jacket, superlight",
            bottom_inner: "NA",
            bottom_mid: "NA",
            bottom_outer: "capris or short",
            shoes_1: "sandels",
            shoes_2: "rain boots",
            accs1: "NA",
            accs2: "NA",
            accs3: "NA",
            accs4: "umbrella",
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
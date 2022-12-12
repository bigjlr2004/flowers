
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify
    //need to iterate through the flowers array to find flowers that are less than 2.00 per flower

    for (const flower of flowers) {
        // filter flowers based on whether they are less than 2.00 per flower
        if (flower.price < 2.00) {
            //use the pushmethod to push the flower that meets the criteria into filteredFlowers array
            filteredFlowers.push(flower);
        }
    }

    return filteredFlowers  // Do not modify

}



    /*
        This function should return flowers that grow in
        USDA zones of 3 and 8.
    */
    const zoneFlowers = () => {
        const filteredFlowers = []  // Do not modify


        /* I need to return flowers that ony grow in zone 3 and 8.
     
        1. I need to iterate through the array with a for of loop.
         a. Use an if statement that checks to see if the flower grows in both zone 3 and zone 8.
        3. I need to return the flowers that will grow in zones 3 and 8.
        
            use an include statement to see if the flower grows in that zone
            a. use an if statement to see if the flower is in zone 3 and 8.
             a. return flowers using the push method on the filteredFlowers array
     */
        // 1. I need to iterate through the array with a for of loop.
        for (const flower of flowers) {
            
            
            //  Use an if statement that checks to see if the flower grows in both zone 3 and zone 8.
            if (flower.usdaZones.includes(8) && flower.usdaZones.includes(3)) {
               
                //use the pushmethod to push the flower that meets the criteria into filteredFlowers array
                filteredFlowers.push(flower);
                
                
            }
            }
        

        return filteredFlowers  // Do not modify
    }



    /*
        This function should return flowers that come in the color Orange
    */
    const orangeFlowers = () => {
        const filteredFlowers = []  // Do not modify

        /*This function returns flowers that comine in the color Orange

        I need to iterate throgh flowers array with a for statement

        I need to check the colors array for flowers that come in orange with an includes statement.

        I need to use the push method to populate the filtered Flowers array with the flowers that are Orange.

        */

        //I need to iterate throgh flowers array with a for statement
       
        for (const flower of flowers) {
            // filter flowers based on whether they are orange by checking the colors property of the flowers object.
            if (flower.colors.includes("Orange")) {
                //use the pushmethod to push the flower that meets the criteria into filteredFlowers array
                filteredFlowers.push(flower);
            }
        }

        return filteredFlowers  // Do not modify
    }



    /*
        This function should return an HTML representation of each flower.
    
        Expected string format:
            <article>
                <h1>Bird of Paradise</h1>
    
                <h2>Colors</h2>
                <section>White</section>
                <section>Orange</section>
    
                <h2>USDA Zones</h2>
                <div>9</div>
                <div>10</div>
                <div>11</div>
            </article>
    */
    const flowersAsHTML = () => {
        let flowersHTMLString = ""  // Do not modify


       /*
       Return an HTML representation of each flower.
       iterate through each element in the object.
       as I iterate through encapsulate each of the elments of the array with HTML tags.
       
       declare a variable to catch the html string being created.
       simple for of loop iterating through each element
       add the opening article tag to the html string outside of the for loop
       iterate the for loop for the flowers array.
        add the opening h1 tag to the flower type with string encapsulation
        add the type property of element to the string using the type string value 
        add the closing h1 tag to the html string
        add a opening h2 tag and add the colors heading to the html string along with a closing h2 tag
        use a nested for loop to iterate through the colors array
        for each of the colors within the colors array add an opening section tag, the color string, and a closing section tag
       and an opening h2 tagto the usda zones header and a closing add both of these to the html string
        use a nested for loop to iterate through the USDA zones array
        for each of the zones in the usda zones array add an opening div element, the zone string, and a closing div to the html string 
add the closing article tag to the html string
  <article>
                <h1>Bird of Paradise</h1>
    
                <h2>Colors</h2>
                <section>White</section>
                <section>Orange</section>
    
                <h2>USDA Zones</h2>
                <div>9</div>
                <div>10</div>
                <div>11</div>
            </article>

       */
      
     
      
      //iterate through each element in the object.
      
      for(const flower of flowers){
         //add the opening article tag to the html string
        flowersHTMLString += "<article>\n"
        //add the opening h1 tag to the flower type with string encapsulation
        //add the type property of element to the string using the type string value
        // add the closing h1 tag to the html string
         
        flowersHTMLString += `\n\n\t\t<h1>${flower.type}</h1>\n\n`;
        //add a opening h2 tag and add the colors heading to the html string along with a closing h2 tag
        flowersHTMLString += `\n\t\t<h2>Colors</h2>`;
        //use a nested for loop to iterate through the colors array
        for(const color of flower.colors){
         //for each of the colors within the colors array add an opening section tag, the color string, an
        flowersHTMLString += `\n\t\t\t<section>${color}</section>`
        }
        //and an opening h2 tagto the usda zones header and a closing add both of these to the html string
        flowersHTMLString += `\n\n\t\t<h2>USDA Zones</h2>`;
        //use a nested for loop to iterate through the USDA zones array
        for(const zone of flower.usdaZones) {
       // for each of the zones in the usda zones array add an opening div element, the zone string, and a closing div to the html string 
       flowersHTMLString += `\n\t\t\t<div>${zone}</div>`

        }
         //add the closing article tag to the html string
        flowersHTMLString += "\n</article>" 

        
      }
     

        return flowersHTMLString  // Do not modify
    }

console.log(flowersAsHTML(flowers));




    /*  DO NOT TOUCH THIS CODE  */
    const getFlowers = () => flowers
    module.exports = {
        inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
    }
/*  DO NOT TOUCH THIS CODE  */


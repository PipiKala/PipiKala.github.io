/*
Eden Staton,
I created a simple temperature converter that when given the temperature in Celsius and the button clicked, will display in text: "The temperature in fahrenheit is..." 
The fuction 'process' rests in the converter file which is called by the action of a user clicking the 'show temperature' button. This function then will look for the 
tempBox value in the HTML document and assign it to the name 'celsius'. Next this value that was taken from the 'tempBox' will be multiplied by 9 and divided by 5, then 
will have 32 added to the sum. This new value of 32+x(9/5) will be stored in the fahrenheit tag. Which will be then immediately displayed under the user's textbox 
replacing the html text "Temperature will appear here!" with a newly created string that has the temperature added to it. This works as so: user can add the number 32 to
the textbox, click show temperature and the text will change to: "the termperature in fahrenheit is 89.60 degrees"
*/
let message = "Temperature will appear here!"


function process() {
    let fahrenheit = 0;
    let celsius = 0
    switch(document.querySelector('#temp').value){
        case 'fahrenheit': //this works
            fahrenheit = document.querySelector('#tempBox').value;
            celsius = (Number(fahrenheit)-32) * 5/9 //converts fahrenheit to celsius through the equation C = 5/9(F-32)
    
            message = "The temperature in Celsius is " + celsius.toFixed(0) +""+" degrees";  //so weird thing, if you just do: an added space on degrees OR just an added +""+ space it will not create space between the number and degrees.
            document.querySelector('#result').innerHTML = message;
            break
        case 'celsius': //this doesn't, no idea why ***fixed*** message was spelled messsage
            celsius = document.querySelector('#tempBox').value;
            fahrenheit = 32 + (Number(celsius)) * 9/5 //converts celsius to fahrenheit through the equation F= (C9/5)+32

            message = "The temperature in Fahrenheit is " + fahrenheit.toFixed(0) +""+" degrees";  //so weird thing, if you just do: an added space on degrees OR just an added +""+ space it will not create space between the number and degrees.
            document.querySelector('#result').innerHTML = message;
            break
    }
}
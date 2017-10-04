Help README
---------------------------------------------------------------------------------------------------
LIRI is similar to SIRI in the fact that it can find out information for you. You can check songs, 
movies, define words, check the weather, and check your twitter feed. I will be adding more skills 
later on. But enjoy your experience with LIRI.
Here is how to use LIRI:
---------------------------------------------------------------------------------------------------
The [COMMAND] is what you command LIRI to do, and the [ARGUMENTS] are the parameters that you need to 
pass to LIRI to get what you are looking for. The [ARGUMENTS] will change determine on what you are
looking for. 

Let's take a look at the processes in Node which handle these queries for the app. . . 
process.argv = user inputs

The input's matter, take a look at this quick for loop which takes in user inputs, and establishes origin to a predefined index of 3. 
Take this LIRI command for example, look at the boolean value of each integer and then think of the remainder as > your favorite number.  
 <code>
   # 0 # 1 # 2 # 3 > 3 > 3 > 3 > 3 > 3 > 3 > 3
/~ node liri movie movie name is really long
</code>
<code>
	for(l=3; l<nodeArgs.length; l++){
    argArray.push(nodeArgs[l]);
}; </code>

# Step-by-step
Let's setup a couple of Global Enviornment Variables. 
//start listening to user inputs in the state
<code>var nodeArgs = process.argv;</code>

//create an array for user inputs
<code>var argArray = [];</code>

//assign commands and titles from user inputs
<code>var command = nodeArray[2];
var input = [];</code>

Establish user input, and determine what input is needed for a proper query with Request.
To do this, we must loop through the user inputs like so; 
<code>for(k=3; k<nodeArray.length; k++){
    input.push(nodeArray[k]);
};
</code>



Examples:
# /~ node liri.js get-tweets
  This will return your last 20 tweets that you have tweeted.
# /~ node liri.js spotify-this-song "Money Pink Floyd"
  This will return the song titled Money by Pink Floyd and will also give the artist, album, and a URL that
  will give you a 30 second preview of the song.
# /~ node liri.js movie-this Guardians of the Galaxy
  This will return a movie with the title Guardians of the Galaxy and give you a quick synopsis of the movie and 
  a link where there to find out more information about the movie.

MORE INFORMATION:
---------------------------------------------------------------------------------------------------
You can always ask LIRI for help at:
# /~  node liri.js help
Learn more about LIRI with the following command: 
# /~ node liri.js about
Check the status of your LIRI version at:
# /~  node liri.js status

When you run the liri.js file using the console. 
You just have to type the following into the terminal:
# /~ node liri.js (COMMAND) (ARGUMENT)	
# /~ node liri.js prompt
# /~ node liri.js my-tweets
# /~ node liri.js spotify-this-song <ARGUMENTS>
# /~ node liri.js movie-this <ARGUMENTS>
# /~ node liri.js get-weather <ARGUMENTS>
# /~ node liri.js count-to <ARGUMENTS>
# /~ node liri.js do-what-it-says

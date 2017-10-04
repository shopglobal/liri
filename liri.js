var request = require("request");
var fs = require('fs');
var inquirer = require("inquirer");
var Keys = require('./keys.js');

var myArgs = process.argv[2];
var keyword = process.argv[2];
var input = process.argv[3];

var Twitter = require('twitter');
var screenName = process.argv[3];

var Spotify = require('node-spotify-api');
var song = "";
var songParam = process.argv;

var movieParam = process.argv;
var movieName = ""; 

// var params = {screen_name: 'nodejs', count: 20};
var params = {screen_name: (screenName), count: 20};

//create an array for user inputs
var nodeArray = process.argv;

//assign commands and titles from user inputs
var command = nodeArray[2];
var input = [];
// ToDo trigger functions based on possible commands:
var possibleCommands = ['my-tweets','tweets-by','tweets','prompt','spotify-this-song','spotify','movie-this','movie','do-what-it-says','execute'];


for(k=3; k<nodeArray.length; k++){
    input.push(nodeArray[k]);
};

//concatenates if multiple word title is entered
function titleConcat(input){
    var temp = ""
    if(input[0] === undefined){
        return input[0];
    }
    else{
        for(j=0; j<input.length; j++){
            temp = temp + " " + input[j].trim();
        };
    return temp.trim();
    }
};

// ToDo add switched for my functions, and wrap my if statments inside functions...
// switch (action) {
//     case 'tweet':
//         tweet();
//         break;
//     case 'song':
//         song(value);
//         break;
//     case 'omdb':
//         omdb(value);
//         break;
//     case 'random':
//         random();
//         break;
// }


//console.log('myArgs: ', myArgs);
if (myArgs == "tweets"){
Keys.get('statuses/user_timeline', params, function(error, tweets, response){
        if (error) {
            console.log(error);
        } else{
            for (var t = 0; t < tweets.length; t++){
                console.log("Tweet: " + tweets[t].text);
                console.log("Created at: " + tweets[t].created_at);
            }
            
            //console.log(tweets.text)
        }
    })
}
if (myArgs == "my-tweets"){
Keys.get('statuses/user_timeline', params, function(error, tweets, response){
        if (error) {
            console.log(error);
        } else{
            for (var t = 0; t < tweets.length; t++){
                console.log("Tweet: " + tweets[t].text);
                console.log("Created at: " + tweets[t].created_at);
            }
            
            //console.log(tweets.text)
        }
    })
}
if (myArgs == "tweets-by"){
Keys.get('statuses/user_timeline', params, function(error, tweets, response){
        if (error) {
            console.log(error);
        } else{
            for (var t = 0; t < tweets.length; t++){
                console.log("Tweet: " + tweets[t].text);
                console.log("Created at: " + tweets[t].created_at);
            }
            
            //console.log(tweets.text)
        }
    })
}
if(myArgs == "spotify"){

for (var i = 3; i < songParam.length; i++){
    if(i > 3 && i < songParam.length){
        song = song + "+" + songParam[i];
        //console.log(song);
    } else{
        song += songParam[i];
    }
}    

if (!song){
            song = "The Sign Ace of Base";
        }

var spotify = new Spotify({
    id: '6efecb35f43b4d9cb327658373d85422',
    secret: '3fd0f14a7f454af4888311b0a7689167'
  });
  
  spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } else {
        console.log("Album: " + data.tracks.items[0].album.name); 
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song: " + data.tracks.items[0].name);
        console.log("Preview Link: " + data.tracks.items[0].preview_url);
        console.log("Track: " + data.tracks.items[0].external_urls.spotify);
    }
  });
}
if(myArgs == "spotify-this-song"){

for (var i = 3; i < songParam.length; i++){
    if(i > 3 && i < songParam.length){
        song = song + "+" + songParam[i];
        //console.log(song);
    } else{
        song += songParam[i];
    }
}    

if (!song){
            song = "The Sign Ace of Base";
        }

var spotify = new Spotify({
    id: '6efecb35f43b4d9cb327658373d85422',
    secret: '3fd0f14a7f454af4888311b0a7689167'
  });
  
  spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } else {
        console.log("Album: " + data.tracks.items[0].album.name); 
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song: " + data.tracks.items[0].name);
        console.log("Preview Link: " + data.tracks.items[0].preview_url);
        console.log("Track: " + data.tracks.items[0].external_urls.spotify);
    }
  });
}

// cleaning things up, and adding in a default movieName if none is provided by user

// var movieParam = process.argv;
// var movieName = "";

    switch(keyword){
        case 'movie':
        for (var input = 3; input < movieParam.length; input++){
        if(input > 3 && input < movieParam.length){
        movieName = movieName + "+" + movieParam[input];
        console.log("____________________________________");
        console.log("------------------------------------");
        console.log("\n");
        console.log("this is movieName " + movieName);
    }   
        else{
        movieName += movieParam[input];
        }
    }
        var movie_title = movieName

        if (!movie_title){
            movie_title = "Mr Nobody";
        }

        var movie_url = "http://www.omdbapi.com/?t=" + movie_title + "&y=&plot=short&apikey=40e9cece"
        console.log(movie_url)

            request(movie_url, function(error, response, body){

                if(error){
                    return error;
                }
          
                  if(!error && response.statusCode == "200"){

          
                    var movie = JSON.parse(body);
                    console.log("____________________________________");
                    console.log("------------------------------------");
                    console.log("\n");
                    console.log("Title: " + movie.Title);
                    console.log("____________________________________");
                    console.log("------------------------------------");
                    console.log("\n");
                    console.log("Year: " + movie.Year);
                    console.log("____________________________________");
                    console.log("------------------------------------");
                    console.log("\n");
                    console.log("Imdb Rating:" + movie.imdbRating)
                    console.log("____________________________________");
                    console.log("------------------------------------");
                    // console.log("\n")
                    // console.log("Rotten Tomatoes Rating: " +JSON.parse(body).Ratings[0].Value)
                    console.log("\n");
                    console.log("Rotten Tomatoes Rating: " + movie.Ratings[0].Value);
                    console.log("____________________________________");
                    console.log("------------------------------------");
                    console.log("\n");
                    console.log("Language: " + movie.Language);
                    console.log("____________________________________");
                    console.log("------------------------------------");
                    console.log("\n");
                    console.log("Movie Plot: " + movie.Plot);
                    console.log("____________________________________");
                    console.log("------------------------------------");
                    console.log("\n");
                    console.log("Actors: " + movie.Actors);
                    console.log("____________________________________");
                    console.log("------------------------------------");
                  }
                })
        break;

    }
switch(keyword){
        case 'movie-this':
        for (var input = 3; input < movieParam.length; input++){
        if(input > 3 && input < movieParam.length){
        movieName = movieName + "+" + movieParam[input];
        console.log("____________________________________");
        console.log("------------------------------------");
        console.log("\n");
        console.log("this is movieName " + movieName);
    }   
        else{
        movieName += movieParam[input];
        }
    }
        var movie_title = movieName

        if (!movie_title){
            movie_title = "Mr Nobody";
        }

        var movie_url = "http://www.omdbapi.com/?t=" + movie_title + "&y=&plot=short&apikey=40e9cece"
        console.log(movie_url)

            request(movie_url, function(error, response, body){

                if(error){
                    return error;
                }
          
                  if(!error && response.statusCode == "200"){

          
                    var movie = JSON.parse(body);
                    console.log("____________________________________");
                    console.log("------------------------------------");
                    console.log("\n");
                    console.log("Title: " + movie.Title);
                    console.log("____________________________________");
                    console.log("------------------------------------");
                    console.log("\n");
                    console.log("Year: " + movie.Year);
                    console.log("____________________________________");
                    console.log("------------------------------------");
                    console.log("\n");
                    console.log("Imdb Rating:" + movie.imdbRating)
                    console.log("____________________________________");
                    console.log("------------------------------------");
                    // console.log("\n")
                    // console.log("Rotten Tomatoes Rating: " +JSON.parse(body).Ratings[0].Value)
                    console.log("\n");
                    console.log("Rotten Tomatoes Rating: " + movie.Ratings[0].Value);
                    console.log("____________________________________");
                    console.log("------------------------------------");
                    console.log("\n");
                    console.log("Language: " + movie.Language);
                    console.log("____________________________________");
                    console.log("------------------------------------");
                    console.log("\n");
                    console.log("Movie Plot: " + movie.Plot);
                    console.log("____________________________________");
                    console.log("------------------------------------");
                    console.log("\n");
                    console.log("Actors: " + movie.Actors);
                    console.log("____________________________________");
                    console.log("------------------------------------");
                  }
                })
        break;

    }
    
    if(!myArgs) {
        myArgs = "prompt";
    }
if(myArgs == "prompt") {
    //-------- Prompt user for input-------------------------------------------------

inquirer
  .prompt([
    {
      type: "list",
      message: "Please select",
      choices: [
        "Read Mark Evans Tweets",
        "Get Information about a song from Spotify",
        "Get information about a movie from OMDB",
        "Trigger a Random Reaction"
      ],
      name: "whichAction"
    },
    {
      type: "input",
      message: "Enter the name of a song: ",
      name: "song",
      when: function(answers) {
        return answers.whichAction === "Get Information about a song from Spotify";
      }
    },
    {
      type: "input",
      message: "Please enter the name of a movie: ",
      name: "movie",
      when: function(answers) {
        return answers.whichAction === "Get information about a movie from OMDB";
      }
    }
  ])
  .then(function(user) {
    var action = user.whichAction;
    var currentdate = new Date(); // used to set date information when writing to log.txt


var lookup = {
      //--------------Logging to log.txt---------------------

      logTime:
        "Log entry created on " +
        currentdate.getDate() +
        "/" +
        (currentdate.getMonth() + 1) +
        "/" +
        currentdate.getFullYear() +
        " @ " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds(),

      log: function(thingToLog) {
        fs.appendFile("log.txt", thingToLog, function(error) {
          if (error) console.log("error");
        });
      },

      //----------------- TWITTER ----------------------------

      "Read Mark Evans Tweets": function() {
        var params = { screen_name: "_devmark", count: "20" };
        Keys.get("statuses/user_timeline", params, function(error, tweets) {
          if (!error) {
            for (var i = 0; i < tweets.length; i++) {
              console.log("\n" + tweets[i].created_at);
              console.log(tweets[i].text + "\n");
              lookup.log(
                "\n" +
                  lookup.logTime +
                  "\n" +
                  "Posted on " +
                  tweets[i].created_at +
                  "\n" +
                  tweets[i].text +
                  "\n"
              );
            }
          }
        });
      },

      //----------------- SPOTIFY ----------------------------

      "Get Information about a song from Spotify": function() {
        var spotify = new Spotify({
            id: '6efecb35f43b4d9cb327658373d85422',
            secret: '3fd0f14a7f454af4888311b0a7689167'
        });        
        if (!user.song) {
          user.song = "THE SIGN ace of base";
        }
        spotify.search({ type: "track", query: user.song, limit: 1 }, function(
          err,
          data
        ) {
          if (err) {
            console.log("Error occurred" + err);
            return;
          }
          // console.log(JSON.stringify(data, null, 2));    //test prints the full Spotify return JSON object
          for (var i = 0; i < data.tracks.items.length; i++) {
            var songWrite =
              "\nThe song " +
              data.tracks.items[0].name.toUpperCase() +
              " is by the artist " +
              data.tracks.items[0].artists[0].name.toUpperCase() +
              "\nThe song appears on the album " +
              data.tracks.items[0].album.name.toUpperCase() +
              "\nTo preview on Spotify, command+click the link below: \n\n" +
              data.tracks.items[0].preview_url +
              "\n";
            console.log(songWrite);
            lookup.log("\n \n" + lookup.logTime + songWrite);
          }
        });
      },

      //----------------- OMDB ----------------------------

      "Get information about a movie from OMDB": function() {
        if (!user.movie) {
          user.movie = "Mr. Nobody";
        }
        var queryURL =
          "http://www.omdbapi.com/?t=" +
          user.movie +
          "&y=&plot=short&apikey=40e9cece";
        request(queryURL, function(error, response, body) {
          if (!error && response.statusCode === 200) {
            var filmWrite =
              "\nThe movie title is " +
              JSON.parse(body).Title.toUpperCase() +
              "\nThe film was released in " +
              JSON.parse(body).Year +
              "\nIt's IMBD Rating is " +
              JSON.parse(body).imdbRating +
              "\nThe film was produced in " +
              JSON.parse(body).Country +
              "\nThe film's language is " +
              JSON.parse(body).Language +
              "\nThe plot of the movie is " +
              JSON.parse(body).Plot +
              "\nActors in the movie include " +
              JSON.parse(body).Actors +
              "\nOfficial Website is " +
              JSON.parse(body).Website +
              "\n";
            console.log(filmWrite);
            lookup.log("\n \n" + lookup.logTime + filmWrite);
            // console.log(response);   logs full JSON response
          }
        });
      },

      //----------------- RANDOM ----------------------------

      "Trigger a Random Reaction": function() {
        fs.readFile("random.txt", "UTF8", function(error, data) {
          data = data.split(",");
          action = data[0];
          user.song = data[1];
          lookup[action]();
        });
      }
}; // End of lookup object

    //-----------------query the lookup Object with the action property selected by user---------

    lookup[action]();
  });
}

var colors = require("colors/safe");
var prompt = require('prompt'); 
if(myArgs == "fly"){
    prompt.message = colors.rainbow("Question!");
    prompt.delimiter = colors.green("><");
        
        var schema = {
        properties: {
            origin: {
                pattern: /^[a-zA-Z\s-]+$/,
                message: 'Name must be only letters, spaces, or dashes',
                required: true
    },
        date: {
            date: 'date',
            format: 'date',
            message: 'Must be a valid date format YY-MM-DD'
    },
    //     anyInputIWant: {
    //         required: true,
    //         hidden: true
    // }
  }
};
// Start the prompt
    prompt.start();
//     // alert("Please enter your username and email address: ");   
//     // prompt.get(['username', 'email'], function (err, result) {
//     prompt.get({
//     properties: {
//     name: {
//       description: colors.red("What is your name?")
//     }
//   }
// }, 
prompt.get(schema, function (err, result) {
    console.log('Command-line input received:');
    console.log("____________________________________");
    console.log("------------------------------------");
    console.log("\n");
    // console.log('  username: ' + result.username);
    // console.log('  email: ' + result.email);
    console.log('  origin: ' + result.origin);
    console.log('  date: ' + result.date);
      if(err){
            throw error;
        } else{
            // console.log(data);
            console.log(result);
        }
    })
}



if(myArgs == "do-what-it-says"){
    fs.readFile("random.txt", "utf8", function(error, data){
        if(error){
            throw error;
        } else {
            var dataArr = data.split(',');
            if (dataArr[0] === 'spotify-this-song') {
                song(dataArr[1]);
            }
            if (dataArr[0] === 'movie-this') {
                omdb(dataArr[1]);
            }
        }
    })
}
//log commands to log.txt file
function getLogText(){
    // logging the commands 
    var temp2 = ""
    for(p=2; p<nodeArray.length; p++){
        temp2 = temp2 + " " + nodeArray[p].trim();
    };
    return temp2.trim();
    console.log("Content Added!");
    console.log("--------------------");
    // logging the movie names
    var temp3 = ""
    for(p=2; p<movieParam.length; p++){
        temp3 = temp3 + " " + movieParam[p].trim();
    };
    return temp3.trim();
    console.log("Content Added!");
    console.log("--------------------");
    // logging the song names
    var temp4 = ""
    for(p=2; p<songParam.length; p++){
        temp4 = temp4 + " " + songParam[p].trim();
    };
    return temp4.trim();
    console.log("Content Added!");
    console.log("--------------------");
    // logging the twitter username requested
    var temp5 = ""
    for(p=2; p<tweets.length; p++){
        temp5 = temp5 + " " + tweets[p].text.trim();
    };
    return temp5.trim();
    console.log("Content Added!");
    console.log("--------------------");
    // logging the tweet
    var temp6 = ""
    for(t = 0; t < prompt.length; t++){
        temp6 = temp6 + " " + prompt[t].value.trim();
    };
    return temp6.trim();
    console.log("Content Added!");
    console.log("--------------------");
};

var logText = '\r\n' + getLogText();

fs.appendFile("log.txt", logText, function(err){

   if(err){
    return console.log(err);
  } 

  
});
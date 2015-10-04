/// Fred Lewis October 2 2015 Debug Assignment /////


// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),           // establishing a variable of resultsDIV given the value of document.getElementById which means it is finding an element by the element id of "results" on the web page
		searchInput = document.forms[0].search,// establishing a variable of searchInput given a value of document.forms[0].search which means it returns all <form> elements, then the .search method searches for the specified value, and returns the position of the match
		currentSearch = ''
	;    // a variable of currentSearch with no value
	
	// Validates search query
	var validqte == function(query){        // this line sets the variable validate )spellt incorrectly I assume) with == (equalling) a function with a parameter of query
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){    // this is saying that the first space is blank, moving the cursor and first thing typed over, creating whitespace........charAt returns the first character of a string
			query = query.substring(1, query.length);  //...query will equal the first character of the string and the number of characters in the string
		};
		while(query.charAt(query.length-1) === ""){
			query = query.substring(0, query.length-1);
		;  // this states that there that there will be whitespace at the end of the box as well
		
		// Check search length, must have 3 characters
		if(query.length < 3){
			alert("Your search query is too small, try again.);
			// This says if the length of the value input is less than three, show the alert "Your search query is too small, try again.
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();   // this gives focus to the variable
			return;                // this return statement should be returning something, but its alone?
		};
		
		search(query);
	};
	
	// Finds search matches
	var search = function(query)     // establishes that var search is the query function
		
		// split the user's search query string into an array
		var queryArray = query.join(" ");
		
		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){   // this says the value and length and to count up by one each time
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); // it will search the string for '|'
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);
			// this says to convert the string to lowercase and extract both the 0 position and variable dbTitleEnd's value
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
				var qitem = queryArray[ii].tolowercase();  // this says to send the query lowercased and to count up one each time
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); // this establishes that var compare is equal to dbitem (searching for an index of qitem)
				if(compare !== -1){   // if compare is not equal to in number or type -1
					results.push(db[i]);
				};                   // push results to the db info area
			;
		;
		
		results.sort();  // sort the results of var results
		
		// Check that matches were found, and run output functions
		if(results.length = 0){
			noMatch(); // if the length is not long enough noMatch..
		}else{
			showMatches(results);  // if its long enough showMatches
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){    // this sets up the function of noMatch with the results and two statements

        var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'    // "No results found and  Try searching for JavaScript. Just an idea with a font size of ten
		;
		resultsDIV.innerHTML = html;   // changes the variable to html
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){ // this means that the variable showMatches is the value of the function with a parameter of results
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', // establishes that "Results" will be a paragraph (for displaying results from the search
			title, //  this is just establishing a variable of title and the url without values but the spacing is weird
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){  // sets the loop to continuing counting up one each time it is run
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');     //titleEnd = '|' basically the end of the title will be '|'
			title = results[i].subString(0, titleEnd);  // this says to pull from zero to titleEnd and its the title string
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);  // this pulls the info for the url just as with the title string above but this has the '|' and then a space beore the results creating white space
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; // video link
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	;

})();
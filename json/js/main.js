var ourRequest = new XMLHttpRequest();
// go to the URL and get the data
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
// what should happen when the data is loaded
// this is an anon function
ourRequest.onload = function(){
        console.log(ourRequest.responseText);
};
// sends the request
ourRequest.send();


// Declare a variable named xhr to create a new XMLHttpRequest object as follows in health_article.js file:
var xhr = new XMLHttpRequest();
// Create another variable named url to define the URL of the JSON file and fetched as follows:
var url = './health_article.json';

// prepare a GET request to the specified URL
// 3rd arg. Indicates if the request is asynchronous (true) or synchronous (false)
xhr.open('GET', url, true);

// the expected response from the server should be in JSON format
xhr.responseType = 'json';

xhr.onload = function() { 
    var articles = xhr.response.articles; // to retrieve the articles array from the JSON response
    var articlesDiv = document.getElementById('articles'); // to retrieve the HTML element with the ID 'articles' where the fetched content will be displayed
    
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    });
}

  xhr.send();


// Practice Task

var xhr2 = new XMLHttpRequest();
var url = './news_article.json';
xhr2.open('GET', url, true);
xhr2.responseType = 'json';

var news = xhr2.response.news; // to retrieve the articles array from the JSON response

xhr2.send();
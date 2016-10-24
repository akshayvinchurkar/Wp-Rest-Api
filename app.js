$(function(){
    //so well this is array of settings you have to specify this you can remove that headers if you want
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost/testing/wp-json/wp/v2/posts",
      "method": "GET",
      "headers": {
        "cache-control": "no-cache",
        "postman-token": "9daf9fcc-0e5c-965e-ce56-fa927b1ea830"
      }
    }


    //reference that div box
    var thecontainer = $('.box');
    //create new ul element dynamicly
    var ullist = document.createElement("ul");

    //and this is just jquery why of writing ajax request in plain javascript it has cross browser compatibility issue so its better to use jquery
    $.ajax(settings).done(function (response) {
        $.each(response, function (index, value) {

          //same thing here create all varibles to fodge that simple chain
          var newli = document.createElement("li");
          var article_title = value.title.rendered;
          var article_date = value.date;
          var article_link = value.link;
          var betterlink = "<a " + "href = " + article_link + " > " + "&nbsp;Article Link" + "</a>";

          newli.innerHTML = "<h3>" + article_title + "</h3>" + "<small>" + article_date + "</small>" + betterlink;

          //just append that child li to ul
          ullist.appendChild(newli);
          thecontainer.append(ullist);
        });
    });
});

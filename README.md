#WordPress Rest Api :fire:

Well :hatched_chick:**WordPress REST(Representational State Transfer) Api(Application Programing Interface)** will give you the power to extract specific data from your site or any other site and do anything with that data. But before these APIs come out you better be a PHP Ninja to pull all that data from any WordPress site which will help you to create any thing with data.

Ok let's look at an example where you have a site that runs on **WordPress** and you have another site which is your portfolio site and you want to make a widget that shows all your latest posts that you publish on your **WordPress** site. Untill now this was pretty impossible to achieve but with the upcoming REST APIs this can be done in a single REST query. 

**WordPress REST API** not only allows you to query the Data; but, also you have power to write, modify and delete the data. That means these APIs support all the CRUD(Create, Read, Update, Delete) operations on the data. That's it seriously! The fun part comes in where I can do this in any language. Ya! its pretty cool. 

###Now about JavaScript

If you have heard of code editor called :octocat: Atom you should check it out. Github has a cool native framework called :octocat: **Electron**, Atom is built on this native frame. The Electron framework runs a **Web Browser called Chrome** which has the best compatibility and Node.js support. It's no harm in calling Electron as the future of Desktop Applications. The reason to discuss this is because someone developed an app called "Calypso" which takes the power of **WordPress REST API** and Electron framework. So, Be sure to check out this new emerging tech called Electron. With JavaScript you can do almost anything. JavaScript is not about front-end anymore, with the help of Node.js you can do anything from File access to OS system calls, HTTP requests. So make sure you give it a spin too if you are not already using JavaScript for development.

Another software which may help you in your REST API journey is **Postman**, a chrome extension that takes your request and returns the response, so no more headaches in debuging. It also has multilingual documentation that teaches you how to get the correct response from REST API. The latest WordPress version comes with REST API inbuilt, before this you have to download a plugin which enables that feature for you. In this tutorial I have used Postman for getting that data. 

[Download Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en-GB)
[Go to Electron](http://electron.atom.io/)
[Atom Editor](https://atom.io/)
[WordPress REST API plugin](https://wordpress.org/plugins/json-rest-api/)

If you are interested in Electron visit Github and follow jlord she is in the dev team of Atom to keep up with all the new updates. You can tweet me @AkshayKanya to discuss more about this.
##Steps for this tutorial

1 ) Go To WordPress.org and Download latest WordPress version from there.

2 ) Go [WordPress REST API plugin](https://wordpress.org/plugins/json-rest-api/) here and Download and install this plugin.

3 ) Simple you win the battle now drop this folder in your server root and have fun.

## How to do CRUD(Create, Read, Update, Delete) Operations?
Why authentication? Authentication is required for CRUD operations its simple if you want to change your status on Facebook you have your username and password combination. You can see your status from another account but you can't change it so its simple as that.in offcial documentation Wordpress says you have two types of authentication 1st one is OAuth2 authentication and 2nd one is cookie based authentication if you build online website and you use Wordpress Rest Api you can use cookie based authentication and if your developing a desktop application kind of offline/online application then use OAuth2. Let's see how we can do the Read/Write operations with our data. Here we will do this localy using Postman for all the requests.

1) You have to Download simple plugin called [Basic Auth](https://github.com/WP-API/Basic-Auth) from this link and install it and activate that. simple

2) Head over to Postman and create an empty post request to this url localhost/testing/wp-json/wp/v2/posts we are using localhost so this is my site in xampp. The request returns a response in JSON as follows:
```
{
  "code": "empty_content",
  "message": "Content, title, and excerpt are empty.",
  "data": {
    "status": 400
  }
}
```
3) To create a new post you have to give it atleast three arguments, which are **Title, Content, excerpt**.

4) You can pass these parameters in three ways like JSON object or form data or URL parameters. Is it confusing? Ok lets make this simple. Here's how you do it using JSON objects. You can write your post like this :
Write this in Postman, choose body and select the row radio button and copy paste this and see the changes in :point_up_2: this demo   
```
{
	  "title": "this is great post",
	  "content": "this is the content",
	  "status":"publish"
}
```
![Alt text](/postman.jpg?raw=true "Optional Title")

5) After successfull call Postman gives you 200 OK response that means Success! :sweat_smile:

6) That was just one example for more refer this link. It will teach you how to make AJAX calls to change the data [tutorial link](https://code.tutsplus.com/tutorials/wp-rest-api-creating-updating-and-deleting-data--cms-24883).

7) Best of luck. :thumbsup:

if you trying to understand REST Api is almost same on all platforms i mean twitter api or facebook api for your test type this in your browser window http://graph.facebook.com/youtube you will get error message in json format that you need authentication to query that data so see its same sign in + authenticate + query your data and or defind your own endpoints or plug them in to another api request for example get the current Latitude and Longitude from google map api and plug thos cordinates into instagram api request and you get the photos that use the geolocation feature and tag. if you learning Web development or Front End Development its better to understand this cool tech. 

#WordPress Rest Api :fire:

Well :hatched_chick:**WordPress REST(REpresentational State Transfer) API(Application Programing Interface)** will give you the power to extract specific data from your site or any other site But before these APIs come out you better be a PHP Ninja to pull all that data from any WordPress site which will help you to create any thing with data.

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

## How you Do All CRUD(Create, Read, Update, Delete) Operations?
Why Authentication? authentication is required for crud operations its simple if you want to change your status on facebook you have your username and password combination. You can see your status from another account but you cant change it so its simple as that
so lets see how we can do anything with our data i do this all localy and i use postman for all my request passing so lets get started

1 ) You have to Download simple plugin called [Basic Auth](https://github.com/WP-API/Basic-Auth) from this link and install it and activate that. simple

2 )head over to postman and make a simple empty post request to this url localhost/testing/wp-json/wp/v2/posts i am on local so this is my site in xampp. now you get output like this its in json form.

{
  "code": "empty_content",
  "message": "Content, title, and excerpt are empty.",
  "data": {
    "status": 400
  }
}

3 ) to create a new post you have to atlest give it three arguments which is **Title, Content, excerpt**. ok i see that but how?

4 ) you can pass those parameter in three ways like json object or form data or url parameters. is it confusing ok lets make simple the 1st way json object you can write your post like this
Write this in postman choose body and select the row radio button and copy paste this and see the changes in :point_up_2: this demo   

{
	  "title": "this is great post",
	  "content": "this is the content",
	  "status":"publish"
}

see this pic

![Alt text](/postman.jpg?raw=true "Optional Title")

5 ) after successfull call postman give you 200 ok that means success :sweat_smile:

6 ) that was just one example for more refer this url will teach you have to make ajax call to change the data [tutorial link](https://code.tutsplus.com/tutorials/wp-rest-api-creating-updating-and-deleting-data--cms-24883).

7 ) best of luck for your learning path :thumbsup:


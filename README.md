# movie-fight
Search and compare two movies!

Movie Fight is an application where user can search for the movie on the left side of the screen and for a different one on the right side of the screen. 
Once the user types the movie title, we are going to fetch movie data from the OMDb API and pull up the information about the movie like Movie Poster, Awards, how much money it made, the critic rating and so on.
The actual movie fight starts after the user searched for the movie on the left hand side and then different one on the right hand side. For every different stat that we fetched about every different movie, we are going to compare them between the two. Whichever movie has a higher statistic, we are going to highlight in green, and whichever movie has lower statistic we are gonna show in yellow.

The application uses the autocomplete inputs, so whenever the user types just a part of the movie title, there is going to be a little pop up listing bellow that shows a couple of different movies related to the search term that the user just entered. The autocomplete widget is built in a separate JavaScript file and it's super reusable piece of code, which can be ran several times in the same project.

Here is a couple of screenshoots of the Home Page, Movies Search and Comparing movies.

## Home Page

![movie](https://user-images.githubusercontent.com/67807290/117582773-7ba7d600-b0b8-11eb-81a8-40cbad1624ca.jpg)

## Movies Search

![movie2](https://user-images.githubusercontent.com/67807290/117582774-7d719980-b0b8-11eb-9df7-a4c523b770ab.jpg)

## Comparing Movies
![movie3](https://user-images.githubusercontent.com/67807290/117582775-7f3b5d00-b0b8-11eb-99b1-d9390e97a941.jpg)

* Built with:
  * HTML5 & CSS3
  * The Modern CSS Framework [Bulma](https://bulma.io/)
  * JavaScript ES6
  
* API:
  * [OMDb API](https://www.omdbapi.com/) - The Open Movie Database

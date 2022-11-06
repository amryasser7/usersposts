# Fixed Users

This app shows users and there posts

## `Project Description`

The app shows number of users in a card view grid, each card has the users data and a button to show the users posts in another page.

Posts page is a list of accordions that shows the title and opens up to shows the post body. 

## `Technologies`

This app is created with react using (create-react-app)

we used the following libraries to help us with the app

1-react-router-dom: this lib help us with routing between pages through the client side. (to install use `npm i -D react-router-dom` )

2-axios: this lib help us with calling http requests. (to install use `npm install axios`)

3-react query: this lib is used with axios for better experience when fetching the data it helps us with what state is the request in now and if there is any error while getting the data. (to install use `npm install react-query`)

4-scss: we used sass as our preprocesser of our styles. (to install use `npm i sass`)

## `How to use the app?`

when you open the browser the list of users will be fetched and displayed in the card view grid, you can scroll in the grid to display the card you want, on clicking on the posts button you will see a list of posts for the user you selected with only the title visable on clicking on the title the body of the post is displayed and you can read the post.

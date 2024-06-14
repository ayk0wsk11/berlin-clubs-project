[See the App!](www.your-deploy-url-here.com) Berlin Clubs

## BERLIN CLUBS

## Description

- Our website is for everyone who likes to party in Berlin. We provide a clear overview of the genres playing in each club. If you're in the mood for a particular style of music, you can also filter by it.

## User Stories

- **404** - A page, showing that the URL does not exist
- **homepage** - Our homepage shows 3 random clubs from our database
- **sign up** - A page, where you can setup a userprofile with a username and password
- **login** - The possibility to login to a known user
- **All Clubs page** - A page where we show all our Clubs in the database
- **Club detail page** - Our detailed page for every Club in our database, showing the genres, location, description, comments and a map

## Backlog Functionalities

- **Rating-filter** - another filter, to filter for the most popular clubs
- **Capacity-filter** - a filter, to filter for the capacity of the clubs

## (Optional) Routes

- GET /
  - renders the homepage
  - renders the all clubs page
  - renders the club-detail-page
- PATCH
  - update existing clubs from the backend
- POST
  - add new clubs to the backend
- DELETE
  - delete clubs from the backend

## Models

"users":[
{
"id": 1,
"username": "Test",
"password": "12345"
}
],
"clubs": [
{
"id": 1,
"name": string,
"image": "image_url",
"description": "description of our club",
"address": {
"street": "",
"zip": "",
"city": "",
"country": ""
},
"genre": [
"Genre1",
"Genre2"
],
"comments": [
{
"text": "Best club ever",
"user": "Mostrich"
}],
"capacity": 0,
"src": {
"ra_guide": "link to resident advisor",
"iframe": "Google maps iframe"
}
}
]

## Collaborators

[Ayko](https://github.com/ayk0wsk11)
[Ayoub](https://github.com/95Ay)
[Jonathan](https://github.com/Senfjo)

### Project

[Repository Link](https://github.com/ayk0wsk11/berlin-clubs-project)
[Deploy Link](www.your-deploy-url-here.com)

### Trello

[Link to our trello board](https://trello.com/b/Dnxw5uyQ/berliner-clubs-webpage)

### Slides

[Slides Link](https://docs.google.com/presentation/d/1u2HEV14abukxYoQcWJiqiBnEKuFLSd0SVHsrBlmf1Ns/edit#slide=id.g2e569a3e5af_0_611)

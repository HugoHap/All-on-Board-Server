AUTH /api/auth/

|  Method  | URL | Description |
| ------------- | ------------- | ------------- |
| POST  | /signup  | Signup |
| POST  | /login  | Login |
| POST  | /logout | Logout  |

USERS /api/users

|  Method  | URL | Description |
| ------------- | ------------- | ------------- |
| GET  | /  | Users  |
| GET  | /id  | User profile  |
| PUT  | /:id/edit  | Edit user profile |
| DELETE  | /:id/delete  | Delete user profile  |

BOARDGAMES /api/boardgames

|  Method  | URL | Description |
| ------------- | ------------- | ------------- |
| GET  | /  | Games   |
| POST  | /create  | Create boardgames   |
| PUT | /:id/edit  | Edit boardgames  |
| DELETE  | /:id/delete  | Delete boardgames  |
| GET  | /:id/like ? | Like boardgames  |
| POST | /:id/dislike ?  | Dislike boardgames |

MATCH /api/match

|  Method  | URL | Description |
| ------------- | ------------- | ------------- |
| GET  | /  | Matches list   |
| POST  | /create  | Create matches   |
| PUT | /:id/edit  | Edit matches  |
| DELETE  | /:id/delete  | Delete matches  |
| GET | /:id/join  | Join matches |
| GET | /:id/unjoin  | Unjoin matches |

EVENT /api/event

|  Method  | URL | Description |
| ------------- | ------------- | ------------- |
| GET  | /  | Event   |
| POST  | /create  | Create event   |
| PUT | /:id/edit  | Edit event  |
| DELETE  | /:id/delete  | Delete event  |
| GET | /:id/join  | Join event |
| GET | /:id/unjoin  | Unjoin event |


GAME BOOKING /api/bookings

|  Method  | URL | Description |
| ------------- | ------------- | ------------- |
| GET  | /  | Boardgames to rent list   |
| POST  | /create  | Create booking   |
| PUT | /:id/edit  | Edit booking  |
| DELETE  | /:id/delete  | Delete booking  |


------------- CLIENTE --------------------

| /  | Home   |

AUTH

| URL | Description |
| ------------- | ------------- |
| /signup  | Sign Up   |
| /login  | Login   |

USUARIO

| URL | Description |
| ------------- | ------------- |
| /profile  | Profile   |
| /profile/bookings  | Bookings   |

LISTA JUEGOS

| URL | Description |
| ------------- | ------------- |
| /boardgames  | Games   |
| /boardgames/details  | Game details   |
| /boardgames/edit  | Edit game   |

LISTA JUEGOS PARA PRESTAR

| URL | Description |
| ------------- | ------------- |
| /rentgames  | Rent games list   |
| /rentgames/details  | Rent game details   |
| /rentgames/edit  | Rent game edit   |

LISTA PARTIDAS

| URL | Description |
| ------------- | ------------- |
| /match  | Matches list   |
| /match/details  | Match details   |
| /match/edit  | Edit match   |

LISTA EVENTOS

| URL | Description |
| ------------- | ------------- |
| /event  | Events list   |
| /event/details  | Event details   |
| /event/edit  | Edit event   |

LISTA ALQUILER

| URL | Description |
| ------------- | ------------- |
| /bookings  | Booking games   |
| /bookings/details  | Booking games details   |

```
LISTA DE COMPONENTES
├── src
│    └── Components
│       └── NavBar
│       └── FiltersBar
│       └── LikeGamesButton
│       └── DislikeGamesButton
│       └── Games
│       │    │── GamesList
│       │    │── CardGame
│       │    │── CommentsGame
│       │    │── CreateGameForm
│       │    └── EditGameForm
│       └── RentGames
│       │    │── RentGamesList
│       │    │── CardRentGame
│       │    │── CreateRentGameForm
│       │    └── EditRentGameForm
│       └── Matches
│       │    │── MatchesList
│       │    │── CardMatch
│       │    │── CreateMatchForm
│       │    └── EditMatchForm
│       └── Events
│       │    │── EventsList
│       │    │── CardEvent
│       │    │── CreateEventForm
│       │    └── EditEventForm
│       └── User
│       │    │── CardUser
│       │    │── UserList
│       │    │── FavGames
│       │    │── MyGames
│       │    │── MyRentGames
│       │    └── EditUserForm
│       └── Auth
│       │    │── SignUpForm
│       │    └── LoginForm
│       └── Footer
│       └── Spinner


PAGES
  └── HomePage
  └── GamesPage 
  └── GameDetailsPage
  └── EditGamePage
  └── RentGamesPage
  └── CreateGamesPage
  └── RentGamesDetailsPage 
  └── EditRentGamesPage
  └── MatchesPage
  └── MatchesDetailsPage
  └── EditMatchesPage
  └── EventPage
  └── EventDetailsPage
  └── EditEventPage
  └── UserProfilePage
  └── EditUserProfilePage
  └── UserProfileBookingsPage
  └── SignUpPage
  └── LoginPage
```

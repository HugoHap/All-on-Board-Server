AUTH /api/auth/

|  Method  | URL | Description |
| ------------- | ------------- | ------------- |
| GET  | /signup  | Signup  |
| POST  | /signup  | Signup POST  |
| GET  | /login  | Register Form POST  |
| POST  | /login  | Login Render  |
| POST  | /logout | Logout  |

USERS /api/users

|  Method  | URL | Description |
| ------------- | ------------- | ------------- |
| GET  | /  | Users  |
| PUT  | /:id/edit  | User Profile Page  |
| DELETE  | /:id/delete  | User Profile Edit Page  |

BOARDGAMES /api/boardgames

|  Method  | URL | Description |
| ------------- | ------------- | ------------- |
| GET  | /  | Games   |
| POST  | /create  | Create Games   |
| PUT | /:id/edit  | Delete profile POST  |
| DELETE  | /:id/delete  | Matches List  |
| GET  | /:id/like ? | Create Match Form  |
| POST | /:id/dislike ?  | Create Match Form POST  |

MATCH /api/match

|  Method  | URL | Description |
| ------------- | ------------- | ------------- |
| GET  | /  | Matches   |
| POST  | /create  | Create Games   |
| PUT | /:id/edit  | Delete profile POST  |
| DELETE  | /:id/delete  | Matches List  |
| GET | /:id/join  | Join Match |
| GET | /:id/unjoin  | Unjoin Match |

EVENT /api/event

|  Method  | URL | Description |
| ------------- | ------------- | ------------- |
| GET  | /  | Event   |
| POST  | /create  | Create event   |
| PUT | /:id/edit  | Delete profile POST  |
| DELETE  | /:id/delete  | Event List  |
| GET | /:id/join  | Event Match |
| GET | /:id/unjoin  | Unjoin event |


GAME BOOKING /api/bookings

|  Method  | URL | Description |
| ------------- | ------------- | ------------- |
| GET  | /  | Available games   |
| POST  | /create  | Create booking   |
| PUT | /:id/edit  | Edit profile POST  |
| DELETE  | /:id/delete  | Event List  |


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
| /boardgames/edit  | Game edit   |

LISTA JUEGOS PARA PRESTAR

| URL | Description |
| ------------- | ------------- |
| /rentgames  | Rent games   |
| /rentgames/details  | Rent game details   |
| /rentgames/edit  | Rent game edit   |

LISTA PARTIDAS

| URL | Description |
| ------------- | ------------- |
| /matches  | Matches games   |
| /matches/details  | Match details   |
| /matches/edit  | Edit match    |

LISTA EVENTOS

| URL | Description |
| ------------- | ------------- |
| /event  | Events games   |
| /event/details  | Event details   |
| /event/edit  | Edit event   |

LISTA ALQUILER

| URL | Description |
| ------------- | ------------- |
| /bookings  | Booking games   |
| /bookings/details  | Booking games details   |



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
  └── SignUpPage
  └── LoginPage

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

USUARIO

| URL | Description |
| ------------- | ------------- |
| /profile  | Profile   |
| /profile/bookings  | Available games   |

LISTA JUEGOS

| URL | Description |
| ------------- | ------------- |
| /boardgames  | Available games   |
| /boardgames/details  | Game details   |

LISTA PARTIDAS

| URL | Description |
| ------------- | ------------- |
| /matches  | Matches games   |
| /matches/details  | Match details   |

LISTA EVENTOS

| URL | Description |
| ------------- | ------------- |
| /event  | Matches games   |
| /event/details  | Match details   |

LISTA ALQUILER

| URL | Description |
| ------------- | ------------- |
| /bookings  | Booking games   |
| /bookings/details  | Match details   |



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
  └── HomePages
  └── GamePages 
  └── GameDetailsPages 
  └── EditGamePages
  └── RentGamesPages
  └── RentGamesDetailsPages 
  └── EditRentGamesPages
  └── MatchesPages
  └── MatchesDetailsPages
  └── EditMatchesPages
  └── EventPages
  └── EventDetailsPages
  └── EditEventPages
  └── UserProfilePages
  └── EditUserProfilePages
  └── SignUpPages
  └── LoginPages

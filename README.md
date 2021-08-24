# coding-game

Game where you compete with your frinds in coding challange.

# TASKs

## 1 : Model a SQL Database : Entities in Coding game

### Questions

- id (int-pk)
- queestion_text (nvarchar)
- difficulty (int)
- category_id (int-fk)
- correct_answer

### Categories

- id (pk)
- category_name

### Users

- id
- name
- email
- password
- points
- win
- lose
- (maybe) fav_lang

## React Architecture for Login and User Pages

!['Login Architecture'](https://bezkoder.com/wp-content/uploads/2020/08/react-redux-jwt-authentication-token-example-project-overview.png)

- App -> includes state for loggedIn, and User

* if loggedIn hook is not True then render Login and register components (Formik Forms)

  - Auth with user api, axios , if authenticated set user hook.
  - if not authenticated alert

* if loggenIn hook is True then render Profile and home components with user parameters.

## TODOS

- Front end design.
  - Deciding colors (green-black ?)
  - Logo
  * Typography (decide font)
  * Theme (uigradients)
  * icons in sign in, signup pages

* Spring boot security auth with email upgrade.

* Building API's (define apis needed)

  - Get question by category and difficulty
  - External quiz api (https://quizapi.io/)

* Question scraping

* Design pointing system

* Client server architecture, turn game into online

* Login page for user, welcoming page with user's name, win rate, games played.

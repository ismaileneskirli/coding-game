# coding-game

Game where you compete with your frinds in coding challange.
Front end of our project has been moved to another repository, please go :
https://github.com/ismaileneskirli/coding-game-frontend

# TASKs

## 1 : Model a SQL Database : Entities in Coding game

### questions

- id (int-pk, auto increment)
- queestion_text (nvarchar)
- difficulty (int 0-1-2)
- category_name (string : linux)
- correct_answer (string)

### users

- id
- name
- email
- password
- points
- win
- lose
- (maybe) fav_lang
- isValid (default false)

## React Architecture for Login and User Pages

!['Login Architecture'](https://bezkoder.com/wp-content/uploads/2020/08/react-redux-jwt-authentication-token-example-project-overview.png)

- App -> includes state for loggedIn, and User

* if loggedIn hook is not True then render Login and register components (Formik Forms)

  - Auth with user api, axios , if authenticated set user hook.
  - if not authenticated alert

* if loggenIn hook is True then render Profile and home components with user parameters.

## TODOS

- [x] Login page for user, welcoming page with user's name, win rate, games played.

- [] Question scraping for different categories, difficulty levels.

  - 5 questions for Linux 1,2 level
  - 5 questions for DevOps 0 level
  - 5 questions for Java 2 level

  * Other possible categories : Python, React, Kafka, Docker Commands, Algorithm

- [] Building API's (define apis needed)
  - Get question by category and difficulty, Example usage :getByCategoryAndDifficulty("Linux",2)
  - External quiz api (https://quizapi.io/)

* [] Front end design.
  - Deciding colors (green-black ?)
  - Logo
  * Typography (decide font)
  * Theme (uigradients)
  * icons in sign in, signup pages
  * brand name

- [] Spring boot security auth with email upgrade.(oguzhan)

- [] Client server architecture, turn game into online (for later)

- [] Design matching system (for later)

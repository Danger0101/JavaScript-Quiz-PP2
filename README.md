# JavaScript-Quiz-PP2

JavaScript quiz made to showcase skills using JavaScript, HTML, and CSS. The purpose is to allow users to test their knowlesge of JavaScript.
---
## User Stories
- As a user, I want to be able to start the quiz and see the first question.
- As a user, I want to see a progress indicator showing the current question number out of the total questions.
- As a user, I want to see a score indicator showing my current score during the quiz.
- As a user, I want to see multiple choice options for each question.
- As a user, I want to select an answer and see if it's correct or incorrect.
- As a user, I want to see my score updated if my answer is correct.
- As a user, I want to move to the next question automatically after answering a question.
- As a user, I want to see the quiz end after answering all questions or reaching a maximum number of questions.
- As a user, I want to see my final score at the end of the quiz.
- As a user, I want to have the option to restart the quiz after finishing it.
- As a user, I want to see a leaderboard with the top scores.
- As a user, I want to be able to submit my score and username to the leaderboard.
- As a user, I want to see my position on the leaderboard after submitting my score.
- As a user, I want to see a message if my score is not high enough to make it to the leaderboard.
- As a user, I want to be able to go back to the main menu from the leaderboard.

## Features
### Index

Landing page of JavaScript Showdown. It displays a play button when pressed that starts the quiz. Also visible is a leaderboard button which will take you to the leaderboard page.
---
### Quiz

This page starts with a loading animation which will be hidden when the quiz has fully loaded. From here a user will select an answer and it will highlight red if it is wrong or green if its correct and after 1 second it will load the next question. There is a HUD that will diplay the score and current question with a progress bar. After the final question it will take you to the end page.
---
### End

Page will load and show your score where you will be able to save your score to the leaderboard. There is a input field for the username and a submit button to save the score.
---
### Leaderboard

This will show the leaderboard data upon load.
---
## Testing
### How I tested
| What test was completed | Passed? Y(yes)/N(no) |
|:-----------------------:|:-------------------:|
| Responiveness on Samsung A41 Phone | Y |
| Responsiveness on Tablet | Y |
| Responsiveness om desktop Google chrome 1920px x 1080px | Y |
| Responsiveness om desktop Google chrome 5120px x 1440px| Y |
| Responsiveness om desktop Google chrome 2560px by 1440px | Y |
| Google chrome lighthouse | Y |
| Contrast checker | Y |
| CSS Validation | Y |
| JavaScript Validation script.js | Y |
| JavaScript Validation end.js | Y |
| JavaScript Validation highscores.js | Y |
| HTML Validation | N |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
- Google Chrome (various resolutions)
- Samsung A41 Phone (image is slightly outdated new paragrap texts)

![Samsung A41 Phone]()

- Teclast Tablet (image is slightly outdated new paragrap texts)

![Samsung A41 Phone]()

### bugs encountered

| Bugs/Issues Encountered          | How problem was fixed                               | Fixed Y(yes)/N(no) |
|:--------------------------------:|:---------------------------------------------------:|:------------------:|
| Play button was not loading quiz | was a missing bracket that was deleted accidentally | Y                  |
| Questions Were Not Displaying    | Was a typo in json file name in script.js           | Y                  |
| Issue placeholder                |                                                     |                    |
| Issue placeholder                |                                                     |                    |
| Issue placeholder                |                                                     |                    |
| Issue placeholder                |                                                     |                    |
| Issue placeholder                |                                                     |                    |

---

## Validation testing
### CSS
-checked with [W3 CSS Validator](https://jigsaw.w3.org/css-validator/) Any CSS issues?

![W3 CSS Validation Image](./assets/images/readme/cssvalidation/cssvalidation.png)

### HTML
- checked with [W3 HTML Validator](https://validator.w3.org/) were there any warnings or errors?

**Index.html**
![W3 HTML Validation Image Index Page](assets/images/readme/htmlvalidation/indexvalidation.png)

**Quiz.html**
![W3 HTML Validation Image Quiz Page](assets/images/readme/htmlvalidation/quizvalidation.png)

**End.html**
![W3 HTML Validation Image End Page](assets/images/readme/htmlvalidation/endvalidation.png)

**Leaderboard.html**
![W3 HTML Validation Image Leaderboard Page](assets/images/readme/htmlvalidation/leaderboardvalidation.png)

**404.html**
![W3 HTML Validation Image 404 Page](./assets/images/readme/htmlvalidation/404validation.png)

### Contrast
- Checked all pages with [A11Y contrast checker](https://color.a11y.com/) Any contrast issues?

![Contrast checker Image](./assets/images/readme/contrast/colorcontrasttest.png)

### JavaScript

### Index.html
**Chrome lighthouse desktop**

![Screencap index.html lighthouse desktop](./assets/images/readme/lighthouse/index/indexdesktoplh.png)

**Chrome mobile lighthouse**

![Screencap index.html lighthouse mobile](./assets/images/readme/lighthouse/index/indexmobilelh.png)

### Quiz.html
**Chrome lighthouse Desktop**

![Screencap quiz.html lighthouse desktop](./assets/images/readme/lighthouse/quiz/quizdesktoplh.png)

**Chrome lighthouse mobile**

![Screencap quiz.html lighthouse mobile](./assets/images/readme/lighthouse/quiz/quizmobilelh.png)

### End.html
**Chrome lighthouse Desktop**

![Screencap end.html lighthouse desktop](./assets/images/readme/lighthouse/end/endmobilelh.png)

**Chrome lighthouse mobile**

![Screencap reviews.html lighthouse mobile](./assets/images/readme/lighthouse/end/endmobilelh.png)

### Leaderboard.html
**Chrome lighthouse Desktop**

![Screencap leaderboard.html lighthouse desktop](./assets/images/readme/lighthouse/leaderboard/leaderdesktoplh.png)

**Chrome lighthouse mobile**

![Screencap signup.html lighthouse mobile](./assets/images/readme/lighthouse/leaderboard/leadermobilelh.png)

### 404.html
**Chrome lighthouse Desktop**

![Screencap leaderboard.html lighthouse desktop](./assets/images/readme/lighthouse/404/404desktoplh.png)

**Chrome lighthouse mobile**

![Screencap signup.html lighthouse mobile](./assets/images/readme/lighthouse/404/404mobilelh.png)

## Deployment
Used github pages [View Site here]()

## Technology used
- HTML
- CSS
- JavaScript
- Json
- Fontawesome
- Google Fonts
- Visual Studios Code (VSCode)
- Github
- Hypervisor
- Git
- Gyzo
- MS Paint
- Gimp version 2.10.22
- Github Desktop App

## Wireframes
### Index.html
![index.html wireframe]()

### Quiz.html
![quiz.html wireframe]()

### End.html
![end.html wireframe]()

### Leaderboard.html
![leaderboard.html wireframe]()

## Credits
**Code related**
- [dcode](https://www.youtube.com/watch?v=mntgaH5x-GQ&t=95s) for how to add a colored navigation bar.

- W3Schools for inspiration on the loading CSS for use on quiz page.

- My wife who’s been supper supportive of this change in career for me and just being out right amazing we will get her into this one way or another I am sure.

- Code Institute for providing an excellent accelerated learning platform worth every penny.
---
## Future feature ideas
| **Features to add** | **Added Y(yes)/N(no)** |
|:-------------------:|:--------------------:|
| Pages for menu, leaderboard, quiz, and an end page | Y |
| Fifteen Quiz questions to start | Y |
| HUD to show score and question progress | Y |
| Leaderboard which uses local storage (svae/load) | Y |
| Loader to display whil quiz loads up | Y |
| Add more questions | N |
| Add a difficulty picker | N |
| Added a database for scores | N |
| Backend database for score keeping | N |
| Seperate leaderboards based on difficulty | N |
| How to play button that opens a div on how to play the quiz | N |
| Footer with links to author | N |
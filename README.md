# JavaScript Showdown!

Created using JavaScript, HTML, and CSS, this interactive quiz serves as a demonstration of my programming skills. Its primary objective is to provide users with a platform to assess their proficiency in JavaScript. The quiz encompasses four distinct pages, each contributing to the seamless functioning of the interactive experience. Through the implementation of five separate scripts, the code maintains clarity and conciseness by targeting specific functionalities on each page.

The rationale behind employing a multi-page approach, as opposed to a singular page, lies in the pursuit of organized and structured code. This design choice results in more concise scripts, tailored to the unique requirements of each page. While a unified page may offer quicker initial loading times, the segmented layout aligns better with my creative intentions. Furthermore, this architecture guarantees a fresh quiz experience with each iteration or page refresh, enhancing user engagement.

Optimized for traditional desktop and laptop browsers, as well as portrait-oriented mobile devices, the quiz functions flawlessly within these parameters. However, landscape mode may present compatibility challenges.

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
- As a user, I want to have the choice to submit my score and a username to the leaderboard.
- As a user, I want to see the top five scores on the leaderboard.
- As a user, I want to be able to go back to the main menu from the leaderboard.
- As a user, I want to be able to go back to the main menu from the quiz.
- As a user, I want to be able to go back to the main menu from a 404 error screen should it arise.
- As a user, I want to be able to see how to play before starting.
- As a user, I want to be able to check out the author.

## Features
### Index Page

Landing page of JavaScript Showdown. It displays a play button when pressed that starts the quiz. Also visible is a leaderboard button which will take you to the leaderboard page.

![Index Page](./assets/images/readme/features/index.png)

#### How To Play

![How To Play](./assets/images/readme/features/howtoplay.png)
---
### Quiz Page

This page starts with a loading animation which will be hidden when the quiz has fully loaded. From here a user will select an answer and it will highlight red if it is wrong or green if its correct and after 1 second it will load the next question. There is a HUD that will diplay the score and current question with a progress bar. After the final question it will take you to the end page.

![Quiz Page](./assets/images/readme/features/quiz.png)

#### Loader
This appears while quiz loads then disapears.

![Loader](./assets/images/readme/features/loader.png)
#### Correct Answer

![Correct Highlight](./assets/images/readme/features/correct.png)

#### Incorrect Answer

![Incorrect Highlight](./assets/images/readme/features/incorrect.png)
---
### End Page

Page will load and show your score where you will be able to save your score to the leaderboard. There is a input field for the username and a submit button to save the score.
![End Page](./assets/images/readme/features/end.png)
---
### Leaderboard Page

This will show the leaderboard data upon load.

![Leaderboard Page](./assets/images/readme/features/lead.png)
---
### 404 Page

This will show the leaderboard data upon load.

![404 Page](./assets/images/readme/features/404.png)
---
### No JavaScript

This will show if browser doesn't support JavaScript or a user has disabled it.

![No Java Script Warning](./assets/images/readme/features/nojs.png)
---
### Please Rotate

This appears when users has mobile device is in landscape not currently catching all devices.

![Please Rotate](./assets/images/readme/features/rotate.png)
---
### Footer

Footer with social links to the author that open in new tabs.

![Author Social Links Footer](./assets/images/readme/features/footer.png)
---
## Testing
### How I tested
| What test was completed | Passed? Y(yes)/N(no) |
|:-----------------------:|:-------------------:|
| Responiveness on Samsung A41 Phone Portrait | Y |
| Responiveness on Samsung A41 Phone Landscape | Y |
| Responsiveness on Teclast Tablet Portrait | Y |
| Responsiveness on Teclast Tablet Lanscape | Y |
| Responsive behaviours on over 12 mobile device settings in chrome dev tools | Y |
| Responsiveness om desktop Google chrome 1920px x 1080px | Y |
| Responsiveness om desktop Google chrome 5120px x 1440px| Y |
| Responsiveness om desktop Google chrome 2560px by 1440px | Y |
| Google chrome lighthouse | Y |
| HTML Validation All | Y |
| Contrast checker | Y |
| CSS Validation | Y |
| JavaScript Validation indez.js | Y |
| JavaScript Validation quiz.js | Y |
| JavaScript Validation highscores.js | Y |
| JavaScript Validation end.js | Y |
| JavaScript Validation error.js | Y |
| Mobile landscape where width <= 768px with an error message to rotate | Y |
| Message for no JavaScript displaying when it should | Y |
| Footer stays at bottom of page always | Y |
| Rotate Message shows when it should | Y |
| No JavaScript message displays when its not installed or disabled | Y |
| 404 page at deployed location works as intended | Y |

### bugs encountered

| Bugs/Issues Encountered          | How problem was fixed                               | Fixed Y(yes)/N(no) |
|:--------------------------------:|:---------------------------------------------------:|:------------------:|
| Play button was not loading quiz | was a missing bracket that was deleted accidentally | Y |
| Questions Were Not Displaying | Was a typo in json file name in script.js | Y |
| Mobile device landscape not displaying as intended. Author links and title appear in odd fashion on certian resolutions | Ongoing issue tried diffrent css finally found one that works although going to keep my script for the set resolutions to rotate back as it is best experiance. still | Y |
| Author Links appearing underneath other elements at certain resolutions | Removed Z index | Y |
| How to div was displaying upon load | Added hidden class to it to hide it on load | Y |
| Responsive css attempt of landscape mode set everything in an od skew to left | Removed the css that caused issue | Y |
| Over responsive footer | There was a buggy CSS code using footer and anchor tags I removed it | Y |
| Font was difficult to read for some users | Replaced font with a more user friendly font | Y |
| Hover effect remains active after selecting an answer and next question is loading | Added media querry to remove hover effect on touch devices | Y |
| Hover effect disabled on all devices | Added missing media querry to the css | Y |

---

## Validation testing
### CSS
- checked with [W3 CSS Validator](https://jigsaw.w3.org/css-validator/) No CSS issues

![W3 CSS Validation Image](./assets/images/readme/cssvalidation/cssvalidation.png)

### HTML
- checked with [W3 HTML Validator](https://validator.w3.org/) No HTML validation issues found

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

All Scripts checked with [JSHint](https://jshint.com/)

| **Sctipt** | **Any Errors?** | **Warnings?** | Other note worthy comments |
|:----------:|:---------------:|:-------------:|:--------------------------:|
| index.js | No Errors | 5 Warnings all to do with compatibility | None |
| quiz.js | No Errors | 43 Warnings all to do with compatibility | None |
| end.js | No Errors | 11 Warnings all to do with compatibility | Save highscore varriable isnt used in script but is on end.html save button press |
| highscore.js | No Errors | 6 Warnings all to do with compatibility | None |
| error.js | No Errors | 2 Warnings all to do with compatibility | None |

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
Used github pages to bring the site to life [View Site here](https://danger0101.github.io/JavaScript-Quiz-PP2/index.html)

## Technology used
- [HTML](https://www.w3schools.com/html/default.asp)
- [CSS](https://www.w3schools.com/css/default.asp)
- [JavaScript](https://www.w3schools.com/js/default.asp)
- [Json](https://www.w3schools.com/js/js_json_intro.asp)
- [Fontawesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [Visual Studios Code (VSCode)](https://visualstudio.microsoft.com/)
- [Github](https://github.com/)
- [Hypervisor (virtual enviorment)](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/about/)
- [Git](https://git-scm.com/)
- [Gyazo](https://gyazo.com/en)
- [MS Paint](https://apps.microsoft.com/store/detail/paint/9PCFS5B6T72H)
- [Github Desktop App](https://desktop.github.com/)

## Wireframes
### Index.html
![index.html wireframe](./assets/images/readme/wireframes/indexwireframe.png)

### Quiz.html
![quiz.html wireframe](./assets/images/readme/wireframes/quizwireframe.png)

### End.html
![end.html wireframe](./assets/images/readme/wireframes/endwireframe.png)

### Leaderboard.html
![leaderboard.html wireframe](./assets/images/readme/wireframes/leaderboardwireframe.png)

### 404.html
![404.html wireframe](./assets/images/readme/wireframes/404wireframe.png)

## Credits
**Code related**
- [My project one](https://github.com/Danger0101/Meaningful_Careers_P1) for structure of this reademe file

- My previous assessor for ideas on the readme file. Sorry do to the nature of assessing I have no idea who you are but thank you for the invaluable advice.

- [W3Schools](https://www.w3schools.com/) for inspiration on the loading CSS for use on quiz page and to find out uses for all type of varriables and inspiration to the questions. Invaluable tool so much knowledge for freee its crazy.

- [My wife](https://www.twitch.tv/flame_121) who’s been supper supportive of this change in career for me and just being out right amazing we will get her into this one way or another I am sure.

- [Code Institute](https://codeinstitute.net/) for providing an excellent accelerated learning platform worth every penny.
---
## Future feature ideas
| **Features to add** | **Added Y(yes)/N(no)** | **Why not added?** |
|:-------------------:|:--------------------:|:-------:|
| Pages for menu, leaderboard, quiz, and an end page | Y | N/A |
| Fifteen Quiz questions to start | Y | N/A |
| HUD to show score and question progress | Y | N/A |
| Leaderboard which uses local storage (svae/load) | Y | N/A |
| Loader to display whil quiz loads up | Y | N/A |
| Footer with links to author | Y | N/A |
| Add more questions to aproximatly 40+ | Y | N/A |
| How to play button that opens a div on how to play the quiz | Y | N/A |
| Add no JavaScript Error text | Y | N/A |
| Remove hover effect on mobile/touch devices where there is no active cursor to hover | Y | N/A |
| Add a difficulty picker | N | One of the two ways I might take it in the future |
| Maybe instead of difficulty checker having option to choose othe coding language quiz's | N |  One of the two ways I might take it in the future |
| Backend database for score keeping | N | Will be added in the future when I have a good idea how to do it although I couldn't find a reliable way to make it work through github pages |
| Seperate leaderboards based on difficulty or based on quiz type | N | Will be implemented at the time these features go live |
| Add more questions to total 100+ | N | Was looing to continue it further in the future although I feel 40+ is sufficient for the time being |
| Swap leaderboard to a table instead of a list although for now its as intended  | N | When difficulty or other quiz types are added this is the planed route and I will make it so you can switch between the leaderboards as well. Only one will show at a time. |
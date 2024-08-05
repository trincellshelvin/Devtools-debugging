<--This is a copy from Robert's file since I completed the original one-->
# Web Debugging and Optimization Exercise

## Overview

This exercise is designed to improve your skills in web debugging and optimization. You will be working with an intentionally flawed web application. Your task is to identify and document the problems in the provided HTML, CSS, and JavaScript files.

## Instructions

Copy this README.md into your Devtools REPO in a new MD file called Day-5.md

### Step 1: Identify Problems

Go through the provided files (`index.html`, `style.css`, and `app.js`). Each file contains several marked problems (indicated by comments like `<!-- Problem 1: -->`, `/* Problem 5: */`, etc.). Your task is to identify what each problem is and why it is an issue.

### Step 2: Document Each Problem

In this README.md file, document each problem. Write a sentence for each problem explaining what the issue is and why it's problematic. Use the format below for your documentation:

#### Problem 1:

- Description: [Missing Meta data]

#### Problem 2:

- Description: [CSS call link is outside of the head and unnecessary / in tags.]

#### Problem 3:

- Description: [Class in internal styling isn't assigned to a specific element.]

#### Problem 4:

- Description: [Image is too big for ARIA compliance and has a / at the end of the tag]

#### Problem 5:

- Description: [for page execution, we want our script first. There is also use tracking in the cdn script because of use of those elements.]

#### Problem 6:

- Description: [CSS style !Important isn't needed]

#### Problem 7:

- Description: [Image size isn't compliant with ARIA.]

#### Problem 8:

- Description: [Unused or assigned style script]

#### Problem 9:

- Description: [n/a problem not marked nor showing in dev tools]

#### Problem 10:

- Description: []

[Continue with the remaining problems]

### Step 3: Propose Solutions

For each identified problem, propose a solution or an optimization strategy. Briefly describe how you would fix the issue.

#### Problem 1:

- Solution: [Added meta data to page.]

#### Problem 2:

- Solution: [Moved CSS style link to head and removed / from all instances in head tags where they shouldn't be.]

#### Problem 3: 

- Solution: [Changes internal styling class to match and existing class id in html.]

#### Problem 4:

-Solution: [Removed / and resized image]

#### Problem 5:

- Solution: [changed the position of the script links to allow the external file to be called before the cdn linked version. left the tracker codes in the link for the cdn]

#### Problem 6:

- Solution: [Removed !Important as it is know longer required.]

#### Problem 7:

- Solution: [Resized it to comply with the standard]

#### Problem 8:

- Solution: [Removed unused script from style sheet]

#### Problem 9:

- Solution: [n/a problem not marked nor showing in dev tools]

#### Problem 10:

- Solution: []

[Continue with solutions for the remaining problems]

### Step 4: Reflect

After completing the exercise, write a brief reflection on what you learned from this debugging and optimization process. Discuss any new insights you gained and how you might apply these skills in future projects.

## Submission

Submit this README.md file with all the problems documented and solved, along with your reflection. Ensure that your explanations are clear and concise.

---

This exercise is an opportunity to practice critical web development skills. Pay close attention to detail and think about how each issue affects the overall performance and user experience of the web application.

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

- Description: [It is missing the meta data and close tag for the head of the page including the title of the website.]

#### Problem 2:

- Description: [Image tag was improperly closed with a /]

#### Problem 3:

- Description: [Javascript calls were in the wrong order, you want the internal js before the cdn js file call to avoid potentional conflicts.]

#### Problem 4: 

- Description: [The class id in the problem doesn't point to a specific item within the document that it is attempting to apply the bold style to.]

#### Problem 5:

- Description[Has no assigned value for the margins and pddding.]

#### Problem 6:

- Description: [Class is not assigned to a specific element within the HTML.]

#### Problem 7: 

- Description: [Based upon the image id, there was no need to use the image tag for a selector]

#### Problem 8:

- Description: [class selector was missing specific styling for the div container.]

#### Problem 9:

- Description: [function was missing what element to create]

#### Problem 10:

- Description: [no error found in this function]

#### Problem 11:

-Description: [no error found in this function]

[Continue with the remaining problems]

### Step 3: Propose Solutions

For each identified problem, propose a solution or an optimization strategy. Briefly describe how you would fix the issue.

#### Problem 1:

- Solution: [Add the missing head item such as meta data and title with any appropriate closing tags and removed the / from all lines where it shouldn't be.]

#### Problem 2:

- Solution: [Properly closed the image tag]

#### Problem 3:

- Solution: [Switched the links to the javascript files around to call the app files first.]

#### Problem 4:

- Solution: [Changed the class id for the style to the id listed for the container itself.]

#### Problem 5: 

- Solution: [Added 5% to the padding and margins for added value.]

#### Problem 6:

- Solution: [Removed unidentified classes from style sheet.]

##### Problem 7:

- Solution: [Removed the image tag from the style selector id.]

#### Problem 8:

- Solution: [applied width to the style to have the container fit the content instead of the entire page.]

#### Problem 9:

- Solution: [changed 'p' to a'para' as the element to create in the function.]

#### Problem 10:

- Solution: [no error found, n/a]

#### Problem 11:

- Solution: [no error found, n/a]


[Continue with solutions for the remaining problems]

### Step 4: Reflect

After completing the exercise, write a brief reflection on what you learned from this debugging and optimization process. Discuss any new insights you gained and how you might apply these skills in future projects.
### Reflection:
Day 5 has been evidence that even one mistake when fixed can change the outcome of your code (while using developer tools) for the better by a simple incorrect declaration. I gained insight as to how these tools can troubleshoot more than page load issues. It can show you where the code went wrong. 

#### Problem 1: Meta data assists the browser with what the page is about to be about. It allows the browser to know how to start processing the data within the HTML, CSS, and Javascript pages. 
## Submission

Submit this README.md file with all the problems documented and solved, along with your reflection. Ensure that your explanations are clear and concise.

---

This exercise is an opportunity to practice critical web development skills. Pay close attention to detail and think about how each issue affects the overall performance and user experience of the web application.

## Project #3 - GCP Selenium script

The Selenium script produced by my coworker at Cisco is intended for internal use by our team to automate the process of uploading builds to Google Cloud Platform. The script is ran on a headless browser and includes logs that display in the terminal so a user knows what points the script has reached. The script cuts time and efforts for any team member needing to manually upload any builds. 
The role I played in coding this automation script is troubleshooting the issue of identifying the DUO verification code that generates during login. Since the script is run in a headless browser we are unable to see the code. I found a way for the Selenium script to read the page by using the web pages source code that corresponds to the duo code. Once we grabbed this piece we included in the code a log that sends the code into the terminal so a user can read it.

## Technologies
The entire automation script is written in Python and the only libraries I needed to import were selenium and webdriver.

## Competencies
### JF XX.XX
- List the full text of the job function first
- Describe a situation where you demonstrated  this job function.
- Summarize the actions you took to accomplish the goal. 
- Emphasize the results of this action for your team or your learning. 
- Connect the competentcy to this project

### JF XX.XX
- List the full text of the job function first
- Describe a situation where you demonstrated  this job function.
- Summarize the actions you took to accomplish the goal. 
- Emphasize the results of this action for your team or your learning. 
- Connect the competentcy to this project

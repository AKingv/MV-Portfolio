## Project #3 - GCP Selenium script

The Selenium script produced by my coworker at Cisco is intended for internal use by our team to automate the process of uploading builds to Google Cloud Platform. The script is ran on a headless browser and includes logs that display in the terminal so a user knows what points the script has reached. The script cuts time and efforts for any team member needing to manually upload any builds. 
The role I played in coding this automation script is troubleshooting the issue of identifying the DUO verification code that generates during login. Since the script is run in a headless browser we are unable to see the code. I found a way for the Selenium script to read the page by using the web pages source code that corresponds to the duo code. Once we grabbed this piece we included in the code a log that sends the code into the terminal so a user can read it.

## Technologies
The entire automation script is written in Python and the only libraries I needed to import were selenium and webdriver.

## Competencies
### JF 1
1.2 Knows all the roles and responsibilities within the software development lifecycle (who is responsible for what)
1.3 Knows all the roles and responsibilities of the project life cycle within their organization, and their role
1.4 Knows the similarities and differences between different software development methodologies, such as agile and waterfall.
1.5 Knows how teams work effectively to produce software and how to contribute appropriately
1.6 Shows curiosity to the business context in which the solution will be used, displaying an inquisitive approach to solving the problem. This includes the curiosity to explore new opportunities, and techniques; the tenacity to improve methods and maximise performance of the solution; and creativity in their approach to solutions.
1.7 Demonstrates creativity and tenacity in their approach to solutions and the methods used to come to a solution for example, sees the task through to the end by devising new solutions and despite obstacles and problems along the way.

### JF 2
2.1 Knows organizational policies and procedures relating to the tasks being undertaken, and when to follow them. For example, the storage and treatment of General Data Protection Regulation (GDPR) sensitive data.
2.2 Understands how to create and analyze artefacts, such as use cases and/or user stories
2.3 Applies logical thinking. For example, uses clear and valid reasoning when making decisions related to undertaking work instructions
2.4 Demonstrates commitment to continued professional development.

### JF 3
3.1 Knows how to design software approaches and patterns, to identify reusable solutions to commonly occurring problems
3.2 Knows relevant and up-to-date software designs and how to read and implement functional/technical specifications
3.5 Understands how to follow software designs and functional/technical specifications
3.6 Maintains a productive, professional and secure working environment
3.7 Acts with integrity with respect to ethical, legal and regulatory ensuring the protection of personal data, safety and security.

### JF 4
4.2 Knows the principles and uses of relational and non-relational databases
4.3 Understands and can link code to data sets
4.4 Understands how to create a logical and maintainable codebase
4.5 Is able to build, manage and deploy code into the relevant environment
4.7 Understands how to apply algorithms, logic and data structures
4.8 Is able to interpret and implement a given design whilst remaining compliant with security and maintainability requirements

### JF 5
5.1 Knows relevant and up-to-date software testing frameworks and methodologies
5.2 Understands how to test code and analyze results to correct errors found using unit testing
5.5 Understands and can apply structured techniques to problem solving, can debug code and can understand the structure of programmes to identify and resolve issues

### JF 6
6.1 Knows how best to communicate using different communication methods and how to adapt appropriately to different audiences
6.2 Understands how to follow company, team or client approaches to continuous integration, version and source control
6.3 Able to communicate software solutions and ideas to technical and non-technical stakeholders
6.4 Works independently and takes responsibility. For example, has a disciplined and responsible approach to risk, and stays motivated and committed when facing challenges
6.5 Works collaboratively with a wide range of people in different roles, internally and externally, with a positive attitude to inclusion & diversity
6.6 Shows initiative for solving problems within their own remit, being resourceful when faced with a problem to solve
6.7 Communicates effectively in a variety of situations to both a technical and nontechnical audience.

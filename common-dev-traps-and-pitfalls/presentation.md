
# Presentation

## Session Information

### You're Only Human: Common Development Traps and Pitfalls and How to Avoid Them

Let’s face it, you’re only human.

Nobody sets out to make mistakes. But as human beings, we’re inherently flawed, so mistakes are inevitable. As a software developer, it can feel like the odds are increased exponentially. There are countless ways for projects to go awry.

In my 17+ years of development experience, I’ve worked on small and large projects, solo and on teams, utilizing a wide variety of technologies and platforms, across many different industries. If there’s a way to mess something up, I’ve probably done it.

In this talk, I’ll share with you some of the software development traps and pitfalls that I’ve encountered in my career. I’ll tell you how they happened and what we did to get out of them. We’ll look at ways to identify these problems as early as possible. Or better yet, how to avoid them altogether. Learn from my mistakes.

## Introduction

### My Experience

Over the last 17 years or so I've worked on a wide variety of projects and situations

* Sometimes by myself...
* Sometimes on small teams
* Sometimes on slightly bigger teams
* Often without someone in an official PM role

### I've made a lot of mistakes

* In this talk I'm going to share some of these with you
* And talk about how you might avoid making these mistakes yourself

### This isn't a comprehensive list

* These are mistakes that I've made or have been part of in one way or another over the years
* There are many other kinds of mistakes that you can make

## Development Traps and Pitfalls

### Boiling the ocean

Story: Tell my experience of working on Tracker

We were replacing an old (10+ years in development) LOB app
Everyone in the company used this app on a daily basis
We weren't just writing a new client app, we were also migrating to a completely new database
Because of this, we decided to not release the app into production until it was completely done
Originally estimated as a one year project... it took us 5 years to complete the project
Once we finally cut over to the new app, the transition was rough
  It took months for the dust to settle (so to speak)
Overall, this was a very difficult process
In retrospect, we should have worked harder at exploring a more incremental, dare I say, "agile" approach to developing the app

#### Tips

* Identify your MVP... minimum viable product
  * What is the minimum set of features that you need in order to launch?
* Look for opportunities to break monolithic components into smaller components
* If you're replacing an existing application, is there a way that you can incrementally migrate groups of users to the new application?

### Gold plating

Story: Tell my experience of working with Brent

I was new on the team... eager to prove what I was capable of
So I started to work on my first task
Partway through, I came up with what I thought was a simple, but brilliant, addition to the task
After the completing the task, the PM/Analyst on the project reviewed my work
They quickly asked me to remove my addition
I was dumbfounded... "what?!?!... but it's already done!"
Is a task "done" when it's coded?
  Not by a longshot
  The code will need to be reviewed (hopefully), tested (by more than one person), and ultimately maintained
After a lot of discussion (well... arguing), I reluctantly removed my addition
It was absolutely the correct thing to do
  The PM/Analyst had worked for months on the project
  Painstankingly developing the requirements for the project
  And I came in and thumbed my nose at the requirements!!!

#### Tips

* Don't hold back your creativity
* But don't let yourself be distracted
* Document your ideas (more on that later) and stay focused on the task at hand
* Always write the least amount of code to implement a feature

### Failing to use realistic test data

Story: Tell my experience of working on Compass

We were working on a new claims system for an insurance company
The existing system had years of data in it
In order to speed up the process of iterating on the database migration, it was decided that we'd only initially migrate a small portion of the available data... probably less than 5% of the total data
  On the surface, this decision made complete sense
We went on our way developing the new application
We made it all of the way to starting our final integration testing... and for the first time since we started the project, we did a complete DB migration
And one of the main screens in the application--the main "Claims" page, which was basically a search page--just completely broke
  Queries were taking minutes to complete... not even close to the expected performance or the times that users had seen during all of their testing up to that point

#### Tips

* At the beginning of the project, determine what the expected performance is for your key screens
* Then determine the typical "load" for those screens
* Make sure that you include in your testing (hopefully automated integration tests) a realistic set of test data

### Not writing unit tests

"We don't have time to write unit tests... we just need to start coding... or we can't afford to write unit tests!!!"
  How many times have you heard someone say this?
  Or maybe you've felt that way yourself?
At the beginning of a project, it can sometimes be difficult to allocate time to writing tests
  You simply don't feel like you have the time to do it
But this is incredibly short sighted
  How much time will you spend manually testing that code throughout the initial development of the application?
  How much time will you spend manually testing that code throughout the lifetime of the application?

#### Tips

* Get started with writing tests right at the beginning of the project
* Take the time to get support testing into your project
* Doing this will help ensure that you aren't developing in a way that'll make testing difficult to do later on
* Consider not allowing code to be merged into your shared branches unless they have test coverage
* Make an investment in your test code
  * Write helper/utility methods to make testing your app easier to do

### Failing to automate at the beginning of a project

Just like with unit testing... it can be difficult to find time to setup a CI/CD pipeline at the beginning of a project
  But deciding to not do this is naive
  How much time will you spend manually building and deploying your application throughout the lifetime of the application?

#### Tips

* New services and tools are making this easier than ever to do
  * Travis CI
  * Codeship
  * VS Team Services
* Get help from a colleague or consultant
* Identify someone on the team to take the lead on developing a CI/CD pipeline
  * But be careful to not create a silo!!!

### Creating silos of responsibilities or knowledge

This can be really difficult not to do... especially with small teams... but don't allow one developer to completely own a feature or component
  If--or when--that developer leaves the team... it can be very difficult to bring someone up to speed
I've seen departures of key team members create readonly sections of the code base... because no one is brave enough to make a change

#### Tips

* Write unit tests!!!
  * That'll give you a bit of a safety net when doing maintenance and bug fixes
* Review each other's code
  * Don't merge anything to your shared branches without doing a code review
* Work our regular times to do pair programming

### Adding more team members to speed up development

Brooks's law: "Adding [person]power to a late software project makes it later."

This is because the time required for the new programmers to learn about the project and the increased communication overhead will consume an ever increasing quantity of the calendar time available.

#### Tips

* Don't add team members to speed up projects
* Add new team members in order to bring skills or experience that the team needs

### Not supporting new team members

If you do add somebody to your team... be sure to properly support them with ramping up the project

#### Tips

* Allocate time for existing team members to pair program with new team members
* Allow new team members to shadow existing team members
* Be patient... they'll need to ask lots of questions
* You're doing code reviews... right?
  * Always involve them in code reviews

### Not giving feedback

When finding an error in somebody else's code... fight the urge to just fix it
  Create an issue and assign it to the original developer
Sometimes this isn't possible...
  Due to time constraints or unavailability of the original developer

#### Tips

* Leverage a tool (like GitHub PRs) that makes it easy to give feedback on each other's code
* If a developer keeps making mistakes, let whoever is leading the team set expectations with the developer
  * What are they doing wrong?
  * What corrective action do they need to take?

### Not tracking all of your source code

Don't allow parts of your solution to not be under source control!!!
  This often happens with database DDL (data definition language) scripts
Legacy services and apps can also be difficult to track down

#### Tips

* Build your database on a regular basis
* CI helps to discover when developers aren't committing all of their files... the build will instantly break when syncing with the central source code repository

### Not adopting a coding style

You shouldn't be able to identify who coded something just by looking at the source code

#### Tips

* Discuss the conventions they're going to use at the beginning of a project and document those decisions
* Leverage code style enforcement tools
  * VS 2017 now provides built-in support for code style configuration and enforcement

## Project Management Traps and Pitfalls

Let's talk a bit about project management...
  Even if you're not a PM, you'll probably be responsible for aspects of the PM role at one point or another in your career... especially on smaller projects

### Not regularly reporting progress

Takes one of the following forms...
  You don't establish what the status reporting rhythm will be when the project starts
  You start off on the right foot and slowly start to miss or slip reporting dates
  You delay a status report in order to wait for a milestone to complete

Try to see this from your "clients" POV
  Everyone reports to someone else
  If you don't tell your client what's up you're not helping them to be able to report the project status up the chain

It's always better to be consistent with delivering status reports then to be erratic in hopes that they'll be more positive
  Don't wait for "bad" news to turn to "good" news

#### Tips

* Make your process as lightweight as possible
* Only report what is absolutely necessary
* Automate your reporting as much as possible

### Not being realistic with estimates

This one is tough... and something that a lot of us are guilty of at one point or another

How often do you have a task that you're almost done with?
  You discover new tasks as you're understanding of the system deepens
  You discover that the task is more complicated than your initial estimates suggested

#### Tips

* Create new tasks as soon as they're identified
* Don't go on tangents (if they can wait)
  * Sometimes they're dependencies and it's not possible to delay work on tasks
  * But if you can... do it
* Communicate to your PM immediately when you realize that a task will take you longer than expected
  * There's always the possibility that you understanding of the task is incorrect or that you've overlooked a simpler implementation
* Re-estimate the task

### Failing to track changes to the project

What kind of changes are we talking about?
  Changes in requirements are one kind of change
  But there are many other types of changes
    Schedule expectations
    Budget expectations
    Team makeup
    Process changes
    Technology changes

Projects are living things... they will change
  It's really difficult to remember why something was done 6 or 12 months after it was done
  Your successor will also be grateful for this historical information

#### Tips

* When they change you need to document what the change is, why the change is being made, and who was involved in the decision to make the change
* Leverage an online tool that makes collaboration easy
* Should be easy to track changes over time

### Not tracking or triaging new features or change requests

New features are discovered all the time...
  By developers...
    When implementing features developers often identify missing tasks
  By end users...
    When testing the app end users will discover things that are missing or not working properly (i.e. bugs)

#### Tips

* Use issue tracking!!!
* Give everyone on the team the ability to create new issues
  * Review new issues as a team on a regular cadence
* Consider giving end users a way to report new issues or bugs
  * Add them to your issue tracking?
  * Give them their own channel for reporting new issues or bugs

### Failing to communicate across the entire organization

When they're changes to your project be sure that you communicate those changes to everyone in the organization that has a stake in the project

#### Tips

* For larger projects, you might need to assemble a team of key users, a "steering community" if you will
* These users can meet regularly to review and discuss the development of the app
* Include key changes in your regulary scheduled status reports
  * Indicate how those changes will affect the project

### Poor or missing requirements

Do you start development even if you don't have completed requirements?
  There's often not a great answer to this question

#### Tips

* Meet regularly with end users
* Observe how they do their work
* Learn the business domain
* You might need to become an expert "end user" yourself in order to understand the business problem that needs to be addressed

## In Conclusion

### I've made a lot of mistakes

* After putting this talk together it occurred to me...
  * I've made a lot of mistakes

### Why did this happen to me?

* No developer sets out to make these mistakes
* But life happens

### Maybe these traps and pitfalls are unavoidable...

* Maybe everyone is destined to make these mistakes at least once
* Maybe it's the only way to learn is to experience these things firsthand

### Failed projects?

* After listening to me go on about all of the mistakes that I've been part of...
* You'd think that I've worked on one failed project after another

### All of these projects were successful

* In fact... all of the projects that these examples came from were successes
* We were able to overcome diversity
* So can you

### You WILL make mistakes... learn from them!

So remember... you WILL make mistakes... learn from them!

### Thanks!

* James Churchill
* Treehouse: https://teamtreehouse.com/jameschurchill
* Twitter: @SmashDev
* GitHub: smashdevcode

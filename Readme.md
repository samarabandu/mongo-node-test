# MongoDB demo with 'mongoose' library

Sample code to show how use 'mongoose' library to create a data model and save/retrieve records. The project has two branches: 'mongo-demo' and 'promises'

## Getting started

Clone this project. Install Node.js dependancies using 'npm install'. Check out the 'mongo-demo' branch first. Ensure that MongoDB server is running.

## Branch 'mongo-demo'

Use 'git checkout mongo-demo' to checkout this branch, which contains sample code to open a connection to a mongodb server on localhost, create a model to save data racords, create model objects for each record and save.

Read through the code first to understand the process as well as usage of 'mongoose' library. Run the server using command 'node sever.js'. Inspect the console log and compare the control-flow of code vs log messages. Press 'ctrl-c' to terminate the server. Run multiple times to see the effect. Use timstamp values to determine when each record is saved.

First time with an empty database, will show no records in the database. Second run will show the records from the previous run.

## Branch 'promises'

Use 'git checkout promises' to checkout this branch. This branch shows how to use JavaScript promises to wait until save operation has completed. 'save()' method returns a promise. Notice how the .then() method of this promise is used to perform an action after the save is completed (promise is fulfilled).
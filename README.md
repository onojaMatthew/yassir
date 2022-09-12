IQAIR (Rest Backend) Concept - Assessment
===

---

* Pull the assessment solution repo
  - > `git clone https://github.com/onojaMatthew/yassir.git`
* Pull up your favorite console and change to this directory
  - > `cd yassir`
* Install the projects dependencies 
  - > `yarn install`

* The API Routes for this project can be located in the `controllers` folder.

Set up Environment Variables
---
* To declare environment variables for the project
* Create a `.env` file in the root directory of the project and add the following environment variables
* To add Database URI connection string (local URI string or cloud database URI string)
  - > `DB_URL=mongodb://localhost:27017/air_quality` and `TEST_DB=mongodb://localhost:27017/test`

* To add iqair api key to the `.env` file
  - > `API_KEY=add_your_iqair_api_key_here`
    

* To set development or test environment mode in the `.env` file
  - > `NODE_ENV=development` for development mode or `NODE_ENV=test` for test mode


Start Development 
---
* To start the project server in dev mode
  - > `yarn run dev`

Start Test 
---
* Change `NODE_ENV` from development to test mode in the `.env` file to connect to the TEST mongodb database
  - > `NODE_ENV=test`
* To build the project
  - > `yarn run build`
* To continuously watch for changes 
  - > `yarn run watch`
* To run test
  - > `yarn run test`


Start production 
---
* Change `NODE_ENV` from development to production mode in the `.env` file
  - > `NODE_ENV=production`
* To build the project
  - > `yarn run build`
* To continuously watch for changes 
  - > `yarn run watch`
* To run test
  - > `yarn run start`


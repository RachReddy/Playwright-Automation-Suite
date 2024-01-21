const {test,expect} = require('@playwright/test')

const tdata = require('./testdata.json');

test("test inputting json data", async ({page}) => {

    console.log("I am", tdata.firstname + " " + tdata.secondname + " and I'm from " + tdata.city)

});


//the below command is used to run this test file in terminal
//npx playwright -g "test inputting json data"

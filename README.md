# jest-discordjs-bug
Bug where ESM configured jest doesn't work right when importing discord.js to test suite.

An error is produced when importing a file into jest that imports discord.js, or when importing discord.js into a jest test file. Importing the discord.js package works as expected outside of using it within the test suite, and jest works as expected when running tests that don't use the discord.js package. 

Expected result: For the tests to pass after running.

Actual result: The tests fail with the error below.

Relevant error:
```js
 FAIL  src/__tests__/index.test.js
  ● Test suite failed to run

    Unexpected import statement in CJS module.
      at @:1:8

          at Array.forEach (<anonymous>)




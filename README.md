# jest-discordjs-bug
Bug where ESM configured jest doesn't work right when importing discord.js to test suite.

An error is produced when importing a file into jest that imports d.js, or importing discord.js into a jest test file.

Relevant error:
```js
 FAIL  src/__tests__/index.test.js
  ● Test suite failed to run

    Unexpected import statement in CJS module.
      at @:1:8

          at Array.forEach (<anonymous>)




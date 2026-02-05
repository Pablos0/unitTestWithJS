# Automated Testing in JavaScript project 🛠️ 🧪

This project is to generate test cases related to page https://practicesoftwaretesting.com/

The project has been created as part of Automated Testing in JavaScript program from EPAM campus.

The project is develop with different frameworks such WDIO and CHAI. The cases to be tested are:

1. A Customer try to log into his account with wrong credentials
2. Customer try to log in from his cart without his password
3. Language change to French
4. Adding products to the shopping cart
5. Filtering tools
6. Deleting products from the shopping cart
7. Adding tools to favorites

## Scripts

```js
"scripts": {
    "test": "wdio run ./src/test/config/wdio.conf.js",
    "report": "wdio run src/test/config/wdio.conf.js",
    "format": "npx prettier . --write",
    "lint": "npx eslint",
    "check-format": "npx prettier . --write && npx eslint",
    "smoke": "wdio run ./src/test/config/wdio.conf.js --tags @smoke",
    "wip": "wdio run ./src/test/config/wdio.conf.js --tags @wip",
    "important": "wdio run ./src/test/config/wdio.conf.js --tags @important"
  },
```

`npm test` run the test for the specs of features.
<br>
`npm run report` run command to create reports.
<br>
`npm run format` command to apply prettier in the project.
<br>
`npm run lint` command to apply lint in the project.
<br>
`npm run check-format` allow to apply lint and prettier at the same time.
<br>
`npm run smoke/wip/important` command to apply tags in the test features.

## Structure

The tests scenarios are divide in two files called `shoppingCart` and `customerAccount` which are inside Features folder.

The `steps.ts` files in the next path `./src/business/steps_definitions`. There is one file for each Feature file.

The `features` are located in `./features/**/*.ts`. Cucumber is used for the test of features.

## Classes

### Components

<b>ToolsPage</b>. This class contain funtions related with actions which may do the user in the store, such as: `selectedProduct()`, `productInCart()`, `toolsCategories()`, `powerTools()`, `drillsFilter()`, `cartPage()`, `removeTool()`, `cartEmptyMsg()` and ` cordlessDrill20V()`.<br><br>
<b>Cart</b>. This class includes buttons to interact with the cart such as `increaseQty()`, `addToCart()` and `addToFavorites()`.<br><br>
<b>UserActions</b>. This class includes some of the most commun functions in this page such as `passwordNeededMsg()`, `emailNeededMsg()`, `proceedCheckout()`, `changeLang()`, `frenchLang()`, `home()` and `userUnauthorizedMsg()`.

## Configuration

The steps are saved under the names `shopping.cart.steps.ts` and `userActions.teps.ts`, the configuration the wdio.config.ts file is:

```js
specs: [
        '../../../features/**/*.feature',
    '../../features/**/*.feature',
    '../../business/**/*.feature',
    ],
```

The max number of instance to be use is <b>2</b>
The capabilities are configured with thre browsers:

1. Chrome
2. Firefox
3. Safari (this browser is available just in iOS)

Chrome and Firefox are configured to be run in headless mode:

```js
capabilities: [
  {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--headless', '--disable-gpu', '--window-size=1920,1080'],
    },
  },
  {
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: ['--headless', '--disable-gpu', '--window-size=1920,1080'],
    },
  },
];
```

Chai is implemented as ` import { expect, assert, should } from 'chai';` and his functions:

```js
before: function (capabilities, specs) {
        global.expect = expect;
        global.assert = assert;
        global.should = should();
     }
```

Spec and HTML reports are configured. The script to run the HTML report is `npm run report`.

```js
reporters:
        [['spec', {
            symbols: {
                passed: '[PASS]',
                failed: '[FAIL]'
            },
            addConsoleLogs: true,
            showPreface: false,
        }],
        ["html-nice", {
            outputDir: './reports/html-reports/',
            filename: 'report.html',
            reportTitle: 'Test Report',
            linkScreenshots: true,
            showInBrowser: true,
            collapseTest: false
        }],
    ],
```

### Configuration of features

The test scenarios are run using Gherkin and Cucumber. This is implemented as below:

```js
framework: 'cucumber',

  cucumberOpts: {
    require: ['src/features/**/*.js'],
    backtrace: true,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
```

## Test Scenario

### Shopping Cart

<b>Adding products to the shopping cart</b>, the user is trying to add "Thor Hammer" to his cart doing click to "Add to cart" button, and try to add a second hammer to the cart the error message "You can only have one Thor Hammer in the cart" will appear.

<b>Filtering Tools</b>, the user is looking for a drill. To do this the user needs to do click in "Categories" option at the top right of the page and select "power tools". Once the tools are display, in the left side there are several options to filter the results, when the user select "drill" checkbox, the first tool to display must be "Cordless Drill 20V".

<b>Deleting products from the shopping cart</b>, the user add to the cart an incorrect tool and will try to delete it. The user should go to the cart page doing click in the little cart icon at the top right of the page and in the right side of the product should be a "X" button. When the user do click, in the botton of the page should appear the message "The cart is empty. Nothing to display."

<b>Adding tools to favorites</b>, the user is trying to add a tool to favorite. When the user select "Combination Pliers" tool and do click on Add to favorites button, An "Unauthorized, can not add product to your favorite list." message must appears.

### Customer Account

<b>A Customer try to log into his account with wrong credentials</b>, the user is trying to log in to his account typing "john.doe@test.com" as his email and as password "And the user log in with email "john.doe@test.com" and password "12345x", then press enter. But, the password is incorrect, an "Invalid email or password" error message must appears.

<b>Customer try to log in from his cart without his password</b>, user do click in the cart icon located in the top right of the page and the click in "Proceed to checkout", when the user type his email, but forgot to type the password and do click in "log in" button the message "Password is required" must appear.

<b>Language change to French</b>, as the user language is french, when he do click in th little globe button located in the top right of the page and select french as prefered language, the page should be refreshed with the new language.

## Formatters

### Prettier

To maintain a good formarting in this repository Prettier is applied.
<br><br><b>Configuration and Installation</b><br><br>
<em>Installation.</em> `npm install --save-dev --save-exact prettier`<br><br>
<em>Configuration.</em> `node --eval "fs.writeFileSync('.prettierrc','{}\n')"`, this command create <b>.prettierrc</b> file which provide the instruccion to the IDE that Prettier is in use.
`node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"` this create <b>.prettierignore</b> file to provide the instructions of which files shouldn't be formatted.

<b><em>How to run Prettier</em></b>
You may run the command `npm run prettier`. Which script is configurated in `package.json` file.

```json
"scripts": {
  "prettier": "npx prettier . --write",
}
```

### EsLint

EsLint provide support fixing syntax errors in JavaScript.
<br><br><b>Configuration and Installation</b><br><br>

<em>Installation.</em> `npm init @eslint/config@latest`<br><br>
<em>Configuration.</em> Once the installation command is run, a couple of questions will be displayed to configure EsLint and will be saved in `eslint.config.js` file.

You may apply several rules in the project. Below are the selected rules for this project:

```js
rules: {
      'constructor-super': 'warn',
      'getter-return': 'warn',
      'no-dupe-args': 'warn',
      'no-irregular-whitespace': [
        'warn',
        {
          skipComments: true,
        },
      ],
    },
```

More rules may be found in <a href=https://eslint.org/docs/latest/rules>EsLint Rules Reference</a>

<b><em>How to run EsLint</em></b>
You may run the command `npm run eslint`. Which script is configurated in `package.json` file.

```json
"scripts": {
  "eslint": "npx eslint"
}
```

#### Notes

To avoid conflict between Prettier and EsLint it is neccesary set up an extra configuration in `eslint.config.mjs` file.

```js
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  // rest of the code...
  eslintConfigPrettier,
]);
```

In case you need run both Prettier and EsLint, you can use `npm run check` command.

```json
"scripts": {
  "check": "npx prettier . --write && npx eslint"
}
```

## Languages and Framework

<img src="./src/images/javascript.png" alt= "webdriverIOicon" width= "35px" height = "35px"><br>

<img src="./src/images/webdriverio.png" alt= "webdriverIOicon" width= "35px" height = "35px"><br>

<img src='./src/images/371-3711300_cucumber-js-logo-hd-png-download.png' alt= "Cucumber logo" width= "40px" height = "35px"><br>


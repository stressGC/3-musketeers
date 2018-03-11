# Cash

Cash is a tool to convert devises into the terminal. It is based on the [fixer.io](http://fixer.io/) API.

## How It Works

Cash fetches the parameters from the command line, then calls the fixer.io API that returns the converted value.

## Usage

**First, install the *dependencies* :**

```sh
cd path/to/cash
npm install chalk conf got money ora update-notifier --save
```

**The shell command lines have this *structure* :**

```sh
 node index.js  <amount> <currency>

 node index.js <command>
```

**_Commands:_**
```--save,  -s``` Save currencies as default currencies
```--help,  -h``` Display help message
```--version,  -v``` Display version number

The list of currencies is available at http://akep.us/currencies

**Some basic *examples*:**

```sh
 node index.js 1 USD

 node index.js 1 USD EUR PLN AUD
```
In the first example we want to know the value of 50 US Dollars in the default currencies output : EUR, GBP and PLN.


**_Helper_ :**

```sh
node index.js --help
```

![Help screenshot](https://raw.githubusercontent.com/stressGC/3-musketeers/master/cash/help.PNG)

## Credits

* [fixer.io](http://fixer.io/) - Currency value API
* [chalk](https://www.npmjs.com/package/chalk) - Terminal string styling
* [conf](https://www.npmjs.com/package/conf) - Configuration handling
* [got](https://www.npmjs.com/package/got) - HTTP Request
* [money](https://www.npmjs.com/package/money) - Real-time money conversion
* [ora](https://www.npmjs.com/package/ora) - Terminal spinner
* [update-notifier](https://www.npmjs.com/package/update-notifier) - Update notifications for CLI app
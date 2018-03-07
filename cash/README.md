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

**_Commands:_
**\
--save,  -s       Save currencies as default currencies\
--help,  -h       Display help message\
--version,  -v     Display version number\

The list of currencies is available at http://akep.us/currencies

**Some basic *examples*:**

```sh
 node index.js 1 USD

 node index.js 1 USD EUR PLN AUD

```
In the first example we want to know the value of 50 US Dollars in the default currencies output : EUR, GBP and PLN.

Those informations are foundable by doing :

```sh
node index.js --help
```

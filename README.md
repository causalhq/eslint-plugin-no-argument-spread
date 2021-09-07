# eslint-plugin-no-argument-spread

Show warning when someone uses the spread operator for function arguments.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-argument-spread`:

```sh
npm install eslint-plugin-no-argument-spread --save-dev
```

## Usage

Add `no-argument-spread` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-argument-spread"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-argument-spread/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here



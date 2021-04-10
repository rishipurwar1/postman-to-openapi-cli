# postman-to-openapi-cli
### Convert Postman Collection v2.0/v2.1 to OpenAPI v3.0 via CLI

## Installation

Using `npm`:

```
npm i postman-to-openapi-cli -g
```

Using `yarn`:

```
yarn add postman-to-openapi-cli -g
```

## Usage

First install the package globally.

### CLI Command

```
postman-to-openapi -s ./PATH/TO/THE/COLLECTION.JSON -o ./PATH/TO/THE/OUTPUT/OPENAPI.YML
```

It takes an input **relative path** of the collection.json file and a **relative path** of the output folder.



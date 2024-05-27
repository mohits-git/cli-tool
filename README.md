## CLI Tool with node

This is the basic skeleton for creating a CLI tool in nodejs.

**Resource**:- [Create you own cli tool](https://citw.dev/tutorial/create-your-own-cli-tool?p=1)

In this project, we use a various helpful libraries to make our life easier for making a cli tool - handling arguments, finding and loading user defined config, logging / debugging to communicate with user.

### Dependencies:-
- **arg** :- For handling commnad line arguments, and defining arguments schema or types.
- **chalk** :- Terminal styling, (colored text outputs).
- **cosmiconfig** :- To search and load the user defined config for our tool.
- **ajv** :- For JSON schema validation.
- **better**-ajv-errors :- To display user-friendly ajv errors.
- **debug** :- to debug and log the specific parts of the tool.

### Get Started 

```
git clone https://github.com/mohits-git/cli-tool.git
```

```
cd tool
npm i
cd ../testProject
npm i
```

```
cd ../tool
npm link
```

Now you can test the tool with the testProject -
```
tool --start # or experiment around
```
Or, you can create new directory and define tool.config.ts or set config in package.json
```
# tool.config.ts
module.exports = {
  port: 6000
}

# or, package.json
...
"tool": {
  "port": 6000,
}
```

### Create your own:-
You can create you own tool by following steps :- 
- Initialise a new npm project with `npm init -y` <br/>
- Create a new directory `bin`
- Create a entry point script `index.js`
  Inside the script you can specify the interpreter you want to use, by adding one line at top:-
  ```
  #!/usr/bin/env node
  ```
  This shebang line ensures that the script runs with Node.js.
- Now, specify your entry point script in your `package.json` file
  ```
  "bin": "./bin/index.js"
  # or, you can specify an object for multiple entry point scripts with different names:
  "bin": {
    "my-cli": "./bin/index.js"
  }
  ```
- Now write your own logic for the tool
- Link your tool globally on your machine:-
  ```
    npm link
  ```
- Run Your Tool
  Now you can directly run the tool from any where on your machine:-
 ```
  my-cli
 ```

# Express Project Setup

## Installation

Follow the steps below to set up and run the Express project.

### Prerequisites
- Ensure you have **Node.js** installed. You can download it from [Node.js official website](https://nodejs.org/).
- Verify the installation by running:
  ```sh
  node -v
  npm -v
  ```

### Install Dependencies
Run the following command in the project root directory to install the required Node modules:
```sh
npm install
```

### Start the Server
To start the Express server, use:
```sh
npm start
```

or, if a specific script is defined in `package.json`, use:
```sh
npm run dev
```

### Additional Commands
- To install a new package:
  ```sh
  npm install package-name
  ```
- To remove a package:
  ```sh
  npm uninstall package-name
  ```

### Troubleshooting
If you encounter issues, try:
```sh
rm -rf node_modules package-lock.json
npm install
```

Happy coding! 🚀



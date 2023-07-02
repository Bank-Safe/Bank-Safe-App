# Safe-Bank-App

Welcome to the Safe Bank React Native project! This project aims to provide a secure banking application developed using React Native.

## Installation

To get started with the project, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Bank-Safe/Safe-Bank-App.git
```

2. Navigate to the project directory:

```bash
cd Safe-Bank-App
```

3. Install the required dependencies using npm:

```bash
npm install
```

4. Run the NODE_MODULE_RESOLVE.sh script:
```bash
sh NODE_MODULE_RESOLVE.sh
```

5. Create a local.properties file in the `./android` directory. Add the following line to the file, replacing `<SDK_PATH>` with the path to your Android SDK installation generally it is "/Users/<USERNAME>/Library/Android/sdk":

```properties
sdk.dir=<SDK_PATH>
```

6. Run the rn-nodeify command to install the necessary Node modules:

```bash
./node_modules/.bin/rn-nodeify --hack --install
```

7. Start the React Native development server:

```bash
npx react-native start
```

Congratulations! You have successfully set up and run the Safe Bank React Native project on your device.

## Contributing

If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.

2. Create a new branch with a descriptive name:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them:

```bash
git commit -am 'Add some feature'
```

4. Push the changes to your forked repository:

```bash
git push origin feature/your-feature-name
```

5. Create a new pull request on GitHub.


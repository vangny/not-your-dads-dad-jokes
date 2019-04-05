Not Your Dad's Dad Jokes
===============

Not Your Dad's Dad Jokes is a web app designed to generate new dad jokes from ICanHazDadJoke's library of dad jokes using a Markov Chain approach.

## Main Features
* Create new dad jokes
* Look into any previous dad jokes that were generated

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing & Setup
1. Clone or download the repo

```
clone https://github.com/vangny/not-your-dads-dad-jokes.git
```

2. Install dependencies
```
npm i
```

3. Ensure the server is running
```
npm run server-dev
```

4. Make sure the bundle has been compiled. Run the following for the development build:
```
npm run build:dev
```

5. OPTIONAL STEP - run the following for the production build:
```
npm run build:prod
```

6. Next, you will need to create a .env file and set USER_AGENT to the repo's url.

7. The app should be defaulted to be hosted on port 3030. If that port is already being used, you can change the port within the main.js file of the server folder OR go into the .env file and assign PORT to a new port 

## Future Additions
* Convert app to a progressive web app
* Possibly isomorphic integration

## Author
Nathan Vang

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/vangny/raven-sms/blob/master/LICENSE) file for details
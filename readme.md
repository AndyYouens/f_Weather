## A Nodejs Express Weather App on IBM i

![FormaServe Logo](https://github.com/AndyYouens/NodeExpress-IBMi/blob/master/public/images/Logo.png)

> This repo contains a NodeJS Express website that runs on IBM i.
>
> It shows a weather app giving the current weather for a city in the UK.

# Pre-reqs

> Requires Node.js on IBM i at least version 8

# Install Instructions

These commands need to be run in a **QSHELL** session on your **IBM i**

Issue the following commands to clone the repo

```
git clone https://github.com/AndyYouens/f_Weather.git

```

CD into directory

```
cd f_Weather
```

Install dependancies

```
npm install
```

Get API key by creating an account at [OpenWeatherMap](https://home.openweathermap.org/api_keys)

Start application
```
APIKEY=<your_api_key>
export APIKEY
npm start (to run in debug mode, type npm run debug)
```

Point your browser to https://your-IBMi:4000

## Additional Setup

Save yourself time by placing your API key in a .env file in the root of this application.

Additionally, if you wish to change the PORT number this application runs on, this also can be placed in the .env file.  
An example .env file is shown below.

```
APIKEY=58fe301faedc550510e8b2dd6222449x
PORT=4000
DEBUG=weather
HOSTNAME=GALATEA
```

The .env file should **NOT** be included within source control and should be added to your .gitignore file.

# Authors

> FormaServe Systems Ltd - _All work_ - [FormaServe](https://www.formaserve.co.uk)

# License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- **© 1990 - 2020 [FormaServe Systems Ltd](https://www.formaserve.co.uk)**

# Acknowledgments

> Andy Youens - FormaServe Systems Ltd - Twitter [@AndyYouens](https://twitter.com/AndyYouens)

# Latest Changes

> Andy Youens - August 2020

# Published PowerWire Article

> September 2020

# Copyright

> © 1990 - 2020 FormaServe Systems Ltd

### Open Source on IBM i - Oh Yea!

:wink:

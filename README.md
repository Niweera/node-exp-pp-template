# Quick template for NodeJS, ExpressJS API with PassportJS authentication.

## How to setup

1. First apply settings for `/config/keys_dev.example.js` and rename it to `/config/keys_dev.js`. (This key file is used for the development environments only. Do not commit that file to Public repos.)
2. Define models/schemas in `/models/`
3. Define routes in `/routes/api/`
4. Define `/server.js` file
5. Change `/package.json` file as per requirements
6. If you want to host the API in Google-App-Engine, create a project in GAE and follow the [Official Travis-CI Documentation](https://docs.travis-ci.com/user/deployment/google-app-engine/)
7. To specify the env variables in Travis-CI follow the [Official Travis-CI Documentation](https://docs.travis-ci.com/user/environment-variables/)
8. To specify the Google-App-Engine `/app.yaml` file follow the [Official Google App Engine Documentation](https://cloud.google.com/appengine/docs/standard/nodejs/config/appref)
9. To specify the Google-App-Engine `/dispatch.yaml` file follow the [Official Google App Engine Documentation](https://cloud.google.com/appengine/docs/standard/nodejs/reference/dispatch-yaml)
10. Add tests for the API, using [`Mocha`](https://mochajs.org/) and [`Chai`](https://www.chaijs.com/)
11. Done. Test your API in local environment by [http://localhost:PORT](http://localhost:PORT)
12. Publish your repo to GitHub and Travis-CI will do the rest... ["rest" means that it will deploy the `NodeJS` app to Google App Engine.]

## Meta

Nipuna Weerasekara – [@Niweera](https://twitter.com/Niweera) – w.nipuna@gmail.com

Distributed under the MIT license. See `LICENSE` for more information.

## Contributing

1. Fork it (<https://github.com/Niweera/node-exp-pp-template/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


<!-- GETTING STARTED -->
### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Register to get the API token key -  [https://www.weatherbit.io/account/create](https://www.weatherbit.io/account/create)
2. Clone the repo
   ```sh
   git clone https://github.com/ardhi2015/cypress-automation.git
   ```
3. go to project directory

4. Install NPM packages
   ```sh
   npm install
   ```
5. Rename `example_env.json` to `cypress.env.json` and Enter your API, base_url = `https://api.weatherbit.io/v2.0/`
   ```json
   {
    "api_key": "your_api_token",
    "base_url": "sample"
    }
   ```

### How to run
  ```sh
  npm cypress run
  ```

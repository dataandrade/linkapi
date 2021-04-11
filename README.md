# Project Overview

This project has the goal to integrate the platforms `Pipedrive -> Bling`. For this to happen, we have a few requirements to achieve:

    1 - All deals inside Pipedrive with status |won| has to be bought to Bling ecosystem (as a |order|).
    2 - All orders inside Bling has to be inserted in our database (`mongodb`), consolidate per day and total value of orders.
    3 - We have to give a solution via an endpoint in our |API| to get this information tha has been store in our database for people to access.
    4 - Items 1 and 2 had to be transparent for our end user (after initial config). Only step 3 is for "outside users" to be aware.

# Tech

- Node.js version 12.x
- Express.js version 4.x
- MongoDB
- Docker 

---


# How to run this project
### Requirements

### 1. **Pipedrive:**
We'll need to create a custom filter inside *Pipedrive* with the following configuration:


![Pipedrive filter configuration](pipedrive_creation_filter_deals_won_yesterday.jpg "Pipedrive filter configuration")


*Now, with this custom filter created, we'll need to get the filter's id to set in our app.*

Go to https://developers.pipedrive.com/docs/api/v1/#!/Filters/getFilters with your `API_KEY`, and run the endpoint selecting the type `deals`.

you will see something like this:
![Pipedrive filter](json_filter_deals_won_yesterday.jpg "Pipedrive filter")

with your custom `filter_id` at hand, you will need to set him at your `.env` config file.

**Now, our CronJob for getting deals with status `won` will only bring `Deals won yesterday`.**

---

### 2. Config file:

Environment configuration

#### 2.1 Create a `.env` file in your root directory as such:

```
DB_HOST=URL_MONGODB_OR_MONGODB_IP
PORT=3000
BLING_API_KEY=YOUR_BLING_API_KEY
BLING_BASE_URL=https://bling.com.br/Api/v2
PIPEDRIVE_BASE_URL=https://{{YOUR_COMPANY_URL}}-sandbox.pipedrive.com
PIPEDRIVE_API_KEY=YOUR_PIPEDRIVE_API_KEY
PIPEDRIVE_PAGINATION_LIMIT=5
PIPEDRIVE_CUSTOM_FILTER_ID=YOUR_CUSTOM_FILTER_ID
```


#### 2.2 Or in case you are running inside a container:

COLOCAR AQUI CONFIG DO ARQUIVO DOCKERCOMPOSE

---



### 3. Docker configuration:

In case you want to run this project inside a container, you will need to configurate a few extra things:

#### 3.1 Setting .env configuration inside Docker-compose:

dfaisuhdfuiahfsd

To run the application local, type:<br>
`docker-compose build --no-cache & docker-compose up --build --force-recreate`

after running, you can acces the api via `http://localhost:3002`



<br>
<br>
<br><br><br><br><br><br><br><br><br>






















## Calling endpoint with reports:
[GET] `http://localhost:3000/v1/bling/orders/report`

this endpoint accepts the following filters:

- date (`default: the last 10 items from collection ordered by -date. Note: the order filter will impact in this results`)
- offset (`default: 0`)
- order (`default: -date`)

Example of request:

[GET] `http://localhost:3000/v1/bling/orders/report?offset=0&order=-date`

---

## GitHub Configuration

This project use two 
- **Main branch**: `main`
    - Production type env
- **Sandbox branch**: `sandbox`
    - Sandbox env for testing before deploying to the main branch
- **Dev branch**: `dev`
    - Latest development branch. 

Flow of deployment:
- Updating the `dev` branch:
    `feature/my-new-feature` -> `dev`

- Updating the `sandbox` branch:
    `dev` -> `sandbox`

- Updating the `main` branch:
`dev` -> `main`
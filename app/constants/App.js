// mongodb
const DB_HOST = process.env.DB_HOST;
const SECRET_API = process.env.SECRET_API;

// pipedrive
const PIPEDRIVE_BASE_URL = process.env.PIPEDRIVE_BASE_URL;
const PIPEDRIVE_API_KEY = process.env.PIPEDRIVE_API_KEY;
const PIPEDRIVE_PAGINATION_LIMIT = process.env.PIPEDRIVE_PAGINATION_LIMIT;

// bling
const BLING_API_KEY = process.env.BLING_API_KEY;
const BLING_BASE_URL = process.env.BLING_BASE_URL;

module.exports = {
  DB_HOST,
  SECRET_API,
  PIPEDRIVE_BASE_URL,
  PIPEDRIVE_API_KEY,
  PIPEDRIVE_PAGINATION_LIMIT,
  BLING_API_KEY,
  BLING_BASE_URL
};
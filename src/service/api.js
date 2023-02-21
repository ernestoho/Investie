import { apis } from "service";

const COMMON_URL = `https://`;

const TWILIO_TOKEN = "5714b348195dc3e39";
const TWILIO_ACCOUNT_SID = "ab982ab40057b719";
const MARKET_DATA_TOKEN = "Bearer vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9yeURYWWxsRERUbHJLUTdtNE5ENVltUjBobmdyd1Zmck5DIiwiZXhwIjoxNzA4Mjg0NTk0LCJpYXQiOjE2NzY3NDg1OTQsImp0aSI6ImFwa19yeURYWWxsR0d5RmdXU2JXZldxVGtoczNkWVF6RGtkcUNOIiwibW9kZSI6InBhcGVyIn0.m5rem9XTx3P3PGo-8wN_G4x7Qe38qqbMGkn1ocxi32Y";
const PAPER_TRADING_TOKEN =
  "Bearer eyJhbGciOi
const API_URLS = {
  POST_MESSAGES: `${COMMON_URL}api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages`,
  GET: `${COMMON_URL}data.lemon.markets/v1/instruments/`,
  POST: `${COMMON_URL}paper-trading.lemon.markets/v1/orders/`,
  GET_ORDERS: `${COMMON_URL}paper-trading.lemon.markets/v1/orders`,
  GET1: `${COMMON_URL}paper-trading.lemon.markets/v1/account/`,
  GET2: `${COMMON_URL}data.lemon.markets/v1/trades/`,
};

export const postMessages = (payload) =>
  apis.post(API_URLS.POST_MESSAGES, {
    ...payload,
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization: TWILIO_TOKEN,
      ...payload?.headers,
    },
  });

export const get = (payload) =>
  apis.get(API_URLS.GET, {
    ...payload,
    headers: {
      Authorization: MARKET_DATA_TOKEN,
      ...payload?.headers,
    },
  });

export const post = (payload) =>
  apis.post(API_URLS.POST, {
    ...payload,
    headers: {
      Authorization: PAPER_TRADING_TOKEN,
      ...payload?.headers,
    },
  });

export const getOrders = (payload) =>
  apis.get(API_URLS.GET_ORDERS, {
    ...payload,
    headers: {
      Authorization: PAPER_TRADING_TOKEN,
      ...payload?.headers,
    },
  });

export const get1 = (payload) =>
  apis.get(API_URLS.GET1, {
    ...payload,
    headers: {
      Authorization: PAPER_TRADING_TOKEN,
      ...payload?.headers,
    },
  });

export const getTrade = (payload) =>
  apis.get(API_URLS.GET2, {
    ...payload,
    headers: {
      Authorization: MARKET_DATA_TOKEN,
      ...payload?.headers,
    },
  });

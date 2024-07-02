import { StockInfo } from "@/types";

export const countries = [
    {
      flag: "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1ec.svg",
      country: "Uganda",
      code: "+256",
    },
    {
      flag: "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1fc.svg",
      country: "Rwanda",
      code: "+250",
    },
    {
      flag: "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1ea.svg",
      country: "Nigeria",
      code: "+234",
    },
    {
      flag: "https://twemoji.maxcdn.com/2/svg/1f1ff-1f1e6.svg",
      country: "South Africa",
      code: "+27",
    },
    {
      flag: "https://twemoji.maxcdn.com/2/svg/1f1ff-1f1f2.svg",
      country: "Zambia",
      code: "+260",
    },
    {
      flag: "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ea.svg",
      country: "Kenya",
      code: "+254",
    },
    {
      flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1e6.svg",
      country: "Canada",
      code: "+1",
    },
    {
      flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ea.svg",
      country: "United Arab Emirates",
      code: "+971",
    },
    {
      flag: "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f8.svg",
      country: "United States of America",
      code: "+1",
    },
    {
      flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e7.svg",
      country: "United Kingdom",
      code: "+44",
    },
];

export const orders = [
  {
      "id": 452,
      "type": "market",
      "amount": 1,
      "symbol": "ROGD",
      "action": "sell",
      "status": "pending",
      "user_id": 34,
      "stock_id": 5,
      "unit_price": 659.505,
      "filled_amount": 0,
      "filled_average_price": 0,
      "limit_price": 0,
      "stop_price": 0,
      "created_at": "2024-06-25T05:57:21.882Z",
      "logId": null,
      "is_market_marker": false
  },
  {
      "id": 451,
      "type": "market",
      "amount": 1,
      "symbol": "SHNY",
      "action": "buy",
      "status": "pending",
      "user_id": 34,
      "stock_id": 4,
      "unit_price": 2638.02,
      "filled_amount": 0,
      "filled_average_price": 0,
      "limit_price": 0,
      "stop_price": 0,
      "created_at": "2024-06-25T05:56:54.874Z",
      "logId": null,
      "is_market_marker": false
  },
  {
      "id": 450,
      "type": "limit",
      "amount": 1,
      "symbol": "SHNY",
      "action": "buy",
      "status": "pending",
      "user_id": 34,
      "stock_id": 4,
      "unit_price": 2638.02,
      "filled_amount": 0,
      "filled_average_price": 0,
      "limit_price": 0,
      "stop_price": 0,
      "created_at": "2024-06-25T05:48:19.893Z",
      "logId": null,
      "is_market_marker": false
  },
  {
      "id": 449,
      "type": "limit",
      "amount": 1,
      "symbol": "SHNY",
      "action": "buy",
      "status": "executed",
      "user_id": 34,
      "stock_id": 4,
      "unit_price": 2638.02,
      "filled_amount": 0,
      "filled_average_price": 0,
      "limit_price": 0,
      "stop_price": 0,
      "created_at": "2024-06-25T05:31:46.993Z",
      "logId": null,
      "is_market_marker": false
  },
  {
      "id": 448,
      "type": "limit",
      "amount": 1,
      "symbol": "PMPR",
      "action": "buy",
      "status": "executed",
      "user_id": 34,
      "stock_id": 3,
      "unit_price": 1319.01,
      "filled_amount": 0,
      "filled_average_price": 0,
      "limit_price": 0,
      "stop_price": 0,
      "created_at": "2024-06-25T05:21:45.711Z",
      "logId": null,
      "is_market_marker": false
  },
  {
      "id": 447,
      "type": "limit",
      "amount": 1,
      "symbol": "GPOT",
      "action": "buy",
      "status": "pending",
      "user_id": 34,
      "stock_id": 2,
      "unit_price": 1319.01,
      "filled_amount": 0,
      "filled_average_price": 0,
      "limit_price": 0,
      "stop_price": 0,
      "created_at": "2024-06-25T05:17:12.510Z",
      "logId": null,
      "is_market_marker": false
  },
  {
      "id": 428,
      "type": "limit",
      "amount": 1,
      "symbol": "PMPR",
      "action": "buy",
      "status": "pending",
      "user_id": 34,
      "stock_id": 3,
      "unit_price": 656790,
      "filled_amount": 0,
      "filled_average_price": 0,
      "limit_price": 0,
      "stop_price": 0,
      "created_at": "2024-06-21T18:04:54.202Z",
      "logId": null,
      "is_market_marker": false
  }
];

export const stocks = [
  {
      "id": 3,
      "name": "Paniel Meat Processing",
      "image": "https://www.africaeats.com/wp-content/uploads/2020/06/PMP-SAUSAGE-200.png",
      "active": true,
      "deleted": false,
      "description": "This is the default description",
      "listed": true,
      "symbol": "PMPR",
      "category": "Food",
      "exchange": "SEM",
      "currency": "USD",
      "percentageChange": -33.33333333333334,
      "movement": "down",
      "dayRangeHigh": 1978.515,
      "dayRangeLow": 659.505,
      "yearRangeHigh": 987527.5,
      "yearRangeLow": 7.5,
      "price": 1310.66,
      "initialNumber": 68,
      "initialPrice": 250,
      "stockCategoryId": null,
      "VolumeTradedToday": [
          {
              "volume": 1
          }
      ],
      "prices": [
          1319.01,
          1978.515,
          1978.515,
          1648.7625,
          659.505,
          654560,
          654560,
          654560,
          654560,
          654560,
          654560,
          327280,
          654560,
          654560,
          327280,
          328395,
          330740,
          987527.5,
          987527.5,
          328597.5,
          656695,
          328005,
          656010,
          328005,
          500,
          250,
          500,
          250,
          500,
          500,
          500,
          500,
          500,
          500,
          500,
          500,
          250,
          250,
          75,
          7.5
      ],
      "dates": [
          "2024-06-25",
          "2024-06-25",
          "2024-06-25",
          "2024-06-25",
          "2024-06-25",
          "2024-06-24",
          "2024-06-24",
          "2024-06-24",
          "2024-06-24",
          "2024-06-24",
          "2024-06-24",
          "2024-06-24",
          "2024-06-24",
          "2024-06-24",
          "2024-06-24",
          "2024-06-21",
          "2024-06-19",
          "2024-06-17",
          "2024-06-17",
          "2024-06-14",
          "2024-06-14",
          "2024-06-13",
          "2024-06-13",
          "2024-06-13",
          "2024-06-04",
          "2024-06-04",
          "2024-06-04",
          "2024-06-04",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-30",
          "2024-05-29",
          "2024-05-02",
          "2024-05-02"
      ],
      "availableToBuy": 68,
      "availableToSell": 4,
      "lastChange": -33
  },
  {
      "id": 16,
      "name": "Sample",
      "image": "https://res.cloudinary.com/button0010/image/upload/v1718429024/hkvkbpoqb3vztekqoqaq.jpg",
      "active": true,
      "deleted": false,
      "description": "This is the default description",
      "listed": true,
      "symbol": "SMPL",
      "category": "test",
      "exchange": "ANC",
      "currency": "USD",
      "percentageChange": 0,
      "movement": "Constant",
      "dayRangeHigh": 0,
      "dayRangeLow": 0,
      "yearRangeHigh": 0,
      "yearRangeLow": 0,
      "price": 2621.32,
      "initialNumber": 0,
      "initialPrice": 0,
      "stockCategoryId": null,
      "VolumeTradedToday": [],
      "prices": [],
      "dates": [],
      "availableToBuy": 0,
      "availableToSell": 0,
      "lastChange": 0
  },
  {
      "id": 7,
      "name": "Boka Eats",
      "image": "https://www.africaeats.com/wp-content/uploads/2022/12/Boka-Eats-200.png",
      "active": true,
      "deleted": false,
      "description": "This is the default description",
      "listed": true,
      "symbol": "BEAT",
      "category": "Food",
      "exchange": "SEM",
      "currency": "USD",
      "percentageChange": -99.79967194441281,
      "movement": "down",
      "dayRangeHigh": 659.505,
      "dayRangeLow": 659.505,
      "yearRangeHigh": 329212.5,
      "yearRangeLow": 250,
      "price": 524.264,
      "initialNumber": 953,
      "initialPrice": 250,
      "stockCategoryId": null,
      "VolumeTradedToday": [
          {
              "volume": 15
          }
      ],
      "prices": [
          659.505,
          329212.5,
          500,
          500,
          500,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          500,
          500,
          500,
          500,
          500,
          500,
          500,
          500,
          250,
          250,
          250,
          250,
          478.4
      ],
      "dates": [
          "2024-06-25",
          "2024-06-15",
          "2024-05-30",
          "2024-05-30",
          "2024-05-30",
          "2024-05-30",
          "2024-05-30",
          "2024-05-27",
          "2024-05-27",
          "2024-05-27",
          "2024-05-27",
          "2024-05-27",
          "2024-05-25",
          "2024-05-24",
          "2024-05-23",
          "2024-05-23",
          "2024-05-23",
          "2024-05-23",
          "2024-05-23",
          "2024-05-23",
          "2024-05-09",
          "2024-05-09",
          "2024-05-09",
          "2024-05-09",
          "2024-05-06"
      ],
      "availableToBuy": 953,
      "availableToSell": 2,
      "lastChange": -100
  },
  {
      "id": 1,
      "name": "Agro Supply ",
      "image": "https://res.cloudinary.com/button0010/image/upload/v1719234363/g24azj9w3hi5surahrsn.png",
      "active": true,
      "deleted": false,
      "description": "I have edited desc again",
      "listed": false,
      "symbol": "AGRP",
      "category": "Food",
      "exchange": "Mauritius Stock Exchange",
      "currency": "USD",
      "percentageChange": -99.79889431131514,
      "movement": "down",
      "dayRangeHigh": 327939.505,
      "dayRangeLow": 659.505,
      "yearRangeHigh": 812496.45,
      "yearRangeLow": 0,
      "price": 1310.66,
      "initialNumber": 6193,
      "initialPrice": 250,
      "stockCategoryId": null,
      "VolumeTradedToday": [
          {
              "volume": 1
          }
      ],
      "prices": [
          659.505,
          327939.505,
          812496.45,
          184064.5,
          250,
          250,
          500,
          500,
          500,
          500,
          500,
          500,
          500,
          250,
          250,
          250,
          500,
          500,
          500,
          500,
          500,
          500,
          250,
          250,
          250,
          250,
          250,
          500,
          500,
          500,
          250,
          250,
          250,
          250,
          250,
          250,
          500,
          250,
          250,
          250,
          250,
          250,
          500,
          500,
          250,
          250,
          250,
          500,
          500,
          500,
          500,
          500,
          500,
          500,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          456.8,
          10,
          10,
          10,
          5,
          255,
          250,
          10,
          5,
          5,
          5,
          10,
          10,
          10,
          10,
          5,
          10,
          10,
          10,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          75,
          0,
          0,
          0,
          0,
          0,
          0,
          10,
          0,
          0,
          0,
          0,
          0,
          0,
          0
      ],
      "dates": [
          "2024-06-25",
          "2024-06-25",
          "2024-06-15",
          "2024-06-06",
          "2024-06-02",
          "2024-06-02",
          "2024-06-02",
          "2024-06-02",
          "2024-06-02",
          "2024-06-02",
          "2024-06-02",
          "2024-06-02",
          "2024-06-01",
          "2024-06-01",
          "2024-06-01",
          "2024-06-01",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-30",
          "2024-05-30",
          "2024-05-30",
          "2024-05-29",
          "2024-05-28",
          "2024-05-28",
          "2024-05-24",
          "2024-05-24",
          "2024-05-24",
          "2024-05-24",
          "2024-05-24",
          "2024-05-13",
          "2024-05-13",
          "2024-05-13",
          "2024-05-13",
          "2024-05-13",
          "2024-05-13",
          "2024-05-12",
          "2024-05-12",
          "2024-05-12",
          "2024-05-12",
          "2024-05-12",
          "2024-05-10",
          "2024-05-09",
          "2024-05-09",
          "2024-05-09",
          "2024-05-09",
          "2024-05-09",
          "2024-05-09",
          "2024-05-09",
          "2024-05-09",
          "2024-05-09",
          "2024-05-09",
          "2024-05-09",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02",
          "2024-05-02"
      ],
      "availableToBuy": 6193,
      "availableToSell": 4,
      "lastChange": -100
  },
  {
      "id": 2,
      "name": "Goldenpot",
      "image": "https://www.africaeats.com/wp-content/uploads/2020/06/Goldenpot-200.png",
      "active": false,
      "deleted": false,
      "description": "This is the default description",
      "listed": true,
      "symbol": "GPOT",
      "category": "Food",
      "exchange": "SEM",
      "currency": "USD",
      "percentageChange": -99.79930770050058,
      "movement": "down",
      "dayRangeHigh": 659.505,
      "dayRangeLow": 659.505,
      "yearRangeHigh": 656695,
      "yearRangeLow": 55,
      "price": 1310.66,
      "initialNumber": 3206,
      "initialPrice": 500,
      "stockCategoryId": null,
      "VolumeTradedToday": [
          {
              "volume": 17
          }
      ],
      "prices": [
          659.505,
          328615,
          328615,
          329212.5,
          329212.5,
          328347.5,
          328597.5,
          656695,
          328157.5,
          500,
          500,
          500,
          500,
          500,
          500,
          250,
          250,
          500,
          250,
          250,
          250,
          500,
          500,
          500,
          500,
          500,
          500,
          500,
          500,
          500,
          500,
          500,
          500,
          500,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          500,
          250,
          55,
          55,
          55,
          250
      ],
      "dates": [
          "2024-06-25",
          "2024-06-18",
          "2024-06-18",
          "2024-06-15",
          "2024-06-15",
          "2024-06-14",
          "2024-06-14",
          "2024-06-14",
          "2024-06-12",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-30",
          "2024-05-23",
          "2024-05-23",
          "2024-05-23",
          "2024-05-23",
          "2024-05-13",
          "2024-05-13",
          "2024-05-13",
          "2024-05-13",
          "2024-05-13",
          "2024-05-13",
          "2024-05-13",
          "2024-05-13",
          "2024-05-13",
          "2024-05-10",
          "2024-05-10",
          "2024-05-10",
          "2024-05-10",
          "2024-05-10",
          "2024-05-10",
          "2024-05-10",
          "2024-05-10",
          "2024-05-10",
          "2024-05-10",
          "2024-05-10",
          "2024-05-10",
          "2024-05-09",
          "2024-05-09",
          "2024-05-09",
          "2024-05-09",
          "2024-05-09",
          "2024-05-09",
          "2024-05-09",
          "2024-05-08",
          "2024-05-08",
          "2024-05-08",
          "2024-05-08",
          "2024-05-08",
          "2024-05-08",
          "2024-05-08",
          "2024-05-08",
          "2024-05-08",
          "2024-05-07",
          "2024-05-07",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03"
      ],
      "availableToBuy": 3206,
      "availableToSell": 10,
      "lastChange": -100
  },
  {
      "id": 6,
      "name": "Papoli Farmers Association",
      "image": "https://www.africaeats.com/wp-content/uploads/2022/08/Papoli-Farmers-Association-200.png",
      "active": true,
      "deleted": false,
      "description": "This is the default description",
      "listed": true,
      "symbol": "PPFA",
      "category": "Food",
      "exchange": "SEM",
      "currency": "USD",
      "percentageChange": 0,
      "movement": "constant",
      "dayRangeHigh": 328597.5,
      "dayRangeLow": 328597.5,
      "yearRangeHigh": 328597.5,
      "yearRangeLow": 0,
      "price": 393.19800000000004,
      "initialNumber": 997,
      "initialPrice": 500,
      "stockCategoryId": null,
      "VolumeTradedToday": [
          {
              "volume": 1
          }
      ],
      "prices": [
          328597.5,
          328597.5,
          500,
          500,
          500,
          250,
          250,
          66.8,
          66.8,
          66.8,
          33.4,
          255,
          250,
          66.8,
          0
      ],
      "dates": [
          "2024-06-14",
          "2024-06-14",
          "2024-05-25",
          "2024-05-25",
          "2024-05-23",
          "2024-05-23",
          "2024-05-23",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03",
          "2024-05-02",
          "2024-05-02"
      ],
      "availableToBuy": 997,
      "availableToSell": 2,
      "lastChange": 0
  },
  {
      "id": 8,
      "name": "Chicken Basket",
      "image": "https://www.africaeats.com/wp-content/uploads/2020/06/Chicken-Basket-400.png",
      "active": true,
      "deleted": false,
      "description": "This is the default description",
      "listed": true,
      "symbol": "CHKBS",
      "category": "Food",
      "exchange": "SEM",
      "currency": "USD",
      "percentageChange": 0,
      "movement": "constant",
      "dayRangeHigh": 250,
      "dayRangeLow": 250,
      "yearRangeHigh": 329212.5,
      "yearRangeLow": 250,
      "price": 262.132,
      "initialNumber": 72,
      "initialPrice": 250,
      "stockCategoryId": null,
      "VolumeTradedToday": [
          {
              "volume": 3
          }
      ],
      "prices": [
          250,
          250,
          250,
          250,
          329212.5,
          329212.5,
          328005,
          328157.5,
          500,
          500,
          500,
          250,
          500,
          500,
          500,
          500,
          500,
          500,
          500,
          500,
          250,
          250,
          250,
          250,
          250,
          250,
          250,
          500,
          500,
          500,
          478.4,
          478.4,
          250,
          250
      ],
      "dates": [
          "2024-06-24",
          "2024-06-24",
          "2024-06-24",
          "2024-06-24",
          "2024-06-15",
          "2024-06-15",
          "2024-06-13",
          "2024-06-13",
          "2024-06-01",
          "2024-06-01",
          "2024-06-01",
          "2024-06-01",
          "2024-05-31",
          "2024-05-31",
          "2024-05-30",
          "2024-05-30",
          "2024-05-30",
          "2024-05-30",
          "2024-05-30",
          "2024-05-30",
          "2024-05-29",
          "2024-05-29",
          "2024-05-29",
          "2024-05-29",
          "2024-05-29",
          "2024-05-24",
          "2024-05-24",
          "2024-05-23",
          "2024-05-23",
          "2024-05-23",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03"
      ],
      "availableToBuy": 72,
      "availableToSell": 6,
      "lastChange": 0
  },
  {
      "id": 5,
      "name": "Rogathe Dairy",
      "image": "https://www.africaeats.com/wp-content/uploads/2020/06/Rogathe-Dairy-logo-200.png",
      "active": true,
      "deleted": false,
      "description": "This is the default description",
      "listed": true,
      "symbol": "ROGD",
      "category": "Food",
      "exchange": "SEM",
      "currency": "USD",
      "percentageChange": -99.50111576749674,
      "movement": "down",
      "dayRangeHigh": 1648.7625,
      "dayRangeLow": 1648.7625,
      "yearRangeHigh": 658205,
      "yearRangeLow": 250,
      "price": 655.33,
      "initialNumber": 967,
      "initialPrice": 478.4,
      "stockCategoryId": null,
      "VolumeTradedToday": [
          {
              "volume": 6
          }
      ],
      "prices": [
          1648.7625,
          330490,
          657717.5,
          658205,
          500,
          500,
          500,
          500,
          250,
          250,
          250,
          500,
          500,
          500,
          500,
          500,
          500,
          500,
          250,
          250,
          250,
          500,
          500,
          250,
          250,
          500,
          500,
          500,
          500,
          500,
          478.4,
          456.8,
          456.8,
          478.4,
          478.4,
          250
      ],
      "dates": [
          "2024-06-25",
          "2024-06-19",
          "2024-06-18",
          "2024-06-18",
          "2024-06-03",
          "2024-06-03",
          "2024-06-03",
          "2024-06-02",
          "2024-06-01",
          "2024-06-01",
          "2024-06-01",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-31",
          "2024-05-30",
          "2024-05-30",
          "2024-05-30",
          "2024-05-30",
          "2024-05-30",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03",
          "2024-05-03"
      ],
      "availableToBuy": 967,
      "availableToSell": 5,
      "lastChange": -100
  },
]

export const portfolioStocks = [
  {
      "id": 48,
      "amount": 4,
      "user_id": 34,
      "stock_id": 1,
      "created_at": "2024-06-06T05:28:00.294Z",
      "logId": null,
      "stock": {
          "id": 1,
          "name": "Agro Supply ",
          "image": "https://res.cloudinary.com/button0010/image/upload/v1719234363/g24azj9w3hi5surahrsn.png",
          "active": true,
          "deleted": false,
          "description": "I have edited desc again",
          "listed": false,
          "symbol": "AGRP",
          "category": "Food",
          "exchange": "Mauritius Stock Exchange",
          "currency": "USD",
          "percentageChange": -99.79889431131514,
          "movement": "down",
          "dayRangeHigh": 327939.505,
          "dayRangeLow": 659.505,
          "yearRangeHigh": 812496.45,
          "yearRangeLow": 0,
          "price": 1,
          "initialNumber": 6193,
          "initialPrice": 250,
          "stockCategoryId": null
      }
  },
  {
      "id": 54,
      "amount": 2,
      "user_id": 34,
      "stock_id": 6,
      "created_at": "2024-06-14T09:24:14.887Z",
      "logId": null,
      "stock": {
          "id": 6,
          "name": "Papoli Farmers Association",
          "image": "https://www.africaeats.com/wp-content/uploads/2022/08/Papoli-Farmers-Association-200.png",
          "active": true,
          "deleted": false,
          "description": "This is the default description",
          "listed": true,
          "symbol": "PPFA",
          "category": "Food",
          "exchange": "SEM",
          "currency": "USD",
          "percentageChange": 0,
          "movement": "constant",
          "dayRangeHigh": 328597.5,
          "dayRangeLow": 328597.5,
          "yearRangeHigh": 328597.5,
          "yearRangeLow": 0,
          "price": 0.3,
          "initialNumber": 997,
          "initialPrice": 500,
          "stockCategoryId": null
      }
  },
  {
      "id": 51,
      "amount": 6,
      "user_id": 34,
      "stock_id": 8,
      "created_at": "2024-06-13T05:17:54.242Z",
      "logId": null,
      "stock": {
          "id": 8,
          "name": "Chicken Basket",
          "image": "https://www.africaeats.com/wp-content/uploads/2020/06/Chicken-Basket-400.png",
          "active": true,
          "deleted": false,
          "description": "This is the default description",
          "listed": true,
          "symbol": "CHKBS",
          "category": "Food",
          "exchange": "SEM",
          "currency": "USD",
          "percentageChange": 0,
          "movement": "constant",
          "dayRangeHigh": 250,
          "dayRangeLow": 250,
          "yearRangeHigh": 329212.5,
          "yearRangeLow": 250,
          "price": 0.2,
          "initialNumber": 72,
          "initialPrice": 250,
          "stockCategoryId": null
      }
  },
  {
      "id": 56,
      "amount": 2,
      "user_id": 34,
      "stock_id": 7,
      "created_at": "2024-06-15T10:36:53.190Z",
      "logId": null,
      "stock": {
          "id": 7,
          "name": "Boka Eats",
          "image": "https://www.africaeats.com/wp-content/uploads/2022/12/Boka-Eats-200.png",
          "active": true,
          "deleted": false,
          "description": "This is the default description",
          "listed": true,
          "symbol": "BEAT",
          "category": "Food",
          "exchange": "SEM",
          "currency": "USD",
          "percentageChange": -99.79967194441281,
          "movement": "down",
          "dayRangeHigh": 659.505,
          "dayRangeLow": 659.505,
          "yearRangeHigh": 329212.5,
          "yearRangeLow": 250,
          "price": 0.4,
          "initialNumber": 953,
          "initialPrice": 250,
          "stockCategoryId": null
      }
  },
  {
      "id": 58,
      "amount": 5,
      "user_id": 34,
      "stock_id": 5,
      "created_at": "2024-06-18T05:58:48.709Z",
      "logId": null,
      "stock": {
          "id": 5,
          "name": "Rogathe Dairy",
          "image": "https://www.africaeats.com/wp-content/uploads/2020/06/Rogathe-Dairy-logo-200.png",
          "active": true,
          "deleted": false,
          "description": "This is the default description",
          "listed": true,
          "symbol": "ROGD",
          "category": "Food",
          "exchange": "SEM",
          "currency": "USD",
          "percentageChange": -99.50111576749674,
          "movement": "down",
          "dayRangeHigh": 1648.7625,
          "dayRangeLow": 1648.7625,
          "yearRangeHigh": 658205,
          "yearRangeLow": 250,
          "price": 0.5,
          "initialNumber": 967,
          "initialPrice": 478.4,
          "stockCategoryId": null
      }
  },
  {
      "id": 50,
      "amount": 10,
      "user_id": 34,
      "stock_id": 2,
      "created_at": "2024-06-12T18:15:23.500Z",
      "logId": null,
      "stock": {
          "id": 2,
          "name": "Goldenpot",
          "image": "https://www.africaeats.com/wp-content/uploads/2020/06/Goldenpot-200.png",
          "active": false,
          "deleted": false,
          "description": "This is the default description",
          "listed": true,
          "symbol": "GPOT",
          "category": "Food",
          "exchange": "SEM",
          "currency": "USD",
          "percentageChange": -99.79930770050058,
          "movement": "down",
          "dayRangeHigh": 659.505,
          "dayRangeLow": 659.505,
          "yearRangeHigh": 656695,
          "yearRangeLow": 55,
          "price": 1,
          "initialNumber": 3206,
          "initialPrice": 500,
          "stockCategoryId": null
      }
  },
  {
      "id": 53,
      "amount": 4,
      "user_id": 34,
      "stock_id": 3,
      "created_at": "2024-06-13T20:06:26.664Z",
      "logId": null,
      "stock": {
          "id": 3,
          "name": "Paniel Meat Processing",
          "image": "https://www.africaeats.com/wp-content/uploads/2020/06/PMP-SAUSAGE-200.png",
          "active": true,
          "deleted": false,
          "description": "This is the default description",
          "listed": true,
          "symbol": "PMPR",
          "category": "Food",
          "exchange": "SEM",
          "currency": "USD",
          "percentageChange": -33.33333333333334,
          "movement": "down",
          "dayRangeHigh": 1978.515,
          "dayRangeLow": 659.505,
          "yearRangeHigh": 987527.5,
          "yearRangeLow": 7.5,
          "price": 1,
          "initialNumber": 68,
          "initialPrice": 250,
          "stockCategoryId": null
      }
  },
  {
      "id": 49,
      "amount": 6,
      "user_id": 34,
      "stock_id": 4,
      "created_at": "2024-06-06T07:04:33.086Z",
      "logId": null,
      "stock": {
          "id": 4,
          "name": "Swahili Honey",
          "image": "https://www.africaeats.com/wp-content/uploads/2020/06/Swahili-Honey-200.png",
          "active": true,
          "deleted": false,
          "description": "This is the default description",
          "listed": true,
          "symbol": "SHNY",
          "category": "Food",
          "exchange": "SEM",
          "currency": "USD",
          "percentageChange": 0,
          "movement": "constant",
          "dayRangeHigh": 1978.515,
          "dayRangeLow": 1319.01,
          "yearRangeHigh": 657230,
          "yearRangeLow": 66.8,
          "price": 2,
          "initialNumber": 966,
          "initialPrice": 250,
          "stockCategoryId": null
      }
  }
]

export const profile = {
  "id": 34,
  "username": "",
  "first_name": "Axel",
  "last_name": "Divin",
  "email": "xldivin@gmail.com",
  "recovery_email": "null",
  "password": "$2a$10$Pvfpn.j/S917yUhj1gg2IembCxwikSSuVIUm2YERqxpkPp07wBT0m",
  "phone_number": "780935541",
  "country_code": "+250",
  "image_url": null,
  "account_balance": 757391.225,
  "ledger_balance": 0,
  "kyc_verified": false,
  "email_verified": false,
  "date_of_birth": "28/5/2000",
  "gender": "male",
  "occupation": "Software Engineer",
  "country": "+250",
  "city": "KIGALI",
  "address": "Nyarugenge",
  "role": "user",
  "token": "acct_1PRofKCKcfgZOZ58",
  "created_at": "2024-05-23T20:41:57.684Z",
  "active": true,
  "history": [
      1,
      1,
      1,
      1,
      1,
      1,
      1
  ],
  "lastChange": 0,
  "holdingsBalance": 46004.166000000005,
  "dollarvalue": 656,
  "currency": "RWF"
}

export const stockTable = [
  {
      "stock": {
          "id": 1,
          "name": "Agro Supply ",
          "image": "https://res.cloudinary.com/button0010/image/upload/v1719234363/g24azj9w3hi5surahrsn.png",
          "active": true,
          "deleted": false,
          "description": "I have edited desc again",
          "listed": false,
          "symbol": "AGRP",
          "category": "Food",
          "exchange": "Mauritius Stock Exchange",
          "currency": "USD",
          "percentageChange": -99.79889431131514,
          "movement": "down",
          "dayRangeHigh": 327939.505,
          "dayRangeLow": 659.505,
          "yearRangeHigh": 812496.45,
          "yearRangeLow": 0,
          "price": 1,
          "initialNumber": 6193,
          "initialPrice": 250,
          "stockCategoryId": null,
          "prices": [
              {
                  "id": 465,
                  "price": 500,
                  "created_at": "2024-05-31T11:11:17.826Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 464,
                  "price": 500,
                  "created_at": "2024-05-31T10:49:22.811Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 463,
                  "price": 500,
                  "created_at": "2024-05-31T10:47:52.579Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 461,
                  "price": 500,
                  "created_at": "2024-05-31T10:46:23.165Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 460,
                  "price": 500,
                  "created_at": "2024-05-31T10:46:20.997Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 456,
                  "price": 500,
                  "created_at": "2024-05-31T10:36:28.038Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 455,
                  "price": 250,
                  "created_at": "2024-05-31T10:35:36.946Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 454,
                  "price": 250,
                  "created_at": "2024-05-31T10:35:33.936Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 453,
                  "price": 250,
                  "created_at": "2024-05-31T10:18:41.508Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 452,
                  "price": 250,
                  "created_at": "2024-05-31T10:18:38.579Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 451,
                  "price": 250,
                  "created_at": "2024-05-31T10:14:46.212Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 443,
                  "price": 500,
                  "created_at": "2024-05-31T09:58:46.254Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 440,
                  "price": 500,
                  "created_at": "2024-05-31T09:56:10.404Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 439,
                  "price": 500,
                  "created_at": "2024-05-31T09:56:07.002Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 433,
                  "price": 250,
                  "created_at": "2024-05-31T09:48:11.046Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 432,
                  "price": 250,
                  "created_at": "2024-05-31T09:48:08.709Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 427,
                  "price": 250,
                  "created_at": "2024-05-31T06:28:14.413Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 426,
                  "price": 250,
                  "created_at": "2024-05-31T06:28:12.457Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 425,
                  "price": 250,
                  "created_at": "2024-05-31T06:25:54.748Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 424,
                  "price": 250,
                  "created_at": "2024-05-31T06:25:10.158Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 412,
                  "price": 500,
                  "created_at": "2024-05-30T11:28:47.761Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 411,
                  "price": 250,
                  "created_at": "2024-05-30T11:26:29.409Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 410,
                  "price": 250,
                  "created_at": "2024-05-30T11:26:25.998Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 390,
                  "price": 250,
                  "created_at": "2024-05-29T11:35:04.621Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 379,
                  "price": 250,
                  "created_at": "2024-05-28T10:29:05.894Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 378,
                  "price": 250,
                  "created_at": "2024-05-28T10:29:01.083Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 368,
                  "price": 500,
                  "created_at": "2024-05-24T11:14:18.595Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 367,
                  "price": 500,
                  "created_at": "2024-05-24T11:14:11.603Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 366,
                  "price": 250,
                  "created_at": "2024-05-24T11:09:44.540Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 364,
                  "price": 250,
                  "created_at": "2024-05-24T03:56:48.197Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 363,
                  "price": 250,
                  "created_at": "2024-05-24T03:56:42.668Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 332,
                  "price": 500,
                  "created_at": "2024-05-13T04:29:12.366Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 331,
                  "price": 500,
                  "created_at": "2024-05-13T04:29:09.709Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 328,
                  "price": 500,
                  "created_at": "2024-05-13T04:27:49.353Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 324,
                  "price": 500,
                  "created_at": "2024-05-13T04:23:45.015Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 323,
                  "price": 500,
                  "created_at": "2024-05-13T04:20:12.448Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 322,
                  "price": 500,
                  "created_at": "2024-05-13T04:20:08.141Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 319,
                  "price": 500,
                  "created_at": "2024-05-12T09:51:25.488Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 318,
                  "price": 250,
                  "created_at": "2024-05-12T09:50:59.098Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 317,
                  "price": 250,
                  "created_at": "2024-05-12T09:50:57.309Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 316,
                  "price": 250,
                  "created_at": "2024-05-12T09:49:14.638Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 315,
                  "price": 250,
                  "created_at": "2024-05-12T09:49:09.929Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 302,
                  "price": 250,
                  "created_at": "2024-05-10T06:08:58.737Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 298,
                  "price": 250,
                  "created_at": "2024-05-09T11:12:39.417Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 297,
                  "price": 250,
                  "created_at": "2024-05-09T11:12:18.445Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 286,
                  "price": 250,
                  "created_at": "2024-05-09T10:00:35.954Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 284,
                  "price": 250,
                  "created_at": "2024-05-09T09:57:38.633Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 278,
                  "price": 250,
                  "created_at": "2024-05-09T04:54:15.531Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 277,
                  "price": 250,
                  "created_at": "2024-05-09T04:45:03.164Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 276,
                  "price": 250,
                  "created_at": "2024-05-09T04:41:10.272Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 275,
                  "price": 250,
                  "created_at": "2024-05-09T04:39:38.486Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 274,
                  "price": 250,
                  "created_at": "2024-05-09T04:37:30.357Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 273,
                  "price": 250,
                  "created_at": "2024-05-09T04:27:47.075Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 272,
                  "price": 250,
                  "created_at": "2024-05-09T04:26:01.217Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 255,
                  "price": 456.8,
                  "created_at": "2024-05-03T09:43:11.915Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 244,
                  "price": 10,
                  "created_at": "2024-05-03T05:48:57.521Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 243,
                  "price": 10,
                  "created_at": "2024-05-03T05:46:19.350Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 242,
                  "price": 10,
                  "created_at": "2024-05-03T05:34:29.072Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 241,
                  "price": 5,
                  "created_at": "2024-05-03T05:33:13.915Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 235,
                  "price": 255,
                  "created_at": "2024-05-03T05:01:14.940Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 234,
                  "price": 250,
                  "created_at": "2024-05-03T04:58:24.236Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 228,
                  "price": 10,
                  "created_at": "2024-05-02T17:49:10.815Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 227,
                  "price": 5,
                  "created_at": "2024-05-02T17:47:53.480Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 226,
                  "price": 5,
                  "created_at": "2024-05-02T17:47:26.854Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 225,
                  "price": 5,
                  "created_at": "2024-05-02T17:46:23.070Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 224,
                  "price": 10,
                  "created_at": "2024-05-02T14:42:33.342Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 223,
                  "price": 10,
                  "created_at": "2024-05-02T11:11:39.299Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 222,
                  "price": 10,
                  "created_at": "2024-05-02T10:45:53.085Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 217,
                  "price": 10,
                  "created_at": "2024-05-02T10:28:09.677Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 216,
                  "price": 5,
                  "created_at": "2024-05-02T10:27:59.596Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 215,
                  "price": 10,
                  "created_at": "2024-05-02T09:22:53.487Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 214,
                  "price": 10,
                  "created_at": "2024-05-02T09:17:31.682Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 213,
                  "price": 10,
                  "created_at": "2024-05-02T09:15:06.649Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 212,
                  "price": 0,
                  "created_at": "2024-05-02T09:07:14.575Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 211,
                  "price": 0,
                  "created_at": "2024-05-02T07:51:35.578Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 210,
                  "price": 0,
                  "created_at": "2024-05-02T07:33:32.030Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 209,
                  "price": 0,
                  "created_at": "2024-05-02T07:33:20.110Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 208,
                  "price": 0,
                  "created_at": "2024-05-02T07:33:07.186Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 207,
                  "price": 0,
                  "created_at": "2024-05-02T07:32:50.719Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 206,
                  "price": 0,
                  "created_at": "2024-05-02T07:32:41.444Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 205,
                  "price": 75,
                  "created_at": "2024-05-02T07:32:29.363Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 202,
                  "price": 0,
                  "created_at": "2024-05-02T05:52:00.097Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 201,
                  "price": 0,
                  "created_at": "2024-05-02T05:51:46.912Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 200,
                  "price": 0,
                  "created_at": "2024-05-02T05:51:19.615Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 199,
                  "price": 0,
                  "created_at": "2024-05-02T05:50:13.120Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 198,
                  "price": 0,
                  "created_at": "2024-05-02T05:49:55.326Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 197,
                  "price": 0,
                  "created_at": "2024-05-02T05:49:26.634Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 196,
                  "price": 10,
                  "created_at": "2024-05-02T05:49:19.786Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 195,
                  "price": 0,
                  "created_at": "2024-05-02T05:39:04.873Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 194,
                  "price": 0,
                  "created_at": "2024-05-02T05:35:54.270Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 192,
                  "price": 0,
                  "created_at": "2024-05-02T05:33:48.352Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 191,
                  "price": 0,
                  "created_at": "2024-05-02T05:33:29.433Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 190,
                  "price": 0,
                  "created_at": "2024-05-02T05:32:56.823Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 189,
                  "price": 0,
                  "created_at": "2024-05-02T05:32:36.171Z",
                  "stock_id": 1,
                  "logId": null
              },
              {
                  "id": 188,
                  "price": 0,
                  "created_at": "2024-05-02T05:18:58.206Z",
                  "stock_id": 1,
                  "logId": null
              }
          ]
      },
      "price": 500,
      "change": 0,
      "market_cap": 1000000
  },
  {
      "stock": {
          "id": 2,
          "name": "Goldenpot",
          "image": "https://www.africaeats.com/wp-content/uploads/2020/06/Goldenpot-200.png",
          "active": false,
          "deleted": false,
          "description": "This is the default description",
          "listed": true,
          "symbol": "GPOT",
          "category": "Food",
          "exchange": "SEM",
          "currency": "USD",
          "percentageChange": -99.79930770050058,
          "movement": "down",
          "dayRangeHigh": 659.505,
          "dayRangeLow": 659.505,
          "yearRangeHigh": 656695,
          "yearRangeLow": 55,
          "price": 1,
          "initialNumber": 3206,
          "initialPrice": 500,
          "stockCategoryId": null,
          "prices": [
              {
                  "id": 423,
                  "price": 500,
                  "created_at": "2024-05-31T05:57:56.098Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 422,
                  "price": 500,
                  "created_at": "2024-05-31T05:57:54.390Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 421,
                  "price": 500,
                  "created_at": "2024-05-31T05:57:13.163Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 420,
                  "price": 500,
                  "created_at": "2024-05-31T05:56:52.934Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 419,
                  "price": 500,
                  "created_at": "2024-05-31T05:56:51.325Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 418,
                  "price": 500,
                  "created_at": "2024-05-31T05:56:33.494Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 417,
                  "price": 250,
                  "created_at": "2024-05-31T05:56:14.693Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 416,
                  "price": 250,
                  "created_at": "2024-05-31T05:56:12.794Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 415,
                  "price": 500,
                  "created_at": "2024-05-31T05:10:51.318Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 414,
                  "price": 250,
                  "created_at": "2024-05-31T05:06:51.878Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 413,
                  "price": 250,
                  "created_at": "2024-05-31T05:06:48.400Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 407,
                  "price": 250,
                  "created_at": "2024-05-30T10:55:34.229Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 351,
                  "price": 500,
                  "created_at": "2024-05-23T02:37:52.646Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 350,
                  "price": 500,
                  "created_at": "2024-05-23T02:37:51.269Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 349,
                  "price": 500,
                  "created_at": "2024-05-23T02:37:10.612Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 347,
                  "price": 500,
                  "created_at": "2024-05-23T02:32:15.211Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 334,
                  "price": 500,
                  "created_at": "2024-05-13T06:07:28.178Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 333,
                  "price": 500,
                  "created_at": "2024-05-13T06:07:24.728Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 330,
                  "price": 500,
                  "created_at": "2024-05-13T04:28:44.132Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 329,
                  "price": 500,
                  "created_at": "2024-05-13T04:28:37.564Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 327,
                  "price": 500,
                  "created_at": "2024-05-13T04:27:49.200Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 326,
                  "price": 500,
                  "created_at": "2024-05-13T04:24:38.682Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 325,
                  "price": 500,
                  "created_at": "2024-05-13T04:24:29.670Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 321,
                  "price": 500,
                  "created_at": "2024-05-13T04:17:36.287Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 320,
                  "price": 500,
                  "created_at": "2024-05-13T04:17:33.818Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 314,
                  "price": 250,
                  "created_at": "2024-05-10T11:39:13.449Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 313,
                  "price": 250,
                  "created_at": "2024-05-10T11:39:07.048Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 312,
                  "price": 250,
                  "created_at": "2024-05-10T11:35:39.699Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 311,
                  "price": 250,
                  "created_at": "2024-05-10T11:35:36.428Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 310,
                  "price": 250,
                  "created_at": "2024-05-10T11:33:12.670Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 309,
                  "price": 250,
                  "created_at": "2024-05-10T10:51:43.131Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 308,
                  "price": 250,
                  "created_at": "2024-05-10T10:51:05.463Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 307,
                  "price": 250,
                  "created_at": "2024-05-10T10:49:09.584Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 306,
                  "price": 250,
                  "created_at": "2024-05-10T10:48:45.709Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 305,
                  "price": 250,
                  "created_at": "2024-05-10T06:16:49.161Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 304,
                  "price": 250,
                  "created_at": "2024-05-10T06:15:51.628Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 303,
                  "price": 250,
                  "created_at": "2024-05-10T06:15:18.129Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 296,
                  "price": 250,
                  "created_at": "2024-05-09T11:08:43.794Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 285,
                  "price": 250,
                  "created_at": "2024-05-09T10:00:35.816Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 283,
                  "price": 250,
                  "created_at": "2024-05-09T09:48:12.674Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 282,
                  "price": 250,
                  "created_at": "2024-05-09T09:45:23.881Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 281,
                  "price": 250,
                  "created_at": "2024-05-09T09:42:35.282Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 280,
                  "price": 250,
                  "created_at": "2024-05-09T09:24:25.470Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 279,
                  "price": 250,
                  "created_at": "2024-05-09T06:13:26.974Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 271,
                  "price": 250,
                  "created_at": "2024-05-08T11:09:10.996Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 270,
                  "price": 250,
                  "created_at": "2024-05-08T10:25:04.263Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 269,
                  "price": 250,
                  "created_at": "2024-05-08T10:21:02.014Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 268,
                  "price": 250,
                  "created_at": "2024-05-08T10:17:18.278Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 267,
                  "price": 250,
                  "created_at": "2024-05-08T10:09:00.245Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 266,
                  "price": 250,
                  "created_at": "2024-05-08T10:04:58.927Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 265,
                  "price": 250,
                  "created_at": "2024-05-08T10:02:58.979Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 264,
                  "price": 250,
                  "created_at": "2024-05-08T07:51:30.368Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 263,
                  "price": 250,
                  "created_at": "2024-05-08T07:34:51.880Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 261,
                  "price": 500,
                  "created_at": "2024-05-07T04:16:19.206Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 260,
                  "price": 250,
                  "created_at": "2024-05-07T03:32:45.089Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 247,
                  "price": 55,
                  "created_at": "2024-05-03T05:54:06.583Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 246,
                  "price": 55,
                  "created_at": "2024-05-03T05:53:15.163Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 245,
                  "price": 55,
                  "created_at": "2024-05-03T05:50:55.788Z",
                  "stock_id": 2,
                  "logId": null
              },
              {
                  "id": 232,
                  "price": 250,
                  "created_at": "2024-05-03T04:27:38.054Z",
                  "stock_id": 2,
                  "logId": null
              }
          ]
      },
      "price": 500,
      "change": 0,
      "market_cap": 1000000
  },
  {
      "stock": {
          "id": 3,
          "name": "Paniel Meat Processing",
          "image": "https://www.africaeats.com/wp-content/uploads/2020/06/PMP-SAUSAGE-200.png",
          "active": true,
          "deleted": false,
          "description": "This is the default description",
          "listed": true,
          "symbol": "PMPR",
          "category": "Food",
          "exchange": "SEM",
          "currency": "USD",
          "percentageChange": -33.33333333333334,
          "movement": "down",
          "dayRangeHigh": 1978.515,
          "dayRangeLow": 659.505,
          "yearRangeHigh": 987527.5,
          "yearRangeLow": 7.5,
          "price": 1,
          "initialNumber": 68,
          "initialPrice": 250,
          "stockCategoryId": null,
          "prices": [
              {
                  "id": 467,
                  "price": 500,
                  "created_at": "2024-05-31T11:12:47.157Z",
                  "stock_id": 3,
                  "logId": null
              },
              {
                  "id": 466,
                  "price": 500,
                  "created_at": "2024-05-31T11:12:41.503Z",
                  "stock_id": 3,
                  "logId": null
              },
              {
                  "id": 462,
                  "price": 500,
                  "created_at": "2024-05-31T10:47:12.939Z",
                  "stock_id": 3,
                  "logId": null
              },
              {
                  "id": 459,
                  "price": 500,
                  "created_at": "2024-05-31T10:45:05.967Z",
                  "stock_id": 3,
                  "logId": null
              },
              {
                  "id": 458,
                  "price": 500,
                  "created_at": "2024-05-31T10:44:22.851Z",
                  "stock_id": 3,
                  "logId": null
              },
              {
                  "id": 457,
                  "price": 500,
                  "created_at": "2024-05-31T10:44:19.552Z",
                  "stock_id": 3,
                  "logId": null
              },
              {
                  "id": 447,
                  "price": 500,
                  "created_at": "2024-05-31T10:03:57.245Z",
                  "stock_id": 3,
                  "logId": null
              },
              {
                  "id": 446,
                  "price": 500,
                  "created_at": "2024-05-31T10:03:54.040Z",
                  "stock_id": 3,
                  "logId": null
              },
              {
                  "id": 408,
                  "price": 250,
                  "created_at": "2024-05-30T10:56:17.182Z",
                  "stock_id": 3,
                  "logId": null
              },
              {
                  "id": 382,
                  "price": 250,
                  "created_at": "2024-05-29T05:13:12.570Z",
                  "stock_id": 3,
                  "logId": null
              },
              {
                  "id": 204,
                  "price": 75,
                  "created_at": "2024-05-02T06:48:39.886Z",
                  "stock_id": 3,
                  "logId": null
              },
              {
                  "id": 203,
                  "price": 7.5,
                  "created_at": "2024-05-02T06:47:34.926Z",
                  "stock_id": 3,
                  "logId": null
              }
          ]
      },
      "price": 500,
      "change": 0,
      "market_cap": 1000000
  },
  {
      "stock": {
          "id": 4,
          "name": "Swahili Honey",
          "image": "https://www.africaeats.com/wp-content/uploads/2020/06/Swahili-Honey-200.png",
          "active": true,
          "deleted": false,
          "description": "This is the default description",
          "listed": true,
          "symbol": "SHNY",
          "category": "Food",
          "exchange": "SEM",
          "currency": "USD",
          "percentageChange": 0,
          "movement": "constant",
          "dayRangeHigh": 1978.515,
          "dayRangeLow": 1319.01,
          "yearRangeHigh": 657230,
          "yearRangeLow": 66.8,
          "price": 2,
          "initialNumber": 966,
          "initialPrice": 250,
          "stockCategoryId": null,
          "prices": [
              {
                  "id": 470,
                  "price": 500,
                  "created_at": "2024-05-31T11:15:38.431Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 469,
                  "price": 500,
                  "created_at": "2024-05-31T11:14:47.557Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 468,
                  "price": 500,
                  "created_at": "2024-05-31T11:14:16.997Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 450,
                  "price": 500,
                  "created_at": "2024-05-31T10:08:36.727Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 449,
                  "price": 250,
                  "created_at": "2024-05-31T10:05:55.688Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 448,
                  "price": 250,
                  "created_at": "2024-05-31T10:04:27.755Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 445,
                  "price": 250,
                  "created_at": "2024-05-31T10:02:16.726Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 409,
                  "price": 250,
                  "created_at": "2024-05-30T11:09:59.624Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 385,
                  "price": 250,
                  "created_at": "2024-05-29T07:26:10.808Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 383,
                  "price": 250,
                  "created_at": "2024-05-29T05:14:15.871Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 381,
                  "price": 250,
                  "created_at": "2024-05-29T05:11:50.948Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 380,
                  "price": 250,
                  "created_at": "2024-05-29T04:39:36.472Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 365,
                  "price": 500,
                  "created_at": "2024-05-24T03:57:26.843Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 344,
                  "price": 250,
                  "created_at": "2024-05-13T10:47:17.086Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 343,
                  "price": 250,
                  "created_at": "2024-05-13T10:47:14.566Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 342,
                  "price": 250,
                  "created_at": "2024-05-13T10:46:34.625Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 341,
                  "price": 250,
                  "created_at": "2024-05-13T10:46:32.778Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 340,
                  "price": 250,
                  "created_at": "2024-05-13T10:46:03.731Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 339,
                  "price": 500,
                  "created_at": "2024-05-13T10:18:15.948Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 338,
                  "price": 500,
                  "created_at": "2024-05-13T10:17:04.965Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 337,
                  "price": 500,
                  "created_at": "2024-05-13T10:15:56.183Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 336,
                  "price": 500,
                  "created_at": "2024-05-13T08:56:39.114Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 335,
                  "price": 500,
                  "created_at": "2024-05-13T08:43:29.045Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 301,
                  "price": 250,
                  "created_at": "2024-05-10T06:01:28.530Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 300,
                  "price": 250,
                  "created_at": "2024-05-10T05:59:51.238Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 299,
                  "price": 250,
                  "created_at": "2024-05-10T05:59:42.796Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 295,
                  "price": 250,
                  "created_at": "2024-05-09T11:01:08.320Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 294,
                  "price": 250,
                  "created_at": "2024-05-09T10:59:23.861Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 293,
                  "price": 250,
                  "created_at": "2024-05-09T10:57:34.555Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 292,
                  "price": 250,
                  "created_at": "2024-05-09T10:56:38.946Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 291,
                  "price": 250,
                  "created_at": "2024-05-09T10:56:22.199Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 262,
                  "price": 500,
                  "created_at": "2024-05-07T06:17:53.023Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 248,
                  "price": 255,
                  "created_at": "2024-05-03T05:58:54.188Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 233,
                  "price": 250,
                  "created_at": "2024-05-03T04:39:56.540Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 231,
                  "price": 250,
                  "created_at": "2024-05-03T04:13:43.358Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 220,
                  "price": 66.8,
                  "created_at": "2024-05-02T10:41:27.562Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 219,
                  "price": 66.8,
                  "created_at": "2024-05-02T10:41:15.000Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 218,
                  "price": 66.8,
                  "created_at": "2024-05-02T10:41:02.335Z",
                  "stock_id": 4,
                  "logId": null
              },
              {
                  "id": 1,
                  "price": 100,
                  "created_at": "2024-04-29T09:56:36.150Z",
                  "stock_id": 4,
                  "logId": null
              }
          ]
      },
      "price": 500,
      "change": 400,
      "market_cap": 2000000
  },
  {
      "stock": {
          "id": 5,
          "name": "Rogathe Dairy",
          "image": "https://www.africaeats.com/wp-content/uploads/2020/06/Rogathe-Dairy-logo-200.png",
          "active": true,
          "deleted": false,
          "description": "This is the default description",
          "listed": true,
          "symbol": "ROGD",
          "category": "Food",
          "exchange": "SEM",
          "currency": "USD",
          "percentageChange": -99.50111576749674,
          "movement": "down",
          "dayRangeHigh": 1648.7625,
          "dayRangeLow": 1648.7625,
          "yearRangeHigh": 658205,
          "yearRangeLow": 250,
          "price": 0.5,
          "initialNumber": 967,
          "initialPrice": 478.4,
          "stockCategoryId": null,
          "prices": [
              {
                  "id": 474,
                  "price": 500,
                  "created_at": "2024-05-31T11:21:20.223Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 473,
                  "price": 500,
                  "created_at": "2024-05-31T11:21:17.944Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 444,
                  "price": 500,
                  "created_at": "2024-05-31T10:00:10.879Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 442,
                  "price": 500,
                  "created_at": "2024-05-31T09:58:17.871Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 441,
                  "price": 500,
                  "created_at": "2024-05-31T09:58:15.642Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 438,
                  "price": 500,
                  "created_at": "2024-05-31T09:54:08.609Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 437,
                  "price": 500,
                  "created_at": "2024-05-31T09:53:20.354Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 436,
                  "price": 250,
                  "created_at": "2024-05-31T09:52:30.725Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 435,
                  "price": 250,
                  "created_at": "2024-05-31T09:52:20.931Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 434,
                  "price": 250,
                  "created_at": "2024-05-31T09:48:21.252Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 431,
                  "price": 500,
                  "created_at": "2024-05-31T09:43:31.350Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 430,
                  "price": 500,
                  "created_at": "2024-05-31T09:42:50.802Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 429,
                  "price": 250,
                  "created_at": "2024-05-31T09:36:32.829Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 428,
                  "price": 250,
                  "created_at": "2024-05-31T09:36:29.822Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 406,
                  "price": 500,
                  "created_at": "2024-05-30T09:50:43.802Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 405,
                  "price": 500,
                  "created_at": "2024-05-30T09:50:41.911Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 404,
                  "price": 500,
                  "created_at": "2024-05-30T09:47:52.133Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 403,
                  "price": 500,
                  "created_at": "2024-05-30T09:47:29.013Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 402,
                  "price": 500,
                  "created_at": "2024-05-30T09:47:22.180Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 258,
                  "price": 478.4,
                  "created_at": "2024-05-03T11:56:10.948Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 254,
                  "price": 456.8,
                  "created_at": "2024-05-03T06:41:16.433Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 253,
                  "price": 456.8,
                  "created_at": "2024-05-03T06:39:29.090Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 252,
                  "price": 478.4,
                  "created_at": "2024-05-03T06:17:54.037Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 251,
                  "price": 478.4,
                  "created_at": "2024-05-03T06:17:29.379Z",
                  "stock_id": 5,
                  "logId": null
              },
              {
                  "id": 250,
                  "price": 250,
                  "created_at": "2024-05-03T06:17:15.024Z",
                  "stock_id": 5,
                  "logId": null
              }
          ]
      },
      "price": 500,
      "change": 0,
      "market_cap": 500000
  },
  {
      "stock": {
          "id": 6,
          "name": "Papoli Farmers Association",
          "image": "https://www.africaeats.com/wp-content/uploads/2022/08/Papoli-Farmers-Association-200.png",
          "active": true,
          "deleted": false,
          "description": "This is the default description",
          "listed": true,
          "symbol": "PPFA",
          "category": "Food",
          "exchange": "SEM",
          "currency": "USD",
          "percentageChange": 0,
          "movement": "constant",
          "dayRangeHigh": 328597.5,
          "dayRangeLow": 328597.5,
          "yearRangeHigh": 328597.5,
          "yearRangeLow": 0,
          "price": 0.3,
          "initialNumber": 997,
          "initialPrice": 500,
          "stockCategoryId": null,
          "prices": [
              {
                  "id": 371,
                  "price": 500,
                  "created_at": "2024-05-25T04:24:13.513Z",
                  "stock_id": 6,
                  "logId": null
              },
              {
                  "id": 370,
                  "price": 500,
                  "created_at": "2024-05-25T04:24:08.904Z",
                  "stock_id": 6,
                  "logId": null
              },
              {
                  "id": 348,
                  "price": 500,
                  "created_at": "2024-05-23T02:35:45.014Z",
                  "stock_id": 6,
                  "logId": null
              },
              {
                  "id": 346,
                  "price": 250,
                  "created_at": "2024-05-23T02:15:19.523Z",
                  "stock_id": 6,
                  "logId": null
              },
              {
                  "id": 345,
                  "price": 250,
                  "created_at": "2024-05-23T02:15:14.587Z",
                  "stock_id": 6,
                  "logId": null
              },
              {
                  "id": 240,
                  "price": 66.8,
                  "created_at": "2024-05-03T05:11:55.185Z",
                  "stock_id": 6,
                  "logId": null
              },
              {
                  "id": 239,
                  "price": 66.8,
                  "created_at": "2024-05-03T05:10:57.662Z",
                  "stock_id": 6,
                  "logId": null
              },
              {
                  "id": 238,
                  "price": 66.8,
                  "created_at": "2024-05-03T05:10:37.128Z",
                  "stock_id": 6,
                  "logId": null
              },
              {
                  "id": 237,
                  "price": 33.4,
                  "created_at": "2024-05-03T05:08:49.895Z",
                  "stock_id": 6,
                  "logId": null
              },
              {
                  "id": 236,
                  "price": 255,
                  "created_at": "2024-05-03T05:08:23.686Z",
                  "stock_id": 6,
                  "logId": null
              },
              {
                  "id": 230,
                  "price": 250,
                  "created_at": "2024-05-03T04:04:04.495Z",
                  "stock_id": 6,
                  "logId": null
              },
              {
                  "id": 221,
                  "price": 66.8,
                  "created_at": "2024-05-02T10:44:16.944Z",
                  "stock_id": 6,
                  "logId": null
              },
              {
                  "id": 193,
                  "price": 0,
                  "created_at": "2024-05-02T05:35:02.354Z",
                  "stock_id": 6,
                  "logId": null
              }
          ]
      },
      "price": 500,
      "change": 0,
      "market_cap": 300000
  },
  {
      "stock": {
          "id": 7,
          "name": "Boka Eats",
          "image": "https://www.africaeats.com/wp-content/uploads/2022/12/Boka-Eats-200.png",
          "active": true,
          "deleted": false,
          "description": "This is the default description",
          "listed": true,
          "symbol": "BEAT",
          "category": "Food",
          "exchange": "SEM",
          "currency": "USD",
          "percentageChange": -99.79967194441281,
          "movement": "down",
          "dayRangeHigh": 659.505,
          "dayRangeLow": 659.505,
          "yearRangeHigh": 329212.5,
          "yearRangeLow": 250,
          "price": 0.4,
          "initialNumber": 953,
          "initialPrice": 250,
          "stockCategoryId": null,
          "prices": [
              {
                  "id": 395,
                  "price": 500,
                  "created_at": "2024-05-30T09:38:57.066Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 394,
                  "price": 500,
                  "created_at": "2024-05-30T09:38:51.941Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 393,
                  "price": 500,
                  "created_at": "2024-05-30T09:37:53.913Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 392,
                  "price": 250,
                  "created_at": "2024-05-30T09:37:05.956Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 391,
                  "price": 250,
                  "created_at": "2024-05-30T09:36:54.133Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 377,
                  "price": 250,
                  "created_at": "2024-05-27T05:54:44.361Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 376,
                  "price": 250,
                  "created_at": "2024-05-27T05:25:21.755Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 375,
                  "price": 250,
                  "created_at": "2024-05-27T05:24:40.417Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 374,
                  "price": 250,
                  "created_at": "2024-05-27T05:21:00.035Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 373,
                  "price": 250,
                  "created_at": "2024-05-27T05:20:41.355Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 372,
                  "price": 500,
                  "created_at": "2024-05-25T04:25:19.400Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 369,
                  "price": 500,
                  "created_at": "2024-05-24T11:14:54.710Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 360,
                  "price": 500,
                  "created_at": "2024-05-23T10:01:42.262Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 359,
                  "price": 500,
                  "created_at": "2024-05-23T10:01:40.346Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 358,
                  "price": 500,
                  "created_at": "2024-05-23T09:57:03.921Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 357,
                  "price": 500,
                  "created_at": "2024-05-23T09:57:02.345Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 356,
                  "price": 500,
                  "created_at": "2024-05-23T09:53:03.786Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 355,
                  "price": 500,
                  "created_at": "2024-05-23T09:51:56.273Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 290,
                  "price": 250,
                  "created_at": "2024-05-09T10:46:22.561Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 289,
                  "price": 250,
                  "created_at": "2024-05-09T10:25:22.380Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 288,
                  "price": 250,
                  "created_at": "2024-05-09T10:23:02.669Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 287,
                  "price": 250,
                  "created_at": "2024-05-09T10:15:39.028Z",
                  "stock_id": 7,
                  "logId": null
              },
              {
                  "id": 259,
                  "price": 478.4,
                  "created_at": "2024-05-06T01:10:49.638Z",
                  "stock_id": 7,
                  "logId": null
              }
          ]
      },
      "price": 500,
      "change": 0,
      "market_cap": 400000
  },
  {
      "stock": {
          "id": 8,
          "name": "Chicken Basket",
          "image": "https://www.africaeats.com/wp-content/uploads/2020/06/Chicken-Basket-400.png",
          "active": true,
          "deleted": false,
          "description": "This is the default description",
          "listed": true,
          "symbol": "CHKBS",
          "category": "Food",
          "exchange": "SEM",
          "currency": "USD",
          "percentageChange": 0,
          "movement": "constant",
          "dayRangeHigh": 250,
          "dayRangeLow": 250,
          "yearRangeHigh": 329212.5,
          "yearRangeLow": 250,
          "price": 0.2,
          "initialNumber": 72,
          "initialPrice": 250,
          "stockCategoryId": null,
          "prices": [
              {
                  "id": 472,
                  "price": 500,
                  "created_at": "2024-05-31T11:20:06.757Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 471,
                  "price": 500,
                  "created_at": "2024-05-31T11:20:04.298Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 401,
                  "price": 500,
                  "created_at": "2024-05-30T09:46:14.747Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 400,
                  "price": 500,
                  "created_at": "2024-05-30T09:45:46.902Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 399,
                  "price": 500,
                  "created_at": "2024-05-30T09:45:44.768Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 398,
                  "price": 500,
                  "created_at": "2024-05-30T09:44:40.887Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 397,
                  "price": 500,
                  "created_at": "2024-05-30T09:43:04.706Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 396,
                  "price": 500,
                  "created_at": "2024-05-30T09:43:00.360Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 389,
                  "price": 250,
                  "created_at": "2024-05-29T11:01:42.099Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 388,
                  "price": 250,
                  "created_at": "2024-05-29T11:01:39.962Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 387,
                  "price": 250,
                  "created_at": "2024-05-29T10:59:36.266Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 386,
                  "price": 250,
                  "created_at": "2024-05-29T10:59:32.555Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 384,
                  "price": 250,
                  "created_at": "2024-05-29T05:16:31.174Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 362,
                  "price": 250,
                  "created_at": "2024-05-24T03:38:05.979Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 361,
                  "price": 250,
                  "created_at": "2024-05-24T03:37:43.124Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 354,
                  "price": 500,
                  "created_at": "2024-05-23T09:41:49.011Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 353,
                  "price": 500,
                  "created_at": "2024-05-23T09:41:10.343Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 352,
                  "price": 500,
                  "created_at": "2024-05-23T09:39:32.217Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 257,
                  "price": 478.4,
                  "created_at": "2024-05-03T11:53:26.319Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 256,
                  "price": 478.4,
                  "created_at": "2024-05-03T11:47:14.728Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 249,
                  "price": 250,
                  "created_at": "2024-05-03T06:10:34.407Z",
                  "stock_id": 8,
                  "logId": null
              },
              {
                  "id": 229,
                  "price": 250,
                  "created_at": "2024-05-03T04:02:20.316Z",
                  "stock_id": 8,
                  "logId": null
              }
          ]
      },
      "price": 500,
      "change": 0,
      "market_cap": 200000
  },
  {
      "stock": {
          "id": 16,
          "name": "Sample",
          "image": "https://res.cloudinary.com/button0010/image/upload/v1718429024/hkvkbpoqb3vztekqoqaq.jpg",
          "active": true,
          "deleted": false,
          "description": "This is the default description",
          "listed": true,
          "symbol": "SMPL",
          "category": "test",
          "exchange": "ANC",
          "currency": "USD",
          "percentageChange": 0,
          "movement": "Constant",
          "dayRangeHigh": 0,
          "dayRangeLow": 0,
          "yearRangeHigh": 0,
          "yearRangeLow": 0,
          "price": 2,
          "initialNumber": 0,
          "initialPrice": 0,
          "stockCategoryId": null,
          "prices": []
      },
      "price": 0,
      "change": 0,
      "market_cap": 2000000
  },
  {
      "stock": {
          "id": 17,
          "name": "Tuesday",
          "image": "https://res.cloudinary.com/button0010/image/upload/v1718432721/pboksidjxwzeyfpp2sun.png",
          "active": true,
          "deleted": false,
          "description": "This is the default descriptionjj",
          "listed": true,
          "symbol": "TDY",
          "category": "another test",
          "exchange": "ANC",
          "currency": "USD",
          "percentageChange": 0,
          "movement": "Constant",
          "dayRangeHigh": 658425,
          "dayRangeLow": 658425,
          "yearRangeHigh": 658425,
          "yearRangeLow": 658425,
          "price": 3,
          "initialNumber": 0,
          "initialPrice": 0,
          "stockCategoryId": null,
          "prices": []
      },
      "price": 0,
      "change": 0,
      "market_cap": 3000000
  },
  {
      "stock": {
          "id": 31,
          "name": "Test",
          "image": "https://res.cloudinary.com/button0010/image/upload/v1718718977/yvwhsurzzyjnrk9dgbt7.jpg",
          "active": true,
          "deleted": true,
          "description": "Test stock",
          "listed": true,
          "symbol": "TNT",
          "category": "Energy",
          "exchange": "Uganda",
          "currency": "USD",
          "percentageChange": 0,
          "movement": "Constant",
          "dayRangeHigh": 0,
          "dayRangeLow": 0,
          "yearRangeHigh": 0,
          "yearRangeLow": 0,
          "price": 1,
          "initialNumber": 0,
          "initialPrice": 0,
          "stockCategoryId": null,
          "prices": []
      },
      "price": 0,
      "change": 0,
      "market_cap": 1000000
  },
  {
      "stock": {
          "id": 35,
          "name": "Test stock",
          "image": "https://res.cloudinary.com/button0010/image/upload/v1719171833/jeuxhszwuskqqepxbt7f.png",
          "active": false,
          "deleted": false,
          "description": "Description",
          "listed": true,
          "symbol": "TST",
          "category": "Energy",
          "exchange": "Rwandan stock Exchange",
          "currency": "USD",
          "percentageChange": 0,
          "movement": "Constant",
          "dayRangeHigh": 0,
          "dayRangeLow": 0,
          "yearRangeHigh": 0,
          "yearRangeLow": 0,
          "price": 1,
          "initialNumber": 0,
          "initialPrice": 0,
          "stockCategoryId": null,
          "prices": []
      },
      "price": 0,
      "change": 0,
      "market_cap": 1000000
  },
  {
      "stock": {
          "id": 37,
          "name": "Edit stock",
          "image": "https://res.cloudinary.com/button0010/image/upload/v1719238069/pzk8akuor3b4w8dxf1dl.jpg",
          "active": false,
          "deleted": false,
          "description": "description",
          "listed": true,
          "symbol": "SYMB",
          "category": "Industrial",
          "exchange": "Rwandan stock Exchange",
          "currency": "USD",
          "percentageChange": 0,
          "movement": "Constant",
          "dayRangeHigh": 0,
          "dayRangeLow": 0,
          "yearRangeHigh": 0,
          "yearRangeLow": 0,
          "price": 4,
          "initialNumber": 0,
          "initialPrice": 0,
          "stockCategoryId": null,
          "prices": []
      },
      "price": 0,
      "change": 0,
      "market_cap": 4000000
  },
  {
      "stock": {
          "id": 38,
          "name": "LUNI",
          "image": "https://res.cloudinary.com/button0010/image/upload/v1719334953/v7kolpfrgjr9oyl2yoxj.png",
          "active": true,
          "deleted": false,
          "description": "TEST",
          "listed": true,
          "symbol": "LUNI",
          "category": "Food",
          "exchange": "Mauritius Stock Exchange",
          "currency": "USD",
          "percentageChange": 0,
          "movement": "Constant",
          "dayRangeHigh": 0,
          "dayRangeLow": 0,
          "yearRangeHigh": 0,
          "yearRangeLow": 0,
          "price": 39.99,
          "initialNumber": 0,
          "initialPrice": 0,
          "stockCategoryId": null,
          "prices": []
      },
      "price": 0,
      "change": 0,
      "market_cap": 39990000
  }
]

export const graphData = [
  {
      "totalPrice": 53436.177092499376,
      "totalChange": 0.008608293263043616
  },
  {
      "totalPrice": 53436.120320374896,
      "totalChange": 4034.7018284912615
  },
  {
      "totalPrice": 218.05627617284622,
      "totalChange": -16.252122828811796
  },
  {
      "totalPrice": 53436.120320374896,
      "totalChange": 4034.7018284912615
  },
  {
      "totalPrice": 218.05627617284622,
      "totalChange": -16.252122828811796
  },
  {
      "totalPrice": 53436.120320374896,
      "totalChange": 4034.7018284912615
  },
  {
      "totalPrice": 218.05627617284622,
      "totalChange": -16.252122828811796
  }
]

export const blogs = [
    {
        "id": 7,
        "title": "title",
        "content": "test content",
        "createdAt": "2024-06-17T13:35:54.110Z",
        "updatedAt": "2024-06-23T22:16:34.100Z",
        "published": true,
        "authorId": 49,
        "imageUrl": "https://res.cloudinary.com/button0010/image/upload/v1718631353/i7ry0lwqild6on9gw7ns.png",
        "draft": false,
        "author": {
            "id": 49,
            "username": "eddiesr",
            "first_name": "Edidiong",
            "last_name": "Udoh",
            "email": "technicaldeeofficial@gmail.com",
            "recovery_email": "edidiongudoh17@gmail.com",
            "password": "$2a$10$VNHE89siC8yUZNZkhEjHdekI1PRAvCNBsYB0n79bLbQ3D4qKS3D9C",
            "phone_number": "8035336810",
            "country_code": "+250",
            "image_url": "https://res.cloudinary.com/button0010/image/upload/v1718701026/e6nqpkznecpgghd0wiyp.png",
            "account_balance": 280333.336,
            "ledger_balance": 0,
            "kyc_verified": false,
            "email_verified": false,
            "date_of_birth": "28/5/2000",
            "gender": "Male",
            "occupation": "dsfdss",
            "country": "Nigeria",
            "city": "edit",
            "address": "fsfssf",
            "role": "admin",
            "token": "acct_1PTGDNC8FnWA3zKk",
            "created_at": "2024-05-28T14:47:07.451Z",
            "active": true
        },
        "categories": []
    },
    {
        "id": 12,
        "title": "edited new",
        "content": "<p style=\"text-align: center;\"><strong style=\"font-family: Arial, Helvetica, sans-serif; font-size: 24px;\">Description</strong></p><p>this is a blog description</p>",
        "createdAt": "2024-06-17T15:22:52.244Z",
        "updatedAt": "2024-06-23T22:20:31.884Z",
        "published": false,
        "authorId": 58,
        "imageUrl": "https://res.cloudinary.com/button0010/image/upload/v1718637771/buyqq8bkhgbpwgfh405t.png",
        "draft": false,
        "author": {
            "id": 58,
            "username": "Jabo",
            "first_name": "JABO",
            "last_name": "Jean Marie",
            "email": "contactjabo@gmail.com",
            "recovery_email": "null",
            "password": "$2a$10$4cer57YA0ns.ef/mb/9eReyrfIHanXEJYzC1OYwx3EQnSKTLg.Qia",
            "phone_number": "781213864",
            "country_code": "+250",
            "image_url": "https://res.cloudinary.com/button0010/image/upload/v1719090502/ulxvfnkbyhypc57hi68i.png",
            "account_balance": 1005932.5,
            "ledger_balance": 0,
            "kyc_verified": true,
            "email_verified": true,
            "date_of_birth": null,
            "gender": "Male",
            "occupation": "developer",
            "country": "Rwandan",
            "city": "Kigali",
            "address": "KG 580 ",
            "role": "admin",
            "token": null,
            "created_at": "2024-06-04T05:45:04.282Z",
            "active": true
        },
        "categories": []
    },
    {
        "id": 21,
        "title": "title",
        "content": "<p>tex</p>",
        "createdAt": "2024-06-24T10:04:01.226Z",
        "updatedAt": "2024-06-26T05:40:33.472Z",
        "published": false,
        "authorId": 58,
        "imageUrl": "https://res.cloudinary.com/button0010/image/upload/v1719223440/zkhr0zqq8ihhnr57ja27.jpg",
        "draft": false,
        "author": {
            "id": 58,
            "username": "Jabo",
            "first_name": "JABO",
            "last_name": "Jean Marie",
            "email": "contactjabo@gmail.com",
            "recovery_email": "null",
            "password": "$2a$10$4cer57YA0ns.ef/mb/9eReyrfIHanXEJYzC1OYwx3EQnSKTLg.Qia",
            "phone_number": "781213864",
            "country_code": "+250",
            "image_url": "https://res.cloudinary.com/button0010/image/upload/v1719090502/ulxvfnkbyhypc57hi68i.png",
            "account_balance": 1005932.5,
            "ledger_balance": 0,
            "kyc_verified": true,
            "email_verified": true,
            "date_of_birth": null,
            "gender": "Male",
            "occupation": "developer",
            "country": "Rwandan",
            "city": "Kigali",
            "address": "KG 580 ",
            "role": "admin",
            "token": null,
            "created_at": "2024-06-04T05:45:04.282Z",
            "active": true
        },
        "categories": []
    },
    {
        "id": 36,
        "title": "published blog",
        "content": "<p><strong>Title</strong></p>",
        "createdAt": "2024-06-24T10:49:05.079Z",
        "updatedAt": "2024-06-26T05:47:51.071Z",
        "published": false,
        "authorId": 58,
        "imageUrl": "https://res.cloudinary.com/button0010/image/upload/v1719226144/nyflpmpqwqdw4s1irwye.jpg",
        "draft": true,
        "author": {
            "id": 58,
            "username": "Jabo",
            "first_name": "JABO",
            "last_name": "Jean Marie",
            "email": "contactjabo@gmail.com",
            "recovery_email": "null",
            "password": "$2a$10$4cer57YA0ns.ef/mb/9eReyrfIHanXEJYzC1OYwx3EQnSKTLg.Qia",
            "phone_number": "781213864",
            "country_code": "+250",
            "image_url": "https://res.cloudinary.com/button0010/image/upload/v1719090502/ulxvfnkbyhypc57hi68i.png",
            "account_balance": 1005932.5,
            "ledger_balance": 0,
            "kyc_verified": true,
            "email_verified": true,
            "date_of_birth": null,
            "gender": "Male",
            "occupation": "developer",
            "country": "Rwandan",
            "city": "Kigali",
            "address": "KG 580 ",
            "role": "admin",
            "token": null,
            "created_at": "2024-06-04T05:45:04.282Z",
            "active": true
        },
        "categories": []
    },
    {
        "id": 42,
        "title": "Test blog",
        "content": "<p>Tes</p>",
        "createdAt": "2024-06-24T12:28:57.736Z",
        "updatedAt": "2024-06-26T05:48:21.801Z",
        "published": false,
        "authorId": 58,
        "imageUrl": "https://res.cloudinary.com/button0010/image/upload/v1719232137/m3yay6xuojldgko186ce.png",
        "draft": false,
        "author": {
            "id": 58,
            "username": "Jabo",
            "first_name": "JABO",
            "last_name": "Jean Marie",
            "email": "contactjabo@gmail.com",
            "recovery_email": "null",
            "password": "$2a$10$4cer57YA0ns.ef/mb/9eReyrfIHanXEJYzC1OYwx3EQnSKTLg.Qia",
            "phone_number": "781213864",
            "country_code": "+250",
            "image_url": "https://res.cloudinary.com/button0010/image/upload/v1719090502/ulxvfnkbyhypc57hi68i.png",
            "account_balance": 1005932.5,
            "ledger_balance": 0,
            "kyc_verified": true,
            "email_verified": true,
            "date_of_birth": null,
            "gender": "Male",
            "occupation": "developer",
            "country": "Rwandan",
            "city": "Kigali",
            "address": "KG 580 ",
            "role": "admin",
            "token": null,
            "created_at": "2024-06-04T05:45:04.282Z",
            "active": true
        },
        "categories": []
    }
]

export const transactions = [
    {
        "id": 213,
        "paymentId": "pi_3PU9PzFeA7WsV1R01QnKFs2t",
        "amount": 625,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-21T15:30:30.172Z"
    },
    {
        "id": 212,
        "paymentId": "tr_1PTMeKFeA7WsV1R0bptbNNuT",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "withdrawal",
        "createdAt": "2024-06-19T11:26:01.425Z"
    },
    {
        "id": 194,
        "paymentId": "77674195",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Flutterwave",
        "status": "success",
        "userId": 34,
        "paymentType": "withdrawal",
        "createdAt": "2024-06-19T05:58:18.867Z"
    },
    {
        "id": 193,
        "paymentId": "tr_1PTHTBFeA7WsV1R0xOfjoLHg",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "withdrawal",
        "createdAt": "2024-06-19T05:54:10.038Z"
    },
    {
        "id": 185,
        "paymentId": "77627298",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Flutterwave",
        "status": "success",
        "userId": 34,
        "paymentType": "withdrawal",
        "createdAt": "2024-06-18T11:25:28.534Z"
    },
    {
        "id": 184,
        "paymentId": "tr_1PT09iFeA7WsV1R0pvDamQvm",
        "amount": 610,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "withdrawal",
        "createdAt": "2024-06-18T11:24:54.710Z"
    },
    {
        "id": 183,
        "paymentId": "tr_1PT07vFeA7WsV1R0Qs6EzEmq",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "withdrawal",
        "createdAt": "2024-06-18T11:23:04.441Z"
    },
    {
        "id": 182,
        "paymentId": "5839512",
        "amount": 658,
        "currency": "RWF",
        "provider": "Flutterwave",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-18T11:17:36.829Z"
    },
    {
        "id": 181,
        "paymentId": "pi_3PT00IFeA7WsV1R00tfgVEjp",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-18T11:15:12.312Z"
    },
    {
        "id": 177,
        "paymentId": "5839280",
        "amount": 2000,
        "currency": "RWF",
        "provider": "Flutterwave",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-18T09:29:38.073Z"
    },
    {
        "id": 176,
        "paymentId": "5839248",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Flutterwave",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-18T09:12:28.254Z"
    },
    {
        "id": 175,
        "paymentId": "pi_3PSxxjFeA7WsV1R00Cz55pFZ",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-18T09:04:25.227Z"
    },
    {
        "id": 166,
        "paymentId": "tr_1PRppAFeA7WsV1R0CYXntOaX",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "withdrawal",
        "createdAt": "2024-06-15T06:10:53.314Z"
    },
    {
        "id": 165,
        "paymentId": "tr_1PRofQFeA7WsV1R0yXN7CZM2",
        "amount": 1500,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "withdrawal",
        "createdAt": "2024-06-15T04:56:45.537Z"
    },
    {
        "id": 159,
        "paymentId": "77299305",
        "amount": 10,
        "currency": "RWF",
        "provider": "Flutterwave",
        "status": "success",
        "userId": 34,
        "paymentType": "withdrawal",
        "createdAt": "2024-06-13T11:41:32.365Z"
    },
    {
        "id": 156,
        "paymentId": "pi_3PRBIgFeA7WsV1R00V3QQCMu",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-13T10:54:41.762Z"
    },
    {
        "id": 150,
        "paymentId": "pi_3PR73vFeA7WsV1R007lOQGw9",
        "amount": 997.5,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-13T06:23:10.203Z"
    },
    {
        "id": 149,
        "paymentId": "77273312",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Flutterwave",
        "status": "success",
        "userId": 34,
        "paymentType": "withdrawal",
        "createdAt": "2024-06-13T05:49:11.009Z"
    },
    {
        "id": 148,
        "paymentId": "tr_1PR6WnFeA7WsV1R0fqADUP90",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "withdrawal",
        "createdAt": "2024-06-13T05:48:54.321Z"
    },
    {
        "id": 144,
        "paymentId": "77245245",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Flutterwave",
        "status": "success",
        "userId": 34,
        "paymentType": "withdrawal",
        "createdAt": "2024-06-12T17:09:44.768Z"
    },
    {
        "id": 143,
        "paymentId": "77245246",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Flutterwave",
        "status": "success",
        "userId": 34,
        "paymentType": "withdrawal",
        "createdAt": "2024-06-12T17:09:44.763Z"
    },
    {
        "id": 142,
        "paymentId": "tr_1PQuWYFeA7WsV1R0S04hDBrn",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "withdrawal",
        "createdAt": "2024-06-12T16:59:51.777Z"
    },
    {
        "id": 141,
        "paymentId": "tr_1PQuROFeA7WsV1R0ffvGOScD",
        "amount": 10,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "withdrawal",
        "createdAt": "2024-06-12T16:54:31.408Z"
    },
    {
        "id": 140,
        "paymentId": "tr_1PQuPwFeA7WsV1R05eq1YH91",
        "amount": 10,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "withdrawal",
        "createdAt": "2024-06-12T16:53:01.333Z"
    },
    {
        "id": 139,
        "paymentId": "pi_3PQtZbFeA7WsV1R01eTTJf7K",
        "amount": 997.5,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-12T15:58:57.986Z"
    },
    {
        "id": 138,
        "paymentId": "5828518",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Flutterwave",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-12T15:58:06.277Z"
    },
    {
        "id": 135,
        "paymentId": "5828371",
        "amount": 1000,
        "currency": "RWF",
        "provider": "Flutterwave",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-12T14:00:25.750Z"
    },
    {
        "id": 124,
        "paymentId": "pi_3PQka8FeA7WsV1R00HwDxZb7",
        "amount": 997.5,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-12T06:22:54.202Z"
    },
    {
        "id": 123,
        "paymentId": "pi_3PQkUoFeA7WsV1R01EhbM6Ei",
        "amount": 997.5,
        "currency": "RWF",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-12T06:17:26.683Z"
    },
    {
        "id": 120,
        "paymentId": "5817843",
        "amount": 10,
        "currency": "RWF",
        "provider": "Flutterwave",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-06T09:46:27.522Z"
    },
    {
        "id": 119,
        "paymentId": "5817838",
        "amount": 10,
        "currency": "RWF",
        "provider": "Flutterwave",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-06T09:45:06.829Z"
    },
    {
        "id": 114,
        "paymentId": "pm_1POZ7AFeA7WsV1R0Njl69jzp",
        "amount": 150,
        "currency": "UGX",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-06T05:43:57.474Z"
    },
    {
        "id": 112,
        "paymentId": "pm_1POOnEFeA7WsV1R0jJDvfhDv",
        "amount": 10,
        "currency": "UGX",
        "provider": "Stripe",
        "status": "success",
        "userId": 34,
        "paymentType": "deposit",
        "createdAt": "2024-06-05T18:42:41.335Z"
    }
]
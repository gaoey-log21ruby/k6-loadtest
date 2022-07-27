import http from "k6/http";

const config = {
  waarn_path: "https://api.waarn.finance/core",
  jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjODRmNThkMy04ZGIzLTRlODktYWM1YS04YzVhMTUyNzdmOGYiLCJpYXQiOjE2NTY2NjI5NzMsImV4cCI6MTY2NTMwMjk3M30.FUGSrQeI6YxZqLU5hriLkDAlCtCDDWOhDBE9ogyBbw0",
  domain: "WAARN",
};

export const options = {
  thresholds: {
    http_req_failed: ["rate<0.01"], // http errors should be less than 1%
    http_req_duration: ["p(95)<1000"], // 95% of requests should be below 200ms
  },
};

export default function () {
  const url = `${config.waarn_path}/strategy/pair-arbitrage/pairs/search?domain=${config.domain}&searchText=AL`;
  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${config.jwt}`,
    },
  };

  let res = http.get(url, params);
  // console.log(JSON.stringify(res));
}

import http from "k6/http";

const config = JSON.parse(open(`../../env/waarn/${__ENV.APP_ENV}.json`));

export const options = {
  thresholds: {
    http_req_failed: ["rate<0.01"], // http errors should be less than 1%
    http_req_duration: ["p(95)<1000"], // 95% of requests should be below 200ms
  },
};

export default function () {
  console.log(`APP_ENV: ${config.APP_ENV}`);
  const url = `${config.base_url}/strategy/pair-arbitrage/pairs/search?domain=${config.domain}&searchText=AL`;
  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${config.jwt}`,
    },
  };

  let res = http.get(url, params);
  console.log(JSON.stringify(res));
}

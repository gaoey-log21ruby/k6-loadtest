import http from "k6/http";

const config = JSON.parse(open(`../../env/waarn/${__ENV.APP_ENV}.json`));

export const options = {
  thresholds: {
    http_req_failed: ["rate<0.01"], // http errors should be less than 1%
    http_req_duration: ["p(95)<200"], // 95% of requests should be below 200ms
  },
};

export default function () {
  const url = `${config.strategy_url}/${config.domain}/pair-arbitrage/pairs/search?searchText=AL`;
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  http.get(url, params);
}

import http from "k6/http";

const config = {
  waarn_path: "https://staging-api.waarn.finance/core",
  strategy_path: "https://staging-api.waarn.finance/strategy",
  jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMTQxMTA2MS00OWMzLTQwMWItYjVhNi0wOGZiNjRjNDQ1ZTAiLCJpYXQiOjE2NDgzOTY2NjQsImV4cCI6MTY1NzAzNjY2NH0.J2cqA_T5mV9qy9b03t1wG6mbWtPHh2cHIK3ztQCKMFw",
  domain: "waarn",
};

export const options = {
  thresholds: {
    http_req_failed: ["rate<0.01"], // http errors should be less than 1%
    http_req_duration: ["p(95)<200"], // 95% of requests should be below 200ms
  },
};

export default function () {
  const url = `${config.strategy_path}/${config.domain}/pair-arbitrage/pairs/search?searchText=AL`;
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  http.get(url, params);
}

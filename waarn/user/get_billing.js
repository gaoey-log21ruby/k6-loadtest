import http from "k6/http";

const config = JSON.parse(open(`../../env/waarn/${__ENV.APP_ENV}.json`));

export const options = {
  thresholds: {
    http_req_failed: ["rate<0.01"], // http errors should be less than 1%
    http_req_duration: ["p(95)<500"], // 95% of requests should be below 200ms
  },
};

export default function () {
  const url = `${config.base_url}/user/billing`;
  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${config.jwt}`,
    },
  };

  http.get(url, params);
}

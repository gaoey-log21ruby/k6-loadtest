import http from "k6/http";

const config = {
  waarn_path: "https://staging-api.waarn.finance/core",
  strategy_path: "https://staging-api.waarn.finance/strategy",
  jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3NTk1NTYxZC1jMmRmLTQ5Y2EtOGRiZi0xYzQwYWQxODVkMTMiLCJpYXQiOjE2NTI2NzM4MTgsImV4cCI6MTY2MTMxMzgxOH0.fB7headw3rrIvDBkcVAkjsJmaF69l-zTFHkCGBOSILU",
  domain: "waarn",
};

export const options = {
  thresholds: {
    http_req_failed: ["rate<0.01"], // http errors should be less than 1%
    http_req_duration: ["p(95)<500"], // 95% of requests should be below 200ms
  },
};

export default function () {
  const url = `${config.waarn_path}/user/balance-summary`;
  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${config.jwt}`,
    },
  };

  http.get(url, params);
}

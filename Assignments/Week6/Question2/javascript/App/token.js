

// const taken="eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MTYzOTg4MDksInVzZXIiOnsicmVzcG9uc2VDb2RlIjoiMjAwIiwidXNlcklkIjozMzUwOSwibXNpc2RuIjo5MTk1MzA2OTc1MjcsImxvZ2luIjoiS0FJWkFMQSIsImdyb3VwSWQiOiIiLCJwZXJtaXNzaW9ucyI6WyJPUkRFUl9DUkVBVEUiLCJPUkRFUl9VUERBVEUiLCJTRVRfU1RBVFVTX0FQUFJPVkVEIiwiU0VUX1NUQVRVU19DQU5DRUxMRUQiLCJTRVRfU1RBVFVTX1BBSUQiLCJTRVRfU1RBVFVTX0RFTElWRVJFRCIsIk9SREVSX0RJU0NPVU5UX0FQUExZIiwiT1JERVJfSVRFTV9QUklDRV9VUERBVEUiLCJPVVRMRVRfQ1JFQVRFIiwiQ0xPVURfSU1BR0VfVVBMT0FEIiwiT1VUTEVUX0FTU0lHTl9GTE9BVCJdLCJyb2xlcyI6WyJQcmVzZWxsZXIiXSwidGVycml0b3JpZXMiOlt7InRlcnJpdG9yeUlkIjo0LCJ0ZXJyaXRvcnlOYW1lIjoiSmFrYXJ0YSAtIEVhc3QiLCJ0ZXJyaXRvcmllcyI6W119XSwiZnVsbE5hbWUiOiJWaW5heSAoUFMpIiwidXNlclR5cGUiOiJFTVAiLCJvcmdJZCI6bnVsbCwiYXBwQ29udGFjdFJhZGl1cyI6NTAwLCJkZWZhdWx0TGFuZyI6ImVuIiwiZ2VuZGVyIjoiTSIsImthaXphbGFPdHAiOmZhbHNlLCJzdWNjZXNzZnVsIjp0cnVlfSwianRpIjoiMzM1MDkifQ.a0gVIEamfZ58x64lHiT3uuO6pPog_d5Rs7vC1gnMVdzDXrF02QcqIvMbpvo3blMMNUF4LRHqvyacko4vou-VCg"

const get=sessionStorage.getItem("token1")

$.ajaxSetup({
    headers: { "Netco-JWT": `${get}` }
});


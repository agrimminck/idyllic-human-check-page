const assert = require("assert");
const { isUuid, resolveApiBaseUrl } = require("./logic.js");
const D = "https://api.example.com/";
assert.strictEqual(resolveApiBaseUrl(D, null), "https://api.example.com");
assert.strictEqual(resolveApiBaseUrl(D, "http://localhost:4008"), "http://localhost:4008");
assert.strictEqual(resolveApiBaseUrl(D, "http://127.0.0.1:4008/x"), "http://127.0.0.1:4008");
for (const bad of ["https://evil.com", "http://localhost.evil.com", "http://evil.com/@localhost", "http://localhost@evil.com", "javascript:alert(1)", "garbage"])
    assert.strictEqual(resolveApiBaseUrl(D, bad), "https://api.example.com", bad);
assert(isUuid("123e4567-e89b-12d3-a456-426614174000"));
for (const bad of [null, "", "abc", "123e4567-e89b-12d3-a456-42661417400", "<script>"]) assert(!isUuid(bad), String(bad));
console.log("OK");

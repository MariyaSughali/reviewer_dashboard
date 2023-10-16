const request = require("supertest");
const app = require("../controller");

describe("Get /getreviewer", () => {
  it("Should return set of data", async () => {
    const res = await request(app).get("/getreviewer");
    expect(res.status).toBe(200);
  });

  it("Response time should be less than 200ms", async () => {
    const startTime = Date.now();
    const res = await request(app).get("/getreviewer");
    const endTime = Date.now();
    const resTime = endTime - startTime;
    expect(res.status).toBe(200);
    expect(resTime).toBeLessThan(200);
  });

  it("Response data should be an array", async () => {
    const res = await request(app).get("/getreviewer");
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe("Get /getTodoList", () => {
  it("Should return set of data", async () => {
    const res = await request(app).get("/getTodoList");
    expect(res.status).toBe(200);
  });

  it("Response time should be less than 200ms", async () => {
    const startTime = Date.now();
    const res = await request(app).get("/getTodoList");
    const endTime = Date.now();
    const resTime = endTime - startTime;
    expect(res.status).toBe(200);
    expect(resTime).toBeLessThan(200);
  });

  it("Response data should be an array", async () => {
    const res = await request(app).get("/getTodoList");
    expect(Array.isArray(res.body)).toBe(true);
  });
});

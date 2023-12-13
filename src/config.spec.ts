import { expect } from "chai";
import sinon from "sinon";
import config from "./config";

describe("config", () => {
  it("should return default values", async () => {
    let envStub = sinon.stub(process, "env").value({});
    expect(config().DATABASE_URL).equal("");
    envStub.restore();
  });

  it("should return env properties", async () => {
    let envStub = sinon.stub(process, "env").value({
      DATABASE_URL: "CUSTOM",
    });
    expect(config().DATABASE_URL).equal("CUSTOM");
    envStub.restore();
  });

  it("should return properties from env-cmd", async () => {
    expect(config().DATABASE_URL).equal("URL");
  });
});

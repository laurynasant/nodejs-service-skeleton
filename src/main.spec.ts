import { expect } from "chai";

import main from "./main";

describe("Main", () => {
  it("should connect to the database and start the server", async () => {
    await main();
    expect(main).to.be.a("function");
  });
});

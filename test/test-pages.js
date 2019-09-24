// Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = "YOUR_API_ROOT_URL";
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe("DESCRIPTION", () => {
  /*
   * Test the /GET route
   */

  describe("/GET rootEndPoints", () => {
    it("it should GET the root EndPoints", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("object");
          done();
        });
    });
  });
});

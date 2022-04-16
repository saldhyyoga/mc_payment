const app = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
chai.use(chaiHttp);
describe("Testing endpoint history", async() => {
  it("testing history with no parameter", done => {
    chai
    .request(app)
    .get("/history")
    .end((err, res) => {
      expect(res).to.have.status(400);
      expect(res.body.status).to.equal("ERROR");
      expect(res.body.message).to.equal("parameter user_id required");
      done();
    })
  })

  it("testing with parameter user_id and user already registered ", done => {
    chai
    .request(app)
    .get("/history?user_id=1")
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body.status).to.equal("Success");
      expect(res.body.data).to.be.an('array');
      done();
    })
  })

  it("testing with parameter user_id and user not registered ", done => {
    chai
    .request(app)
    .get("/history?user_id=100")
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body.status).to.equal("Success");
      expect(res.body.data).to.deep.equal([]);
      done();
    })
  });

  it("testing with parameter user_id and user already registered and parameter type", done => {
    chai
    .request(app)
    .get("/history?user_id=1&type=income")
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body.status).to.equal("Success");
      expect(res.body.data).to.be.an('array');
      done();
    })
  })

})
const app = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
chai.use(chaiHttp);
describe("Testing endpoint user", async() => {
  it("check user data if already in database", done => {
    chai
    .request(app)
    .get("/user/1")
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body.status).to.equal("Success");
      expect(res.body.data.name).to.be.a('string');
      expect(res.body.data.name).to.not.equal('');
      expect(res.body.data.saldo).to.be.a('number');
      done();
    })
  })

  it("testing with user_id not found", done => {
    chai
    .request(app)
    .get("/user/100")
    .end((err, res) => {
      expect(res).to.have.status(404);
      expect(res.body.status).to.equal("ERROR");
      expect(res.body.message).to.equal("user not found")
      done();
    })
  })

})
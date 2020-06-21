const supertest = require("supertest");
const assert = require('assert');
const app = require("../appaux");

describe("Solicitação de serviço", function() {

  it("Acessar lista de serviços", function(done) {
    supertest(app)
      .get("/api/orders/")
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  }).timeout(10000);

  it("Solicitar serviço", function(done) {
    let order = {
      user: "1234",
      provider: "4567",
      service: "Clinic Test"
    }
    supertest(app)
      .post("/api/orders/")
      .send(order)
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  }).timeout(10000);

});
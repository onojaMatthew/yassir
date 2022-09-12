process.env.NODE_ENV = 'test';
import { AirQuality } from "../models/air_qaulity";
import app from "../server";
import chai from "chai";
import expected from "chai";
import request from "supertest";
import chaiHttp from "chai-http";


chai.use(chaiHttp);

const { expect } = expected;

describe('Air Quality', () => {
  before(done => {
    console.log("Running the test script");
    done()
  })
  
  it("should return a welcome message", (done) => {
    request(app).get("/")
      .end((err, res) => {
        const body = res.body;
        expect(body.message).to.be.equals("WELCOME TO YASSIR ASSESSMENT API");
        done()
      });
  });
    
  it('it should get the nearest city air quality', (done) => {
    chai.request(app)
      .get('/api/v1/nearest_city_air_quality/35.98/140.33')
      .end((err, res) => {
        const body = res.body;
        expect(200);
        expect(body).to.be.instanceOf(Object);
        expect(body).to.have.own.property("Result");
        expect(res.status).to.equal(200);
        done();
    });
  });

  it('it should fail with 404 error code', (done) => {
    chai.request(app)
      .get('/api/v1/nearest_city_air_quality/35.98')
      .end((err, res) => {
        const body = res.body;
        expect(404);
        expect(body).to.be.instanceOf(Object);
        expect(res.status).to.equal(404);
        done();
    });
  });

  it('it should return the most polluted DATE and TIME', (done) => {
    chai.request(app)
    .get('/api/v1/most_polluted_time')
    .end((err, res) => {
      const body = res.body;
      expect(200)
      expect(body).to.have.own.property("Result");
      expect(body.Result).to.have.own.property("date");
      expect(body.Result).to.have.own.property("time")
      done();
    });
  });
});
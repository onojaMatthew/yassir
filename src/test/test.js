process.env.NODE_ENV = 'test';
import Product from "../models/product";
import app from "../server";
import chai from "chai";
import expected from "chai";
import request from "supertest";
import chaiHttp from "chai-http";


chai.use(chaiHttp);

const { expect } = expected;

let product;
let new_product;
describe('Product', () => {
  before(done => {
    Product.deleteMany().exec();

    new_product = {
      productName: 'cap',
      description: 'blue face cap',
      price: 3000,
      color: '#00ff00',
      category: '60e31acb50a6d54f5d5bb8c0',
      quantity: 12,
      lat: "6.458985",
      long: "3.601521",
      address: '1, sunday ogunyede street',
      userId: '60d4de0aa2db84c00a543ec0',
      front_view: 'https://gig-graphics.s3.amazonaws.com/photos/IMG_20210701_1226050321625138774.png',
      rear_view: 'https://gig-graphics.s3.amazonaws.com/photos/IMG_20210701_1226050321625138774.png',
      left_view: 'https://gig-graphics.s3.amazonaws.com/photos/IMG_20210701_1226050321625138774.png',
      right_view: 'https://gig-graphics.s3.amazonaws.com/photos/IMG_20210701_1226050321625138774.png',
      createdBy: ""
    }
    done()
  })
  
  it("should return a message", (done) => {
    request(app).get("/")
      .end((err, res) => {
        const body = res.body;
        expect(body.message).to.be.equals("WELCOME TO ALPHA PRODUCT SERVICE");
        done()
      });
  });
    
  it('it should create a new product', (done) => {
    chai.request(app)
      .post('/api/v1/product/new')
      .send(new_product)
      .end((err, res) => {
        product = res.body;
        expect(200);
        expect(product.message).to.be.equals("Success");
        // expect(product).to.be.instanceOf(Object);
        expect(res.status).to.equal(200);
        done();
    });
    
  });

  it('it should GET all the product', (done) => {
    chai.request(app)
    .get('/api/v1/product/all')
    .end((err, res) => {
      const body = res.body;
      expect(200)
      expect(body.message).to.equals("Success")
      done()
    });
    
  });

  it("should fetch a single product", done => {
    chai.request(app)
      .get("/api/v1/product/" + product.results._id)
      .end((err, res) => {
        const body = res.body
        expect(200);
        expect(body).to.have.instanceOf(Object);
        expect(body.message).to.equals("Success");
        done();
      })
  })

  it("should fetch a single merchant's products", done => {
    chai.request(app)
      .get(`/api/v1/product/user/${product.results.createdBy}`)
      .end((err, res) => {
        const body = res.body;
        expect(200);
        expect(body.message).to.equals("Success");
        // expect(body.results.createdBy).to.equals(product.results.createdBy);
        done()
      })
  })

  it ("should fetch products base on the search filter", done => {
    chai.request(app)
      .get(`/api/v1/product/search?searchTerm=food & grocery`)
      .end((err, res) => {
        const body = res.body;
        expect(200);
        expect(body.message).to.equals("Success")
        done();
      })
  })
  
  it ("should fetch products nearest to the location", done => {
    chai.request(app)
      .get(`/api/v1/product/search_location?lat=6.5963966&long=3.342141`)
      .end((err, res) => {

        const body = res.body;
        // expect(200);
        expect(body).to.be.instanceOf(Object)
        // expect(body.message).to.equals("Success");
        done();
      });
  });
  
});
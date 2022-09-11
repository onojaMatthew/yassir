process.env.NODE_ENV = 'test';
import Product from "../models/product";
import app from "../server";
import chai from "chai";
import expected from "chai";
import request from "supertest";
import chaiHttp from "chai-http";


chai.use(chaiHttp);

const { expect } = expected;
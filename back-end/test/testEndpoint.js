const chai = require("chai");
const chaiHttp = require("chai-http");


const server = require("../app");
chai.should();
chai.use(chaiHttp);


describe("Test Get All Feedback (GET /feedback)", () => {
    describe('Test Feedback with Correct Payload ', () => {
        it('1. Should Return All Feedback', (done) => {
            chai.request(server)
                .get('/feedback')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.feedbacks.should.be.a('array');
                    response.body.feedbacks[0].should.have.property('id');
                    response.body.feedbacks[0].should.have.property('name');
                    response.body.feedbacks[0].should.have.property('rating');
                    response.body.feedbacks[0].should.have.property('content');
                    done();
                })
        })
    })
})

describe("Test Create Feedback (POST /feedback)", () => {
    describe('Test Create Feedback with Correct Payload', () => {
        it('2. Should Create Feedback and Return 201', (done) => {
            const cleanFeedback = {
                name: "Abhista",
                content: "Content",
                rating: 5
            }
            chai.request(server)
                .post('/feedback')
                .send(cleanFeedback)
                .end((err, response) => {
                    response.should.have.status(201);
                    done();
                })
        })
    })
    describe('Test Create Feedback with Incorrect Payload', () => {
        it('3. Should Return 400 if Name empty', (done) => {
            const nameEmpty = {

                content: "Content",
                rating: 5
            }
            chai.request(server)
                .post('/feedback')
                .send(nameEmpty)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.body.message.should.eq('Name should be filled')
                    done();
                })
        })

        it('4. Should Return 400 if Content empty', (done) => {
            const contentEmpty = {

                name: "Abhista",
                rating: 5
            }
            chai.request(server)
                .post('/feedback')
                .send(contentEmpty)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.body.message.should.eq('Content should be filled')
                    done();
                })
        })

        it('5. Should Return 400 if Rating empty', (done) => {
            const contentEmpty = {

                name: "Abhista",
                content: "Content"

            }
            chai.request(server)
                .post('/feedback')
                .send(contentEmpty)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.body.message.should.eq('Rating should be filled')
                    done();
                })
        })
    })
})
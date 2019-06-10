/* eslint-disable promise/always-return */
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

chai.use(chaiHttp);

const sinon = require('sinon');

const test = require('firebase-functions-test')();

const admin = require('firebase-admin');

describe('Cloud functions testing', () => {
	let functions, adminInitStub;

	before(() => {
		// adminInitStub = sinon.stub(admin, 'initializeApp');
		functions = require('../index');
	});

	after(() => {
		// adminInitStub.restore();
		test.cleanup();
	});

	describe('Test1', () => {
		it('It should definitely do something', () => {
			return chai
				.request(functions.kengo_api)
				.get('/')
				.then(res => {
					assert.equal(
						res.body.message,
						'We have launched',
						'I do not know whats happening'
					);
				})
				.catch(err => {
					throw err;
				});
		});
	});

	describe('Test2', () => {
		it('This should post something', () => {
			return chai
				.request(functions.kengo_api)
				.post('/post')
				.send({ name: 'Kengo', age: 21 })
				.then(res => {
					assert.equal(
						res.body.message,
						'Person added',
						'It should return the posted value'
					);
				})
				.catch(err => {
					throw err;
				});
		});
	});
});

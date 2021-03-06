const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();

chai.use(chaiHttp);

let server;

beforeEach(() => {
	server = require('../server');
});

afterEach(() => {
  server.close();
});

describe('/blogs', () => {
	it('should display a list of blogs', (done) => {
		chai.request(server)
			.get('/blogs')
			.end((err, res) => {
				res.should.have.status(200);
		        res.should.be.json;
		        res.body.should.be.a('array');
		        res.body.length.should.be.above(0);
		        res.body.forEach(function(item) {
		          item.should.be.a('object');
		          item.should.have.all.keys(
		            'id', 'title', 'author', 'publishDate', 'content');
		        });
			done();
		});
	});

	it('should update a blog post', (done) => {
		chai.request(server)
			.get('/blogs')
			.end((err, res) => {
				console.log(res.body[0].id);
				const test = {
					id: res.body[0].id,
					title: "test",
					content: "test",
					author: "test"
				};
			
			chai.request(server)
				.put('/blogs/${res.body[0].id}')
				.end((err,res) => {
					res.should.have.status(200);
		            res.should.be.json;
		            res.body.should.be.a('object');
		            res.body.should.deep.equal(updated);
				});
			});
		done();
	});
});
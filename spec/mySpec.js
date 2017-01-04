var request = require("request");
var base_url = "http://localhost:3000/"

describe('Routes', function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });   
  });

  describe("GET /#/menu/1", function() {
    it("returns status code 200", function(done) {
      request.get(base_url + "/#/menu/1", function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });   
  });
});
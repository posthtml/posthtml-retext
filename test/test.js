/* jshint mocha: true, maxlen: false */
var pretext = require('..');
var posthtml = require('posthtml');
var fs = require('fs');
var expect = require('chai').expect;

function test(input, output, plugins, done) {
    posthtml()
        .use(pretext(plugins))
        .process(input)
        .then(function(result) {
            expect(output).to.eql(result.html);
            done();
        }).catch(function(error) {
            done(error);
        });
}

describe('Retext test', function() {
    it('plugins', function(done) {
        test(
            fs.readFileSync('./test/input.html', 'utf-8').toString(),
            fs.readFileSync('./test/output.html', 'utf-8').toString(),
            [[require('retext-emoji'), { 'convert': 'encode' }], require('retext-smartypants')],
            done
        );
    });
});

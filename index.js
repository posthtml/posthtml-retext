var toTree = require('posthtml/lib/parser').toTree;
var retext = require('retext')();

module.exports = function(plugins) {

    plugins.forEach(function(plugin) {
        Array.isArray(plugin)?
            retext.use.apply(retext, plugin):
            retext.use(plugin);
    });

    return function posthtmlRetext(tree) {
        tree.walk(function(node) {
            if(typeof(node) === 'string' && !/^\n\s*$/.test(node)) {
                return toTree(retext.process(node))[0];
            }
            return node;
        });
        return tree;
    };
};

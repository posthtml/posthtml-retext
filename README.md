# PostHTML-Retext
[![npm version](https://badge.fury.io/js/posthtml-retext.svg)](http://badge.fury.io/js/posthtml-retext)

[PostHTML](http://github.com/posthtml/posthtml) plugin wrapper over [Retext](https://github.com/wooorm/retext) extensible system for analysing and manipulating natural language

## Usage

```js
var fs = require('fs'),
    posthtml = require('posthtml'),
    html = fs.readFileSync('path/to/file.html');

posthtml()
    .use(require('posthtml-retext')([
        [require('retext-emoji'), { convert: 'encode' }], // Array if plugin has options
        require('retext-smartypants')
    ]))
    .process(html)
    .then(function(result) {
        fs.writeFileSync('path/to/file.html');
    })
```

#### Input html

```html
<html>
<body>
    <article class="my-article">
        <h1>Hello "world"...</h1>
        <p>The three wise monkeys [. . .] sometimes called the three mystic
        apes--are a pictorial maxim. Together they embody the proverbial
        principle to ("see no evil, hear no evil, speak no evil"). The
        three monkeys are Mizaru (:see_no_evil:), covering his eyes, who
        sees no evil; Kikazaru (:hear_no_evil:), covering his ears, who
        hears no evil; and Iwazaru (:speak_no_evil:), covering his mouth,
        who speaks no evil.</p>
    </article>
</body>
</html>
```

#### Output html

```html
<html>
<body>
    <article class="my-article">
        <h1>Hello “world”…</h1>
        <p>The three wise monkeys […] sometimes called the three mystic
        apes—are a pictorial maxim. Together they embody the proverbial
        principle to (“see no evil, hear no evil, speak no evil”). The
        three monkeys are Mizaru (🙈), covering his eyes, who
        sees no evil; Kikazaru (🙉), covering his ears, who
        hears no evil; and Iwazaru (🙊), covering his mouth,
        who speaks no evil.</p>
    </article>
</body>
</html>
```

## License
MIT

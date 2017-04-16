# summaryjs
A "text rank" based client side JavaScript summarizer library. This a port of this [python script](https://gist.github.com/shlomibabluki/5473521) to javascript. The "text rank" algorithm used in this library is well explained 
[here](https://thetokenizer.com/2013/04/28/build-your-own-summary-tool/). It is a naive summarizer algorithm and works fine in long well formatted and paragraphed texts.

## usage

```html
<script type="text/javascript" src="js/summary.js"></script>
```

```javascript
var input = 'A major change that has occur.........';
var summary = get_summary(input);
console.log(summary);
```

### demo
[https://bibhuticoder.github.io/summaryjs/](https://bibhuticoder.github.io/summaryjs/)

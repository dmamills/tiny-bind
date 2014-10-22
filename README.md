# tiny-bind

Fun with Object.observe! A simple data binding example. See a demo [here](http://dmamills.github.io/tiny-bind/)

### Usage

```
bower install tiny-bind
```

Create a dom element to bind to with the `data-bind` attribute
```
<div data-bind="counter"></div>
```

Create an TinyBind instance, then use it!
```
var tb = new TinyBind({
	name:'counter',
	default:0,
	add:function(change) { console.log('add!'); },
	update:function(change) { console.log('update!'); },
	delete:function(change) { console.log('delete!'); }
});

setInterval(function() {
	var v = tb.get();
	tb.set(++v);
},1000);
```

### License
MIT

# tiny-bind

Fun with Object.observe! A simple data binding example.

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

var tb = TinyBind({
	name:'counter',
	default:0,
	add:function(change) { console.log('add!'); },
	update:function(change) { console.log('update!'); },
 	delete:function(change) { console.log('delete!'); }
});

setInterval(function() {
	tb.counter++;
},1000);

```


### License
MIT

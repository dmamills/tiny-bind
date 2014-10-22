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

var incr = new TinyBind({
	name:'incr',
	default:0
});

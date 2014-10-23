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

var nameObj = new TinyBind({
	name:'name',
	default:''
});

var nameEl = document.getElementById('name');
nameEl.addEventListener('keydown',function() {nameObj.set(nameEl.value); });
nameEl.addEventListener('keyup',function() {nameObj.set(nameEl.value); });

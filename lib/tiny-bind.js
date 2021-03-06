
function TinyBind(options) {
	if(!this instanceof TinyBind) return new TinyBind(options);
	var self = this;
	var name = options.name;
	var types = ['add','update','delete'];
	self.options = options;
	self.obj = {};

	self.domEls = findElements();
	Object.observe(self.obj,function(changes) {
		changes.forEach(function(change) {
			for(var i =0; i<types.length;i++) {
				if(change.type === types[i] && self.options[types[i]]) self.options[types[i]](change);
			}

			self.domEls.forEach(function(el) {
				var obj = self.obj[self.options.name];
				if(typeof obj === 'object') obj = JSON.stringify(obj);
				
				el.innerText = obj;
			});	
		});
	});

	if(self.options.default !== undefined) {
		self.obj[self.options.name] = self.options.default;
	}

	function findElements() {
		var bindEls = document.querySelectorAll('[data-bind]');
		var boundEls = [];
		Array.prototype.forEach.call(bindEls,function(el) {
			var bindAttr = el.getAttribute('data-bind');
			if(bindAttr === self.options.name) boundEls.push(el);	
		});

		return boundEls;
	}

	self.set = function(val) { self.obj[name] = val; };
	self.get = function() { return self.obj[name]; }; 

	return self;
};

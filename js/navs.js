$.widget("cv.navs", {
	options: {
		type: undefined,
		justified: undefined,
		stacked: undefined,
		itens: []
	}
});

$.cv.navs.prototype._create = function() {
	this.refresh();
};

$.cv.navs.prototype._destroy = function() {
	this.options = undefined;
};

$.cv.navs.prototype.refresh = function(newOptions) {
		
	if (this._isValidElementType(this.element)) {
		this.element.text("cv.navs: Use UL element for this component.");
		return;
	}

	if (newOptions != undefined) {
		for (var attr in newOptions) {
			this.options[attr] = newOptions[attr];
		}
	}

	this._removeComponentCss(this.element);
	this._removeChildren(this.element);
	this._addComponentCss(this.element);
	this._addChildren(this.element, this.options.itens);
};

$.cv.navs.prototype._isValidElementType = function(element) {
	var elemType = element.prop('nodeName').toUpperCase();
	return elemType != 'UL';
};


$.cv.navs.prototype._VALID_TYPES = ['pills', 'tabs'];
$.cv.navs.prototype._DEFAULT_TYPE = $.cv.navs.prototype._VALID_TYPES[0];

$.cv.navs.prototype._getType = function(type) {
	
	if (type == undefined || type == null) {
		return this._DEFAULT_TYPE;
	}
	
	if (this._VALID_TYPES.indexOf(type) == -1) {
		console.warn("Invalid option 'type': " + type);
		return this._DEFAULT_TYPE;
	}
	
	return type;
};

$.cv.navs.prototype._addComponentCss = function(element) {
	var type = this._getType(this.options.type);
	element.addClass("nav " + "nav-"+type);
	if (this.options.justified) {
		element.addClass("nav-justified");	
	}
	if (this.options.stacked) {
		element.addClass("nav-stacked");	
	}
};

$.cv.navs.prototype._removeComponentCss = function(element) {
	element.removeClass('nav nav-pills nav-tabs nav-stacked nav-justified');
};

$.cv.navs.prototype._addChildren = function(element, itens) {
	if ($.isArray(itens)) {
		itens.forEach(function(item) {
			var li = $('<li>', {role: 'presentation', class: (item.active == true ? 'active' : '')});
			var link = $('<a>', {href: (item.href ? item.href : '#')});
			link.text(item.text);
			link.appendTo(li);
			li.appendTo(element);

			li.click(function(event) {
				var liSelected = $(this);
				liSelected.parent().children().removeClass('active');
				liSelected.addClass('active');
			});
		});

	}
};

$.cv.navs.prototype._removeChildren = function(element) {
	element.children().remove();
};
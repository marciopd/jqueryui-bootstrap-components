$.widget("cv.listgrouplinkeditens", {
	options: {
		itens: []
	}
});

$.cv.listgrouplinkeditens.prototype._create = function() {
	this.refresh();
};

$.cv.listgrouplinkeditens.prototype._destroy = function() {
	this.options = undefined;
};

$.cv.listgrouplinkeditens.prototype.refresh = function(newOptions) {
		
	if (this._isInvalidElementType(this.element)) {
		this.element.text("cv.listgrouplinkeditens: Use 'DIV' for this component.");
		return;
	}

	if (newOptions != undefined) {
		for (var attr in newOptions) {
			this.options[attr] = newOptions[attr];
		}
	}

	this._removeComponentCss(this.element);
	this._addComponentCss(this.element);

	this.element.children().remove();
	if ($.isArray(this.options.itens)) {
	    var element = this.element;
		this.options.itens.forEach(function(item) {
			var a = $('<a class="list-group-item">' + item.text + '</a>');
			a.attr('href', item.href ? item.href : '#');
			if (item.id) {
				a.attr('id', item.id);
			}
			a.appendTo(element);
		});
	}
};

$.cv.listgrouplinkeditens.prototype._isInvalidElementType = function(element) {
	var elemType = element.prop('nodeName').toUpperCase();
	return elemType != 'DIV';
};

$.cv.listgrouplinkeditens.prototype._addComponentCss = function(element) {
    element.addClass('list-group');
};

$.cv.listgrouplinkeditens.prototype._removeComponentCss = function(element) {
	element.removeClass('list-group');
};
$.widget("cv.listgroup", {
	options: {
		itens: []
	}
});

$.cv.listgroup.prototype._create = function() {
	this.refresh();
};

$.cv.listgroup.prototype._destroy = function() {
	this.options = undefined;
};

$.cv.listgroup.prototype.refresh = function(newOptions) {
		
	if (this._isInvalidElementType(this.element)) {
		this.element.text("cv.listgroup: Use 'UL' for this component.");
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
			var li = $('<li class="list-group-item">' + item.text + '</li>');
			if (item.id) {
				li.attr('id', item.id);
			}
			li.appendTo(element);
		});
	}
};

$.cv.listgroup.prototype._isInvalidElementType = function(element) {
	var elemType = element.prop('nodeName').toUpperCase();
	return elemType != 'UL';
};

$.cv.listgroup.prototype._addComponentCss = function(element) {
    element.addClass('list-group');
};

$.cv.listgroup.prototype._removeComponentCss = function(element) {
	element.removeClass('list-group');
};
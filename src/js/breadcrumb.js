$.widget("cv.breadcrumb", {
	options: {
		itens: []
	}
});

$.cv.breadcrumb.prototype._create = function() {
	this.refresh();
};

$.cv.breadcrumb.prototype._destroy = function() {
	this.options = undefined;
};

$.cv.breadcrumb.prototype.refresh = function(newOptions) {
		
	if (this._isInvalidElementType(this.element)) {
		this.element.text("cv.breadcrumb: Use 'OL' for this component.");
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
	    var lastItemIndex = this.options.itens.length -1;
	    var element = this.element;
		this.options.itens.forEach(function(item, index) {
			var li = $('<li></li>');
			if (index == lastItemIndex) {
                li.addClass('active');
                li.text(item.text);
			} else {
			    $('<a href="' + (item.href ? item.href : '#') + '">' + item.text + '</a>').appendTo(li);
			}
			li.appendTo(element);
		});
	}
};

$.cv.breadcrumb.prototype._isInvalidElementType = function(element) {
	var elemType = element.prop('nodeName').toUpperCase();
	return elemType != 'OL';
};

$.cv.breadcrumb.prototype._addComponentCss = function(element) {
    element.addClass('breadcrumb');
};

$.cv.breadcrumb.prototype._removeComponentCss = function(element) {
	element.removeClass('breadcrumb');
};
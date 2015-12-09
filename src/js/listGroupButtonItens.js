$.widget("cv.listgroupbuttonitens", {
	options: {
		itens: []
	}
});

$.cv.listgroupbuttonitens.prototype._create = function() {
	this.refresh();
};

$.cv.listgroupbuttonitens.prototype._destroy = function() {
	this.options = undefined;
};

$.cv.listgroupbuttonitens.prototype.refresh = function(newOptions) {
		
	if (this._isInvalidElementType(this.element)) {
		this.element.text("cv.listgroupbuttonitens: Use 'DIV' for this component.");
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
			var btn = $('<button type="button" class="list-group-item">' + item.text + '</button>');
			if (item.id) {
				btn.attr('id', item.id);
			}
			btn.appendTo(element);
		});
	}
};

$.cv.listgroupbuttonitens.prototype._isInvalidElementType = function(element) {
	var elemType = element.prop('nodeName').toUpperCase();
	return elemType != 'DIV';
};

$.cv.listgroupbuttonitens.prototype._addComponentCss = function(element) {
    element.addClass('list-group');
};

$.cv.listgroupbuttonitens.prototype._removeComponentCss = function(element) {
	element.removeClass('list-group');
};
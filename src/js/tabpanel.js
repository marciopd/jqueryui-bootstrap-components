$.widget("cv.tabpanel", {
	options: {}
});

$.cv.tabpanel.prototype._create = function() {
	this.refresh();
};

$.cv.tabpanel.prototype._destroy = function() {
	this.element.removeClass('tab-pane');
	this.element.removeAttr('role');

	this.options = undefined;
};

$.cv.tabpanel.prototype.refresh = function(newOptions) {
		
	if (this._isInvalidElementType(this.element)) {
		this.element.text("cv.tabpanel: Use 'DIV' element for this component.");
		return;
	}

	this.element.addClass('tab-pane');
	this.element.attr('role', 'tabpanel');
};

$.cv.tabpanel.prototype._isInvalidElementType = function(element) {
	var elemType = element.prop('nodeName').toUpperCase();
	return elemType != 'DIV';
};

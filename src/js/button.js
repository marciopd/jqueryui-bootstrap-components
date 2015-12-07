$.widget("cv.button", {
	options: {
		type: undefined,
		size: undefined,
		text: '',
		disabled: undefined
	}
});

$.cv.button.prototype._create = function() {
	this.refresh();
};

$.cv.button.prototype._destroy = function() {
	this.options = undefined;
};

$.cv.button.prototype.refresh = function(newOptions) {
		
	if (this._isInvalidElementType(this.element)) {
		this.element.text("cv.button: Use A or BUTTON for this component.");
		return;
	}

	if (newOptions != undefined) {
		for (var attr in newOptions) {
			this.options[attr] = newOptions[attr];
		}
	}

	this._removeComponentCss(this.element);
	this.element.removeAttr('disabled');
	
	this._addComponentCss(this.element);
	if (this.options.disabled == true) {
		this.element.attr('disabled', 'disabled');
	}

	this.element.text(this.options.text);
};

$.cv.button.prototype._isInvalidElementType = function(element) {
	var elemType = element.prop('nodeName').toUpperCase();
	return elemType != 'A' && elemType != 'BUTTON';
};

$.cv.button.prototype._DEFAULT_SIZE = undefined;
$.cv.button.prototype._VALID_SIZES = ['lg', 'sm', 'xs'];

$.cv.button.prototype._getSize = function(size) {
	
	if (size == undefined || size == null) {
		return this._DEFAULT_SIZE;
	}
	
	if (this._VALID_SIZES.indexOf(size) == -1) {
		console.warn("Invalid option 'size': " + size);
		return this._DEFAULT_SIZE;
	}

	return size;
};

$.cv.button.prototype._DEFAULT_TYPE = 'default';
$.cv.button.prototype._VALID_TYPES = ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link'];

$.cv.button.prototype._getType = function(type) {
	
	if (type == undefined || type == null) {
		return this._DEFAULT_TYPE;
	}
	
	if (this._VALID_TYPES.indexOf(type) == -1) {
		console.warn("Invalid option 'type': " + type);
		return this._DEFAULT_TYPE;
	}
	
	return type;
};

$.cv.button.prototype._addComponentCss = function(element) {
	var type = this._getType(this.options.type);
	var size = this._getSize(this.options.size);
	element.addClass("btn").addClass("btn-"+type);
	if (size != undefined) {
		element.addClass("btn-"+size);	
	}
};

$.cv.button.prototype._removeComponentCss = function(element) {
	element.removeClass('btn');

	this._VALID_TYPES.forEach(function(item) {
		element.removeClass('btn-'+item);
	});

	this._VALID_SIZES.forEach(function(item) {
		element.removeClass('btn-'+item);
	});	
};
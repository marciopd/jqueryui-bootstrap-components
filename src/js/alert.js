$.widget("cv.alert", {
	options: {
		text: '',
		type: undefined
	}
});

$.cv.alert.prototype._create = function() {
	this.refresh();
};

$.cv.alert.prototype._destroy = function() {
	this.options = undefined;
};

$.cv.alert.prototype.refresh = function(newOptions) {

    if (!this._isValidElementType(this.element)) {
        this.element.text("cv.alert: Use 'DIV' for this component.");
        return;
    }

	if (newOptions != undefined) {
		for (var attr in newOptions) {
			this.options[attr] = newOptions[attr];
		}
	}

	this.element.removeClass('alert-info alert-success alert-warning alert-danger');
	
	this.element.addClass('alert');
	var type = this._getType(this.options.type);
	if (type) {
	   this.element.addClass('alert-' + type);    
	}
	this.element.html(this.options.text);
};

$.cv.alert.prototype._isValidElementType = function(element) {
    var elemType = element.prop('nodeName').toUpperCase();
    return elemType == 'DIV';
};

$.cv.alert.prototype._VALID_TYPES = ['success', 'info', 'warning', 'danger'];

$.cv.alert.prototype._getType = function(type) {
    
    if (type == undefined || type == null) {
        return undefined;
    }
    
    if (this._VALID_TYPES.indexOf(type) == -1) {
        console.warn("Invalid option 'type': " + type);
        return undefined;
    }

    return type;
};


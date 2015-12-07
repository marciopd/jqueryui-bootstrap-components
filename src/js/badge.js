$.widget("cv.badge", {
	options: {
		total: 0
	}
});

$.cv.badge.prototype._create = function() {
	this.refresh();
};

$.cv.badge.prototype._destroy = function() {
    this.element.children('.badge').remove();
	this.options = undefined;
};

$.cv.badge.prototype.refresh = function(newOptions) {

	if (newOptions != undefined) {
		for (var attr in newOptions) {
			this.options[attr] = newOptions[attr];
		}
	}

	this.element.children('.badge').remove();
	$('<span class="badge">' + this._getTotal() + '</span>').appendTo(this.element);
};

$.cv.badge.prototype._getTotal = function() {
    if ($.isNumeric(this.options.total)) {
        return this.options.total;
    } else {
        return 0;
    }
}; 


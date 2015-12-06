$.widget("cv.dropdownMenuList", {
	options: {
		itens: []
	}
});

$.cv.dropdownMenuList.prototype._create = function() {
        this.element.addClass('dropdown-menu');
	this.refresh();
};

$.cv.dropdownMenuList.prototype._destroy = function() {
        this.element.removeClass('dropdown-menu');
        this.element.children().remove();
	this.options = undefined;
};

$.cv.dropdownMenuList.prototype.refresh = function(newOptions) {
	if (this._isValidElementType(this.element)) {
		this.element.text(".cv.dropdownMenuList: Use UL for this component.");
		return;
	}
	
	if (newOptions != undefined) {
		for (var attr in newOptions) {
			this.options[attr] = newOptions[attr];
		}
	}
	
	this._refresh();
};

$.cv.dropdownMenuList.prototype._isValidElementType = function(element) {
	var elemType = element.prop('nodeName').toUpperCase();
	return elemType != 'UL';
};


$.cv.dropdownMenuList.prototype._refresh = function() {
	this.element.children().remove();

	if ($.isArray(this.options.itens)) {	
		var ul = this.element;
		this.options.itens.forEach(
		    function(ddItem) {
			if (ddItem.separator) {
				$("<li role='separator' class='divider'></li>").appendTo(ul);
			} else {
				$("<li class='" + (!ddItem.class ? '' : ddItem.class) + "'><a href='" + (!ddItem.href ? '#' : ddItem.href) + "'>" + ddItem.text + "</a></li>").appendTo(ul);
			}
		});
	}	
};

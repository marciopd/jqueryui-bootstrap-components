$.widget("cv.buttondropdown", {
	options: {
		type: undefined,
		size: undefined,
		text: '',
		disabled: undefined,
		itens: []
	},
	_button: undefined
});

$.cv.buttondropdown.prototype._create = function() {
	this.element._button = $("<button></button>").button();
	this.element._button.appendTo(this.element);
	this.refresh();
};

$.cv.buttondropdown.prototype._destroy = function() {
	this.element._button.button('destroy');
	this.options = undefined;
};

$.cv.buttondropdown.prototype.refresh = function(newOptions) {

	if (this._isValidElementType(this.element)) {
		this.element.text(".cv.buttondropdown: Use DIV for this component.");
		return;
	}
	
	if (newOptions != undefined) {
		for (var attr in newOptions) {
			this.options[attr] = newOptions[attr];
		}
	}
	
	this._refreshButtonGroup();
	this._refreshButton();
	this._refreshDropdownList();
};

$.cv.buttondropdown.prototype._isValidElementType = function(element) {
	var elemType = element.prop('nodeName').toUpperCase();
	return elemType != 'DIV' && elemType != 'BUTTON';
};

$.cv.buttondropdown.prototype._refreshButtonGroup = function() {
	this.element.removeClass('btn-group');
	this.element.addClass('btn-group');
};

$.cv.buttondropdown.prototype._refreshButton = function() {
	this.element._button.removeClass('dropdown-toggle');
	this.element._button.removeAttr('data-toggle aria-haspopup aria-expanded');
	this.element._button.children("span[class='caret']").remove();
	
	this.element._button.button('refresh', $.extend(this.options, {text: this.options.text + ' '}));
	this.element._button.addClass('dropdown-toggle');
	this.element._button.attr('data-toggle', 'dropdown');
	this.element._button.attr('aria-haspopup', true);
	this.element._button.attr('aria-expanded', false);
	$('<span>', {class: 'caret'}).appendTo(this.element._button);
};

$.cv.buttondropdown.prototype._refreshDropdownList = function() {
	if ($.isArray(this.options.itens)) {
		this.element.children("ul[class='dropdown-menu']").remove();
	}
	
	if ($.isArray(this.options.itens)) {
		var dropdownList = $('<ul class="dropdown-menu"></ul>');
		dropdownList.appendTo(this.element);

		this.options.itens.forEach(function(item) {
			if (item.separator) {
				$("<li role='separator' class='divider'></li>").appendTo(dropdownList);
			} else {
				$("<li class='" + (!item.class ? '' : item.class) + "'><a href='" + (!item.href ? '#' : item.href) + "'>" + item.text + "</a></li>").appendTo(dropdownList);
			}
		});
	}	
};
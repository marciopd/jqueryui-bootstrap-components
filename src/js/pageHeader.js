$.widget("cv.pageheader", {
	options: {
		text: ''
	}
});

$.cv.pageheader.prototype._create = function() {
	this.refresh();
};

$.cv.pageheader.prototype._destroy = function() {
    this.element.children().remove();
    this.element.removeClass('page-header');
	this.options = undefined;
};

$.cv.pageheader.prototype.refresh = function(newOptions) {

	if (newOptions != undefined) {
		for (var attr in newOptions) {
			this.options[attr] = newOptions[attr];
		}
	}

    this.element.children().remove();

    this.element.addClass('page-header');
    var h1 = $('<h1>');
    h1.html(this.options.text);
	h1.appendTo(this.element);
};



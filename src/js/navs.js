$.widget("cv.navs", {
	options: {
		type: undefined,
		justified: undefined,
		stacked: undefined,
		itens: []
	}
});

$.cv.navs.prototype._create = function() {
	this.refresh();
};

$.cv.navs.prototype._destroy = function() {
	this.options = undefined;
};

$.cv.navs.prototype.refresh = function(newOptions) {
		
	if (this._isInvalidElementType(this.element)) {
		this.element.text("cv.navs: Use UL element for this component.");
		return;
	}

	if (newOptions != undefined) {
		for (var attr in newOptions) {
			this.options[attr] = newOptions[attr];
		}
	}

	this._removeComponentCss(this.element);
	this._removeChildren(this.element);
	this._addComponentCss(this.element);
	this._addChildren(this.element, this.options.itens);
	this.showSelectedItemTarget();
};

$.cv.navs.prototype.showSelectedItemTarget = function() {
    this._hideItensContent(this.options.itens);
    this._showActiveItemContent(this.options.itens);
};

$.cv.navs.prototype._isInvalidElementType = function(element) {
	var elemType = element.prop('nodeName').toUpperCase();
	return elemType != 'UL';
};


$.cv.navs.prototype._VALID_TYPES = ['pills', 'tabs'];
$.cv.navs.prototype._DEFAULT_TYPE = $.cv.navs.prototype._VALID_TYPES[0];

$.cv.navs.prototype._getType = function(type) {
	
	if (type == undefined || type == null) {
		return this._DEFAULT_TYPE;
	}
	
	if (this._VALID_TYPES.indexOf(type) == -1) {
		console.warn("Invalid option 'type': " + type);
		return this._DEFAULT_TYPE;
	}
	
	return type;
};

$.cv.navs.prototype._addComponentCss = function(element) {
	var type = this._getType(this.options.type);
	element.addClass("nav " + "nav-"+type);
	if (this.options.justified) {
		element.addClass("nav-justified");	
	}
	if (this.options.stacked) {
		element.addClass("nav-stacked");	
	}
};

$.cv.navs.prototype._removeComponentCss = function(element) {
	element.removeClass('nav nav-pills nav-tabs nav-stacked nav-justified');
};

$.cv.navs.prototype._addChildren = function(element, itens) {
	if ($.isArray(itens)) {

		var onClickItemFunction = function(event) {
		    var liSelected = $(this);
		    liSelected.parent().children('li.active').removeClass('active');
		    liSelected.addClass('active');
		    element.navs('showSelectedItemTarget');
		    event.preventDefault();
		};

		itens.forEach(function(item) {
			var li = $('<li>', {role: 'presentation', class: (item.active == true ? 'active' : '')});
			var link = $('<a>', {href: (item.href ? item.href : '#')});
			link.text(item.text);
			link.appendTo(li);

            if (item.id) {
                li.attr('id', item.id);
            }

			if (item.dropdownList) {
	            li.addClass('dropdown');
	            link.addClass('dropdown-toggle');
	            link.attr('data-toggle', 'dropdown'); 
	            link.attr('href', '#');
	            link.attr('role', 'button');
	            link.attr('aria-haspopup', 'true');
	            link.attr('aria-expanded', 'false');
	            $('<span class="caret">').appendTo(link);

	            if ($.isArray(item.dropdownList)) {
	                var dropdownMenuList = $('<ul>').dropdownMenuList({itens: item.dropdownList});
	                dropdownMenuList.children('li').click(onClickItemFunction);
	                dropdownMenuList.appendTo(li);
	            }
			}


			li.appendTo(element);

			li.click(onClickItemFunction);
		});

	}
};


$.cv.navs.prototype._removeChildren = function(element) {
	element.children().remove();
};

$.cv.navs.prototype._showActiveItemContent = function() {

    var activeItem = this.element.children('li.active:first');
    if (activeItem.length == 0) {
    	activeItem = this.element.children('li:first');
    }

    var dropdownListSelectedItem = activeItem.find('li.active:first');
    if (dropdownListSelectedItem.length > 0) {
		activeItem = dropdownListSelectedItem;
    }

    if (activeItem) {
        var hrefElement = this._getTargetElement(activeItem);
        if (hrefElement) {
            hrefElement.addClass('active in');
        }
    }
};

$.cv.navs.prototype._hideItensContent = function() {
    var itens = this.element.find('li');

    var component = this;
    $.each(itens, function(index, item) {
        var hrefElement = component._getTargetElement(item);
        if (hrefElement) {
            hrefElement.removeClass('active in');    
        }
    });

};

$.cv.navs.prototype._getTargetElement = function(element) {
    var href = $(element).children('a').first().attr('href');
    if (href && href[0] == "#" && href.length > 1) {
        return $(href);
    }
    return undefined;    
};

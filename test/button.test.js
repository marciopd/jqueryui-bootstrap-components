describe("button.js tests", function() {
 
    afterEach(function() {
    });

    it("should have jQuery loaded", function() {
        expect($).toBeDefined();
    });
    
    it("should be a A or BUTTON", function() {
    	var btn = $('<span></span>').button();
    	expect(btn.text()).toBe('cv.button: Use A or BUTTON for this component.');
    });    
    
    it("should be able to initialize button", function() {
    	var btn = $('<button></button>').button();
    	expect(btn.button('option', 'type')).toBe(null);
    	expect(btn.button('option', 'size')).toBe(null);
    	expect(countCss(btn)).toBe(2);
    	expect(btn.hasClass('btn')).toBe(true);
    	expect(btn.hasClass('btn-default')).toBe(true);
    });

    it("should be able to initialize link", function() {
    	var btn = $('<a></a>').button();
    	expect(btn.button('option', 'type')).toBe(null);
    	expect(btn.button('option', 'size')).toBe(null);
    	expect(countCss(btn)).toBe(2);
    	expect(btn.hasClass('btn')).toBe(true);
    	expect(btn.hasClass('btn-default')).toBe(true);
    });    

    it("should accept size small option", function(){
    	var btn = $('<button></button>').button({size: 'sm'});
    	expect(countCss(btn)).toBe(3);
    	expect(btn.button('option', 'size')).toBe('sm');
    	expect(btn.hasClass('btn')).toBe(true);
    	expect(btn.hasClass('btn-default')).toBe(true);
    	expect(btn.hasClass('btn-sm')).toBe(true);
    });

    it("should accept size large option", function(){
    	var btn = $('<button></button>').button({size: 'lg'});
    	expect(btn.button('option', 'size')).toBe('lg');
    	expect(countCss(btn)).toBe(3);
    	expect(btn.hasClass('btn')).toBe(true);
    	expect(btn.hasClass('btn-default')).toBe(true);
    	expect(btn.hasClass('btn-lg')).toBe(true);
    });

    it("should accept size x-small option", function(){
    	var btn = $('<button></button>').button({size: 'xs'});
    	expect(btn.button('option', 'size')).toBe('xs');
    	expect(countCss(btn)).toBe(3);
    	expect(btn.hasClass('btn')).toBe(true);
    	expect(btn.hasClass('btn-default')).toBe(true);
    	expect(btn.hasClass('btn-xs')).toBe(true);
    });
    
    it("should accept type primary option", function(){
    	var btn = $('<button></button>').button({type: 'primary'});
    	expect(countCss(btn)).toBe(2);
    	expect(btn.button('option', 'type')).toBe('primary');
    	expect(btn.hasClass('btn')).toBe(true);
    	expect(btn.hasClass('btn-primary')).toBe(true);
    });
    
    it("should accept type success option", function(){
    	var btn = $('<button></button>').button({type: 'success'});
    	expect(countCss(btn)).toBe(2);
    	expect(btn.button('option', 'type')).toBe('success');
    	expect(btn.hasClass('btn')).toBe(true);
    	expect(btn.hasClass('btn-success')).toBe(true);
    });

    it("should accept type and size option", function(){
    	var btn = $('<button></button>').button({type: 'success', size: 'lg'});
    	expect(countCss(btn)).toBe(3);
    	expect(btn.button('option', 'type')).toBe('success');
    	expect(btn.button('option', 'size')).toBe('lg');
    	expect(btn.hasClass('btn')).toBe(true);
    	expect(btn.hasClass('btn-success')).toBe(true);
    	expect(btn.hasClass('btn-lg')).toBe(true);
    });

    it("should accept type link option", function(){
    	var btn = $('<button></button>').button({type: 'link'});
    	expect(countCss(btn)).toBe(2);
    	expect(btn.button('option', 'type')).toBe('link');
    	expect(btn.hasClass('btn')).toBe(true);
    	expect(btn.hasClass('btn-link')).toBe(true);
    });

    it("should accept text option", function(){
    	var label = 'Texto!';
    	var btn = $('<button></button>').button({text: label});
    	expect(countCss(btn)).toBe(2);
    	expect(btn.button('option', 'text')).toBe(label);
    	expect(btn.hasClass('btn')).toBe(true);
    	expect(btn.hasClass('btn-default')).toBe(true);
    });

    it("should accept disabled option", function(){
    	var btn = $('<button></button>').button({disabled: true});

    	expect(btn.button('option', 'disabled')).toBe(true);
    	expect(btn.attr('disabled')).toBe('disabled');
    });
    
    it("should be refreshable", function(){
    	var label = 'Texto Final!';
    	var btn = $('<button></button>').button({type : 'primary', size : 'lg', text: 'Texto inicial'});
    	btn.button('refresh', {text: label, size : 'sm'});
    	expect(countCss(btn)).toBe(3);
    	expect(btn.button('option', 'text')).toBe(label);
    	expect(btn.hasClass('btn')).toBe(true);
    	expect(btn.hasClass('btn-primary')).toBe(true);
    	expect(btn.hasClass('btn-sm')).toBe(true);
    });

    function countCss(element) {
    	return $(element).attr("class").split(" ").length;
    }
});
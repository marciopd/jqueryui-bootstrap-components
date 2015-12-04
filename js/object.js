var NS = (NS == undefined ? {} : NS);

NS.myFunction = {
	stuff : [],

	init : function() {
		this.stuff.push('Testing');
	},
	reset : function() {
		this.stuff = [];
	},
	append: function(str1, str2) {
		return str1 + str2;
	}
};

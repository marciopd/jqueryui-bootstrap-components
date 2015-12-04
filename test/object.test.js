describe("myFunction", function() {
    var myfunc = NS.myFunction;
 
    beforeEach(function(){
    });
 
    afterEach(function() {
        myfunc.reset();
    });

    it("should have jQuery loaded", function() {
        expect($).toBeDefined();
    });
    
    it("should be able to initialize", function() {
        expect(myfunc.stuff.length).toEqual(0);
        expect(myfunc.init).toBeDefined();
        expect(myfunc.reset).toBeDefined();
        expect(myfunc.append).toBeDefined();
        expect($).toBeDefined();
    });
 
    it("should populate stuff during initialization", function(){
        myfunc.init();
        expect(myfunc.stuff.length).toEqual(1);
        expect(myfunc.stuff[0]).toEqual('Testing');
    });

    describe("appending strings", function() {
        it("should append 2 strings", function() {
            expect(myfunc.append('hello ','world')).toEqual('hello world');
        });
    });

});
//Scrub runs the provided function in a safe enviroment with limited access to global variables
//TODO: Add a whitelist as the second argument. Right now it blocks ALL variables in the global scope.
Skrub=function(func) {
	args=Array.prototype.slice.call(arguments,1);
	env=_.map(window, function(value, key) {
		///undefine all the tings
		return undefined;
	});
	_.defaults(args,env);
	func.apply(null,args);
}
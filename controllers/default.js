
exports.install = function() {
	F.route('/');
	F.route('/services/');
	F.route('/contact/');
	F.route('/references/');
	F.route('/index/');
	F.route('/home/', home);
	F.route('/test/', test);
};

function home () {
	// this.view('html/home/blog-agency');
	// this.view('html/home/index');
	this.view('home');
}

function test() {
	this.layout('');
	this.routeStatic('home');
}

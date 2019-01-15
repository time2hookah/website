
exports.install = function() {
	F.route('/', home);
	F.route('/services/');
	F.route('/contact/');
	F.route('/references/');
	F.route('/index/');
	F.route('/test/', test);
	F.route('/test1/', test1);


	F.route('/home/', home);
	F.route('/wizard/', wizard);
	F.route('/aboutUs/', aboutUs);
	F.route('/signup/', signup);
};

function home (req, res) {
	// this.layout('');
	this.view('home');
}

function wizard (req, res) {
	// this.layout('');
	this.view('wizard');
}

function test1 (req, res) {
	// this.layout('');
	this.plain('test1');
}

function test(req, res) {
	// console.log('here');
	var a = '123';
	
	// this.plain('123');
	
	this.layout('');
	this.view('static/signup');
}

function aboutUs (req, res) {
	// this.layout('');
	this.view('aboutUs');
}

function signup (req, res) {
	// this.layout('');
	this.view('signup');
}

// ===============================================================================
// LOAD DATA
// We are linking our routes to a data source.
// The data source holds an array of information on friends.
// ===============================================================================

var friendsData = require('../data/friends.js');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	// API GET Request
	// Below code handles when users "visit" a page.
	// When a user visits a link
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
	// ---------------------------------------------------------------------------

	app.get('/api/friends', function (req, res) {
		res.json(friendsData);
	});

	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// ---------------------------------------------------------------------------

	app.post('/api/friends', function (req, res) {


	});
};

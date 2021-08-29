const { v4: uuidv4 } = require("uuid");
const events = require("./mock.json");
const io = require("socket.io")(8080, {
	cors: {origin: "*"}
});

const viewDistance = 1;

const users = new Map();

const deg2rad = (deg) => deg * (Math.PI / 180);

const calculateDistance = ([lat1, lon1], [lat2, lon2]) => {
	const R = 6371;
	const dLat = deg2rad(lat2 - lat1);
	const dLon = deg2rad(lon2 - lon1);
	const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	const d = R * c;

	return d;
}


class User {
	constructor(socket) {
		this.id = uuidv4();
		users.set(this.id, this);

		console.log(`User ${this.id} connected`);

		this.socket = socket;

		// listen for the client disconnecting
		this.socket.on("disconnect", () => {
			users.delete(this.id);
			console.log(`User ${this.id} disconnected`);
		});

		this.socket.on("message", (value) => {
			this.socket.broadcast.emit("message", value);
		});

		this.socket.on("getEvents", (location, callback) => {
			const viewableEvents = events.filter((event) => (
				calculateDistance(location, event.location) < viewDistance
			));

			callback(viewableEvents);
		});
	}
}

// listen for client connections
io.on("connection", (socket) => {
	new User(socket);
});

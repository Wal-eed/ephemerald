const { v4: uuidv4 } = require("uuid");
const io = require("socket.io")(8080, {
	cors: {origin: "*"}
});

const users = new Map();

class User {
	// add any user state we need...

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
	}
}

// listen for client connections
io.on("connection", (socket) => {
	new User(socket);
});

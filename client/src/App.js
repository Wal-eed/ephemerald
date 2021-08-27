import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";

// connect to the server
const socket = io(`http://${window.location.hostname}:8080`);

// listen for connection to the server
socket.on("connected", () => {
	// ...
});

// listen for disconnection from the server
socket.on("disconnected", () => {
	// ...
});

// listen for data from the server
socket.on("myEventName", (/*a, b, ...*/) => {
	// ...
});

// send data to the server
socket.emit("myEventName"/*, a, b, ...*/);

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;

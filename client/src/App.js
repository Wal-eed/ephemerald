import "./App.css";
import io from "socket.io-client";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { Homepage, Chat, Messages, Memorabilia, People, QA, Map } from './pages';

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

			<Router>
				<Switch>
					<Route path="/" exact>
						<Homepage />
					</Route>
					<Route path="/chat">
						<Chat />
					</Route>
					<Route path="/memorabilia">
						<Memorabilia />
					</Route>
					<Route path="/messages">
						<Messages />
					</Route>
					<Route path="/people">
						<People />
					</Route>
					<Route path="/qa">
						<QA />
					</Route>
					<Route path="/map">
						<Map />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

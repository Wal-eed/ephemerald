import { ChakraProvider } from "@chakra-ui/react";
import {
	BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import io from "socket.io-client";
import "./App.css";
import { Chat, Homepage, Memorabilia, Messages, People, QA } from './pages';

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
			<ChakraProvider>

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
					</Switch>
				</Router>
			</ChakraProvider>

		</div>
	);
}

export default App;

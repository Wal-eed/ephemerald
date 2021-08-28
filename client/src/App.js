import { ChakraProvider } from "@chakra-ui/react";
import {
	BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import io from "socket.io-client";
import "./App.css";
import { Chat, Map, Homepage, Memorabilia, Messages, People, QA, Poll } from './pages';
import logo from 'src/assets/logo.png';
import { Helmet } from "react-helmet";

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
		<ChakraProvider>
			<Helmet>
				<link rel="icon" type="image/png" href={logo} />
			</Helmet>

			<Router>
				<Switch>
					<Route path="/" exact>
						<Homepage />
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
					<Route path="/poll">
						<Poll />
					</Route>
					<Route path="/map">
						<Map
							me={[-33.918, 151.231]}
							events={[
								{
									name: "1511 Lecture Group Chat",
									attendance: 10,
									location: [-33.918, 151.231],
									radius: 40,
									distance: 0.3
								},
								{
									name: "Elton John Concert",
									attendance: 119,
									location: [-33.917, 151.231],
									radius: 60,
									distance: 0.6
								}
							]}
						/>
					</Route>
				</Switch>
			</Router>
		</ChakraProvider>
	);
}

export default App;

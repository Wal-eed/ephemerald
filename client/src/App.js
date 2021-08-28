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
window.socket = io(`http://${window.location.hostname}:8080`);

function App() {
	return (
		<ChakraProvider>
			<Helmet>
				<link rel="icon" type="image/png" href={logo} />
			</Helmet>

			<Router>
				<Switch>
					<Route path="/" exact>
						<Homepage selectedTab={0} showSplash={true} />
					</Route>
					<Route path="/home" exact>
						<Homepage selectedTab={0} showSplash={false} />
					</Route>
					<Route path="/home/messages" exact>
						<Homepage selectedTab={2} showSplash={false} />
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
				</Switch>
			</Router>
		</ChakraProvider>
	);
}

export default App;

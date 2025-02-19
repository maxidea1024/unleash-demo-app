import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { FlagProvider, type IConfig } from "@unleash/proxy-client-react";
import { random } from "./util/random.ts";

let userId = localStorage.getItem("userId");
if (!userId) {
	userId = random(100_000_000).toString();
	localStorage.setItem("userId", userId);
}

const config: IConfig = {
	url: "http://localhost:4242/api/frontend",
	clientKey:
		"*:development.0e5f799e51a6c2a903018df7cb214a19054700b426d485910edfd837",
	refreshInterval: 5,
	appName: "ganpa-demo-app",
	context: { userId },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<FlagProvider config={config}>
			<App />
		</FlagProvider>
	</React.StrictMode>,
);

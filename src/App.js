import * as React from "react";

import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";

import TodoList from "./components/todoList.js";

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#a0c0ff",
			},
			secondary: {
				main: "#e6aaf0",
			},
			background: {
				default: "#20201c",
				paper: "#20201c",
			},
			text: {
				main: "#ffffff",
				primary: "#ffffff",
				secondary: "#cccccc",
			},
			error: {
				main: "#ff4f5f",
			},
			warning: {
				main: "#ffb779",
			},
			info: {
				main: "#78b7ff",
			},
			success: {
				main: "#6ff67a",
			},
		},
	});

	// const theme = {
	// 	bgColor: "#20201c",
	// 	borderThickness: 2,
	// 	borderRadius: 4,
	// 	borderColor: "#e6aaf0",
	// 	margin: 5,
	// 	padding: 3,
	// 	paddingX: 3,
	// 	paddingY: 2,
	// 	checkboxColor: "#e6aaf0",
	// 	textColor: "#ffffff",
	// 	titleColor: "#a0c0ff",
	// };
	// const [bgColor, setBgColor] = React.useState("#222222");
	// const [borderColor, setBorderColor] = React.useState("#e6ddf0");

	return (
		<ThemeProvider theme={theme}>
			<Box
				height="100vh"
				display="flex"
				flexDirection="column"
				bgcolor="background.default">
				{TodoList("todo", theme)}
			</Box>
		</ThemeProvider>
	);
}

export default App;

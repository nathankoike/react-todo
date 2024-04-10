import * as React from "react";

import { ThemeProvider } from "@mui/material/styles";

// Imports for basic todo box
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LinearProgress from "@mui/material/LinearProgress";

import MyCheckbox from "./myCheckbox.js";
import AddTaskModal from "./addTaskModal.js";

function LinearProgressWithLabel(value) {
	return (
		<Box sx={{ display: "flex", alignItems: "center", borderRadius: 2 }}>
			<Box sx={{ width: "100%", borderRadius: 2, mr: 1 }}>
				<LinearProgress
					variant="determinate"
					value={value * 100}
					sx={{ borderRadius: 2 }}
				/>
			</Box>
			<Box sx={{ minWidth: 35, borderRadius: 2 }}>
				<Typography variant="body2" color="text.primary">{`${Math.round(
					value * 100
				)}%`}</Typography>
			</Box>
		</Box>
	);
}

export default function TodoList(title, theme) {
	const [tasks, setTasks] = React.useState([]);
	const [taskCounter, setTaskCounter] = React.useState(0);
	const [completedTaskCounter, setCompletedTaskCounter] = React.useState(0);

	const [open, setOpen] = React.useState(false);
	// const label = { inputProps: { "aria-label": "Checkbox" } };

	const addToCompletedTasks = val => {
		setCompletedTaskCounter(c => c + val);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = value => {
		setOpen(false);
	};

	const addTaskToList = (taskName, priority) => {
		setTaskCounter(c => c + 1);

		const newTask = { label: taskName, prio: priority };
		setTasks([...tasks, newTask]);
	};

	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					border: 2,
					borderRadius: 4,
					display: "flex",
					flexDirection: "column",
					borderColor: "secondary.main",
					p: 2,
					m: 4,
					height: "100%",
					overflow: "auto",
				}}>
				{/* Headers */}
				<Box
					sx={{
						position: "sticky",
						position: "-webkit-sticky",
						display: "flex",
						flexDirection: "row",
						alignContent: "center",
						justifyContent: "space-between",
						justifySelf: "flex-start",
					}}>
					{/* Box Title */}
					<Typography
						variant="h4"
						color="text.primary"
						sx={{ alignContent: "center" }}>
						{title}
					</Typography>
					{/* Add Task */}
					<IconButton
						aria-label="delete"
						size="large"
						color="text.primary"
						onClick={handleClickOpen}>
						<AddCircleOutlineIcon fontSize="inherit" color="secondary" />
					</IconButton>
					{/* Add Task Dialog */}
					{AddTaskModal(open, handleClose, addTaskToList, theme)}
				</Box>
				{/* Checkboxes */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						columnCount: 1,
						p: 0,
						m: 0,
						maxHeight: "100%",
						overflow: "auto",
						justifySelf: "flex-start",
					}}>
					{tasks.map((task, i) => (
						<MyCheckbox
							key={i}
							label={task.label}
							prio={task.prio}
							addToCounter={addToCompletedTasks}></MyCheckbox>
					))}
				</Box>

				{/* Progress bar */}
				<Box sx={{ justifySelf: "flex-end" }}>
					{taskCounter
						? LinearProgressWithLabel(completedTaskCounter / taskCounter, theme)
						: null}
				</Box>
			</Box>
		</ThemeProvider>
	);
}

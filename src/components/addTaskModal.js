import * as React from "react";

import { ThemeProvider } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function AddTaskModal(open, onClose, handleSubmit, theme) {
	const [taskName, setTaskName] = React.useState("");
	const [priority, setPriority] = React.useState("");

	const handleClose = () => {
		setTaskName("");
		setPriority("");
		onClose();
	};

	const submit = () => {
		handleSubmit(taskName, priority);
		handleClose();
	};

	return (
		<ThemeProvider theme={theme}>
			{/* CITE: https://stackoverflow.com/questions/75644447/autofocus-not-working-on-open-form-dialog-with-button-component-in-material-ui-v */}
			<Modal disableRestoreFocus onClose={handleClose} open={open}>
				<Box
					autoComplete="off"
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						minWidth: "50%",
						border: 2,
						borderRadius: 4,
						borderColor: "primary.main",
						bgcolor: "background.default",
						p: 2,
					}}>
					{/* Header */}
					<Typography variant="h6" sx={{ color: "text.primary" }}>
						Add Task
					</Typography>
					{/* Task title input */}
					<TextField
						autoFocus
						fullWidth
						variant="standard"
						margin="dense"
						onChange={e => setTaskName(e.target.value)}
						label=<Typography color="text">Task name</Typography>
					/>
					{/* Priority select */}
					<FormControl>
						<FormLabel id="demo-row-radio-buttons-group-label">
							<Typography color="text">Priority</Typography>
						</FormLabel>
						<RadioGroup
							row
							onChange={e => setPriority(e.target.value)}
							aria-labelledby="demo-row-radio-buttons-group-label"
							name="row-radio-buttons-group">
							<FormControlLabel
								value="normal"
								control={<Radio />}
								label={<Typography color="text.primary">Normal</Typography>}
							/>
							<FormControlLabel
								value="medium"
								control={<Radio />}
								label={<Typography color="text.primary">Medium</Typography>}
							/>
							<FormControlLabel
								value="high"
								control={<Radio />}
								label={<Typography color="text.primary">High</Typography>}
							/>
						</RadioGroup>
					</FormControl>
					{/* Submit or close */}
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-evenly",
							alignContent: "center",
						}}>
						<Button onClick={submit}>Add Task</Button>
						<Button onClick={handleClose}>Cancel</Button>
					</Box>
				</Box>
			</Modal>
		</ThemeProvider>
	);
}

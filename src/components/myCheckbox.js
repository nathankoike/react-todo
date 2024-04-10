import * as React from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

const checkboxColors = {
	normal: "primary.main",
	medium: "warning.main",
	high: "error.main",
};

export default function MyCheckbox(props) {
	let { label, addToCounter, prio } = { ...props };

	const [checked, setChecked] = React.useState(false);

	const checkboxColor = checkboxColors[prio];

	const ariaLabel = { inputProps: { "aria-label": label } };

	const handleClick = () => {
		setChecked(!checked);
		addToCounter(checked ? -1 : 1);
	};

	return (
		<FormControlLabel
			control={
				<Checkbox
					{...ariaLabel}
					onChange={handleClick}
					sx={{
						color: checkboxColor,
						"&.Mui-checked": {
							color: "secondary.main",
						},
					}}
				/>
			}
			label={
				<Typography sx={{ color: checked ? "text.secondary" : "text.primary" }}>
					{label}
				</Typography>
			}
		/>
	);
}

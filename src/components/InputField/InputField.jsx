import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const InputField = ({ name, label, control, errors, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          color="secondary"
          label={label}
          fullWidth
          variant="standard"
          focused
          error={!!errors?.[name] || null}
          helperText={
            errors?.[name]?.["message"] ? errors?.[name]?.["message"] : "\u00A0"
          }
          {...rest}
          {...field}
          sx={{
            "& label": {
              fontSize: "1.4rem",
              fontWeight: 700,
              "&::after": {
                content: '":"',
              },
            },
            "& p.Mui-error": {
              fontSize: "1.0rem",
            },
          }}
        />
      )}
    />
  );
};

export default InputField;

import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

const InputField = (props) => {
  const { name, label, control, errors, ...rest } = props;

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
              fontSize: "1.2rem",
              fontWeight: 700,
              "&::after": {
                content: '":"',
              },
            },
            "& p.Mui-error": {
              fontSize: "0.85rem",
              // color: "pink !important",
            },
          }}
        />
      )}
    />
  );
};

export default InputField;

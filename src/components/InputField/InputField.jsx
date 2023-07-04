import React from 'react'
import TextField from '@mui/material/TextField'
import { Controller } from 'react-hook-form'

const InputField = (props) => {
    const { name, label, control, errors, ...rest } = props;

    return (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <TextField 
                label={label}
                fullWidth
                error={!!errors?.[name] || null}
                helperText={errors?.[name]?.['message'] ? errors?.[name]?.['message'] 
                : '\u00A0' }
                {...rest}
                {...field}
            />
        )}/>
  )
}

export default InputField
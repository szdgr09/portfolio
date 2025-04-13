import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import InputField from "../../components/InputField/InputField";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { StyledGridWrapper, StyledGrid } from "./Contact.styles";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionSubtitle from "../../components/SectionSubtitle/SectionSubtitle";
import { useSnackbar } from "notistack";

type EmailForm = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data: EmailForm) => {
    setIsSubmitting(true);
    const templateParams = {
      message: data?.message,
      user_name: data?.name,
      user_email: data?.email,
    };

    emailjs
      .send(
        "service_nd7pi6n",
        "template_fwqli7w",
        templateParams,
        "89hPPKDADuVluFqO4"
      )
      .then(
        (response) => {
          enqueueSnackbar("Your mail has been sent!", {
            variant: "success",
            persist: true,
          });
          reset({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          enqueueSnackbar("Something went wrong! Can't the email right now.", {
            variant: "error",
            persist: true,
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <StyledGridWrapper item xs={12} id="contact">
      <StyledGrid
        container
        justifyContent="center"
        alignContent="center"
        margin={"auto"}
        spacing={2}
      >
        <Grid item xs={12}>
          <SectionSubtitle label="Want to connect?" />
          <SectionTitle label=" Contact Me" />
        </Grid>
        <Grid xs={12} item marginX={2}>
          <Box
            component="form"
            sx={{ display: "contents" }}
            onSubmit={handleSubmit(onSubmit)}
            margin={1}
          >
            <Grid
              container
              display="flex"
              spacing={2}
              padding={2}
              border={2}
              borderRadius={1}
              sx={{
                "& .MuiGrid-item": {
                  paddingLeft: 0,
                },
              }}
            >
              <Grid item xs={12}>
                <InputField
                  label="Name"
                  name="name"
                  fullWidth
                  errors={errors}
                  control={control}
                  placeholder="Enter your Name here"
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  label="Email"
                  name="email"
                  fullWidth
                  errors={errors}
                  control={control}
                  placeholder="Enter your email here"
                />
              </Grid>

              <Grid item xs={12}>
                <InputField
                  label="Message"
                  name="message"
                  rows={5}
                  multiline
                  fullWidth
                  errors={errors}
                  control={control}
                  placeholder="Enter your message here"
                />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                  <Button
                    color="secondary"
                    variant="outlined"
                    type="submit"
                    disabled={isSubmitting}
                    sx={{
                      border: (theme) =>
                        `2px solid ${theme.palette.secondary.main}`,

                      "&:hover": {
                        border: (theme) =>
                          `2px solid ${theme.palette.secondary.main}`,
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color={isSubmitting ? "primary" : "secondary.main"}
                    >
                      {isSubmitting ? "Sending an email" : "Send me an Email"}
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </StyledGrid>
    </StyledGridWrapper>
  );
};

export default Contact;

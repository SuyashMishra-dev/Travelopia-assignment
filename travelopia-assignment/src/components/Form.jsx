import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  Divider,
  Grid,
  Select,
  MenuItem,
  Button,
  FormHelperText,
  Snackbar,
  Alert,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import validate from "./validate";
import { apiUrlConfig } from "../api/config";
import { postData } from "../api/post";
import { counttryList } from "../view/LandingPage/config";

const useOutlinedInputStyles = makeStyles((theme) => ({
  root: {
    "&:hover $notchedOutline": {
      borderColor: "red",
    },
    "&$focused $notchedOutline": {
      borderColor: "red",
    },
  },
  focused: {},
  notchedOutline: {},
}));

export default function FormDetails() {
  const outlinedInputClasses = useOutlinedInputStyles();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    destination: "",
    noOfTravelers: "",
    budgetPerPerson: "",
    currency: "$",
  });
  const [open, setOpen] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const [alertState, setAlertState] = useState("success");

  const handleClose = () => {
    setOpen(false);
  };

  const [errors, setErrors] = useState({});

  const handleChange = (evn, isNum) => {
    setUserDetails({
      ...userDetails,
      [evn.target.name]: isNum ? Number(evn.target.value) : evn.target.value,
    });
  };

  const handleSubmit = async () => {
    if (Object.keys(validate(userDetails)).length) {
      setErrors(validate(userDetails));
    } else {
      try {
        await postData(apiUrlConfig.saveUserDetails, userDetails);
        setApiMessage("Successfully created");
        setAlertState("success");
        setOpen(true);
        setUserDetails({
          name: "",
          email: "",
          destination: "",
          noOfTravelers: "",
          budgetPerPerson: "",
          currency: "$",
        });
      } catch (error) {
        setApiMessage(error?.response?.data?.error || "something went wrong");
        setAlertState("error");
        setOpen(true);
      }
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        width: "40%",
        margin: "auto",
        padding: "3rem 2rem",
        border: "3px solid #F6F643",
        borderRadius: "8px",
      }}
      noValidate
      autoComplete="off"
    >
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertState}
          sx={{ width: "100%" }}
        >
          {apiMessage}
        </Alert>
      </Snackbar>
      <Typography variant="h6" className="step-label">
        Provide Below Details
      </Typography>
      <Divider />
      <Grid container spacing={1} style={{ marginTop: "2rem" }}>
        <Grid xs={6} sx={{ marginBottom: "1rem" }}>
          <FormControl
            variant="outlined"
            className="formControl"
            required
            sx={{
              background: "#333",
              borderRadius: "8px",
            }}
          >
            <InputLabel htmlFor="programTitle" style={{ color: "#fff" }}>
              Name
            </InputLabel>
            <OutlinedInput
              value={userDetails.name || ""}
              onChange={handleChange}
              name="name"
              label="Name"
              fullWidth
              required
              classes={outlinedInputClasses}
              sx={{
                color: "#fff",
              }}
            />
          </FormControl>
          <Grid container justify="flex-end">
            <Grid item>
              <FormHelperText style={{ color: "red", paddingLeft: "1.5rem" }}>
                {errors.name}
              </FormHelperText>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={6} sx={{ marginBottom: "1rem" }}>
          <FormControl
            variant="outlined"
            className="formControl"
            required
            sx={{
              background: "#333",
              borderRadius: "8px",
            }}
          >
            <InputLabel htmlFor="programTitle" style={{ color: "#fff" }}>
              Email
            </InputLabel>
            <OutlinedInput
              value={userDetails.email || ""}
              onChange={handleChange}
              name="email"
              label="Email"
              fullWidth
              required
              classes={outlinedInputClasses}
              sx={{
                color: "#fff",
              }}
            />
          </FormControl>
          <Grid container justify="flex-end">
            <Grid item>
              <FormHelperText style={{ color: "red", paddingLeft: "1.5rem" }}>
                {errors.email}
              </FormHelperText>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={6} sx={{ marginBottom: "1rem" }}>
          <FormControl
            variant="outlined"
            className="formControl"
            required
            sx={{
              background: "#333",
              borderRadius: "8px",
              width: "88%",
            }}
          >
            <InputLabel id="demo-simple-select-label" style={{ color: "#fff" }}>
              Select Destination
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userDetails.destination || ""}
              label="Select Destination"
              name="destination"
              onChange={(event) => {
                handleChange(event);
              }}
              sx={{
                color: "#fff",
                textAlign: "left",
              }}
            >
              <MenuItem value={"programType.REGULAR"}>Select Country</MenuItem>
              {counttryList.map((country) => (
                <MenuItem key={country.value} value={country.value}>
                  {country.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Grid container justify="flex-end">
            <Grid item>
              <FormHelperText style={{ color: "red", paddingLeft: "1.5rem" }}>
                {errors.destination}
              </FormHelperText>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={6} sx={{ marginBottom: "1rem" }}>
          <FormControl
            variant="outlined"
            className="formControl"
            required
            sx={{
              background: "#333",
              borderRadius: "8px",
            }}
          >
            <InputLabel htmlFor="programTitle" style={{ color: "#fff" }}>
              No. of travellers
            </InputLabel>
            <OutlinedInput
              value={userDetails.noOfTravelers || ""}
              onChange={(evn) => handleChange(evn, true)}
              name="noOfTravelers"
              label="No. of travellers"
              fullWidth
              required
              classes={outlinedInputClasses}
              sx={{
                color: "#fff",
              }}
              type="number"
              pattern="[0-9]+"
            />
          </FormControl>
          <Grid container justify="flex-end">
            <Grid item>
              <FormHelperText style={{ color: "red", paddingLeft: "1.5rem" }}>
                {errors.noOfTravelers}
              </FormHelperText>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={6} sx={{ marginBottom: "1rem" }}>
          <FormControl
            variant="outlined"
            className="formControl"
            required
            sx={{
              background: "#333",
              borderRadius: "8px",
            }}
          >
            <InputLabel htmlFor="programTitle" style={{ color: "#fff" }}>
              Budget Per Person
            </InputLabel>
            <OutlinedInput
              value={userDetails.budgetPerPerson || ""}
              onChange={(evn) => handleChange(evn, true)}
              name="budgetPerPerson"
              label="Budget Per Person"
              fullWidth
              required
              sx={{
                color: "#fff",
              }}
              type="number"
              pattern="[0-9]+"
            />
          </FormControl>
          <Grid container justify="flex-end">
            <Grid item>
              <FormHelperText style={{ color: "red", paddingLeft: "1.5rem" }}>
                {errors.budgetPerPerson}
              </FormHelperText>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={6} sx={{ marginBottom: "1rem" }}>
          <FormControl
            variant="outlined"
            className="formControl"
            required
            sx={{
              background: "#333",
              borderRadius: "8px",
            }}
          >
            <InputLabel htmlFor="programTitle" style={{ color: "#fff" }}>
              Currency
            </InputLabel>
            <OutlinedInput
              value={"$"}
              name="title"
              disabled
              defaultValue={"$"}
              label="Program Title"
              fullWidth
              required
              //   classes={outlinedInputClasses}
              sx={{
                color: "#fff",
                "& input": {
                  WebkitTextFillColor: "#fff",
                },
              }}
            />
          </FormControl>
        </Grid>
        <Grid xs={12} sx={{ marginBottom: "1rem" }}>
          <FormControl
            variant="outlined"
            className="formControl"
            required
            sx={{
              background: "#333",
              borderRadius: "8px",
              width: "92%",
              marginTop: "2rem",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                width: "100%",
                color: "#fff",
                border: "1px solid #fff",
                "&:hover": {
                  color: "#F6F643",
                  borderColor: "#F6F643",
                },
              }}
              onClick={handleSubmit}
            >
              Submit Details
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}

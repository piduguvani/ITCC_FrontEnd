import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {Grid, TextField, Button, Card, Typography, FormControl,FormHelperText, InputLabel, MenuItem, Select, Box} from '@mui/material';
import { DevTool } from '@hookform/devtools';
import axios from 'axios';

function Registration() {
  const form = useForm({
    mode: "onTouched"
  });
  const { register, handleSubmit, control, formState } = form;
  const { errors } = formState;

  //allow numbers only and take 10 digit numbers
  const applyOnlyNumbers = (event) => {
    const input = event.target.value;
    const charCode = event.which ? event.which : event.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) || input.length >= 10) {
      event.preventDefault();
    }
  };
  const onSubmit = async (data) => {
    const phoneNumber = data.phoneNumber;
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert('Please provide a valid phone number');
      return;
    }
    try {
      const response = await axios.post('http://172.17.15.253:3002/api/registration', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        points: data.points,
        community: data.community,
        Password: data.password
      });
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  return (
    <Grid container alignItems='center' style={{ minHeight: '100vh', padding: '20px', backgroundSize: 'cover' ,justifyContent:"center"}}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Card variant="outlined" sx={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: 3 }}>
          <Typography variant="h5" component="div" align="center" gutterBottom>
            <b>REGISTER</b>
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  type="text"
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  margin="normal"
                  {...register("firstName", {
                    required: "First Name is Required",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "First Name must contain only alphabets"
                    },
                    maxLength: {
                      value: 40,
                      message: "First Name cannot exceed 40 characters"
                    }
                  })}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  type="text"
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                  margin="normal"
                  {...register("lastName", {
                    required: "Last Name is Required",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Last Name must contain only alphabets"
                    },
                    maxLength: {
                      value: 40,
                      message: "Last Name cannot exceed 40 characters"
                    }
                  })}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="community"
                  control={control}
                  rules={{ required: "Community is Required" }}
                  render={({ field }) => (
                    <FormControl fullWidth error={!!errors.community}>
                      <InputLabel id="community-label">Community</InputLabel>
                      <Select
                        labelId="community-label"
                        id="community"
                        label="Community"
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                      >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="ReactJs">ReactJs</MenuItem>
                        <MenuItem value="Angular">Angular</MenuItem>
                        <MenuItem value="NodeJs">NodeJs</MenuItem>
                      </Select>
                      <FormHelperText>{errors.community?.message}</FormHelperText>
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6} style={{ marginTop: 'inherit' }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Phone Number"
                  type="tel"
                  id="phoneNumber"
                  margin="normal"
                  {...register("phoneNumber", {
                    required: "Phone Number is Required",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Phone Number must contain only numbers"
                    },
                    maxLength: {
                      value: 10,
                      message: "Phone Number cannot exceed 10 digits"
                    }
                  })}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                  onKeyPress={applyOnlyNumbers}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth variant="outlined" label="Email Id" type="email" id="email" margin="normal"
                  {...register("email", {
                    required: "Email Id is Required",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Invalid email format"
                    }
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '16px', width: '50%' }}>
                    Sign Up
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
          <DevTool control={control} />
        </Card>
      </Grid>
    </Grid>
  );
}
export default Registration;

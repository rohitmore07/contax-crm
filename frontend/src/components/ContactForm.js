import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const ContactForm = ({ addContact }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    addContact(data);
    reset();
  };

  return (
    <Card sx={{ maxWidth: 600, margin: '20px auto', padding: 2 }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Add New Contact
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextField
            label="First Name"
            {...register('firstName', { required: 'First Name is required' })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
          <TextField
            label="Last Name"
            {...register('lastName', { required: 'Last Name is required' })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
          <TextField
            label="Email"
            {...register('email', { required: 'Email is required' })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Phone Number"
            {...register('phoneNumber', { required: 'Phone Number is required' })}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />
          <TextField label="Company" {...register('company')} />
          <TextField label="Job Title" {...register('jobTitle')} />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;

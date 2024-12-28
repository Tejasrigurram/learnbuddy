import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function SettingsPage() {
  const [studyTime, setStudyTime] = useState('');

  const handleChange = (e) => {
    setStudyTime(e.target.value);
  };

  const handleSave = () => {
    // Save user preferences here
    alert('Settings saved!');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <TextField
        label="Preferred Study Time"
        variant="outlined"
        value={studyTime}
        onChange={handleChange}
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
      >
        Save Settings
      </Button>
    </Container>
  );
}

export default SettingsPage;

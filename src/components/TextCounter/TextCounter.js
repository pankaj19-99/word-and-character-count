import React, { useState } from 'react';
import { Container, TextField, Typography, Box } from '@mui/material';

const TextCounter = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim().split(/\s+/).filter((word) => word.length > 0).length;
  const charCount = text.length;
  const charWithSpaceCount = text.replace(/\s+/g, '').length;
  const specialCharCount = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;

  return (
    <Container maxWidth="md">
      <Box mt={4} mb={2}>
        <Typography variant="h4" component="h1" gutterBottom>
          Text Counter
        </Typography>
        <TextField
          label="Type or paste your text here..."
          multiline
          rows={10}
          variant="outlined"
          fullWidth
          value={text}
          onChange={handleChange}
          margin="normal"
        />
      </Box>
      <Box mt={2}>
        <Typography variant="body1"><strong>Word Count:</strong> {wordCount}</Typography>
        <Typography variant="body1"><strong>Character Count:</strong> {charCount}</Typography>
        <Typography variant="body1"><strong>Character Count (without spaces):</strong> {charWithSpaceCount}</Typography>
        <Typography variant="body1"><strong>Special Character Count:</strong> {specialCharCount}</Typography>
      </Box>
    </Container>
  );
};

export default TextCounter;

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../store/habitSLice";

const AddHabitForm = () => {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = new Date().toLocaleTimeString();
    if (name.trim()) {
      dispatch(addHabit({ id, name, frequency }));
    }
    setName("");
    setFrequency("");
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter habit name"
          fullWidth
        ></TextField>

        <FormControl fullWidth>
          <InputLabel> Frequency </InputLabel>
          <Select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Add Submit
        </Button>
      </Box>
    </form>
  );
};

export default AddHabitForm;

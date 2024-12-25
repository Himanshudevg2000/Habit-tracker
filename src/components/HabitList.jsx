import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeHabit } from "../store/habitSLice";

const HabitList = () => {
  const habitsList = useSelector((state) => state.habits.habits);

  const dispatch = useDispatch();

  const removeHabitHandler= async(id)=> {
    dispatch(removeHabit({id}));
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habitsList.map((res, index) => {
        return (
          <Paper key={res.id} elevation={2} sx={{ p: 2 }}>
            <Grid>
              <Typography variant="h6">{res.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {res.frequency}
              </Typography>
            </Grid>
            <Grid xs={12} sm={6}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <Button variant="outlined" color="error" onClick={()=> removeHabitHandler(res.id)}>
                  Remove
                </Button>
              </Box>
            </Grid>
          </Paper>
        );
      })}
    </Box>
  );
};

export default HabitList;

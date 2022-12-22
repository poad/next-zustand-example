import React from 'react';
import Box from '@mui/material/Box';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import { useCounterStore } from '../../store';

export const Counter = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <Box>
      <Box>
        <IconButton color="success" onClick={() => increment(1)}>
          <Add />
        </IconButton>
        {count}
        <IconButton color="error" onClick={() => decrement(1)}>
          <Remove />
        </IconButton>
      </Box>
    </Box>
  );
};

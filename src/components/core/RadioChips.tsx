import { Chip, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

interface MultiSelectChipsProps {
  items: string[];
  onChange: (value: string) => void;
}

export function RadioChips({ items, onChange }: MultiSelectChipsProps) {
  const [value, setValue] = useState<string>(items[0]);

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <Grid container spacing={1}>
      {items.map((item) => (
        <Grid item key={item}>
          <Chip
            label={item}
            color={item === value ? 'primary' : 'default'}
            clickable
            onClick={() => setValue(item)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

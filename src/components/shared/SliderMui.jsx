import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const marks = [
  {
    value: 0,
    label: '0 %',
  },
  {
    value: 100,
    label: '100 %',
  },
];

// function ValueLabelComponent(props) {
//   const { children, value } = props;

//   return (
//     <Tooltip enterTouchDelay={0} placement="top" title={value}>
//       {children}
//     </Tooltip>
//   );
// }

// ValueLabelComponent.propTypes = {
//   children: PropTypes.element.isRequired,
//   value: PropTypes.number.isRequired
// };

const PrettoSlider = styled(Slider)({
  color: "#F05D23",
  height: 10,
  "& .MuiSlider-track": {
    border: "none"
  },
  "& .MuiSlider-thumb": {
    height: 22,
    width: 22,
    backgroundColor: "#F05D23",
    border: "2px solid #fff",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit"
    },
    "&:before": {
      display: "none"
    }
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 30,
    height: 30,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#F05D23",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)"
    },
    "& > *": {
      transform: "rotate(45deg)"
    }
  }
});

 function SliderMui({title, onChange }) {
  return (
    <Box sx={{ width: 320 }}>
      <Box sx={{ m: 2 }} />
      <Typography gutterBottom className="title">{title}</Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={0}
        marks={marks}
        onChange={(e) => {
          onChange(e)
        }}
      />
    </Box>
  );
}

export default SliderMui

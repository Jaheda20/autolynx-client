import { Rating, Stack } from "@mui/material";

const RatingComponent = ({value, readOnly}) => {
    return (
        <Stack spacing={1}>
            <Rating name="car-rating" value={value} precision={0.2} readOnly={readOnly} size="large"/>
            
        </Stack>
    );
};

export default RatingComponent;
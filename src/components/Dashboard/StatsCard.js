import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, Box } from "@mui/material";

const StatsCard = ({ title, value, icon }) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Box mr={2}>{icon}</Box>
          <Box>
            <Typography variant="h6" component="h3">
              {title}
            </Typography>
            <Typography variant="body1">{value}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element.isRequired,
};

export default StatsCard;

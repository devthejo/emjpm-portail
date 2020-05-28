import { Card } from "@socialgouv/emjpm-ui-core";
import React from "react";
import { Box } from "rebass";

const SubPageSection = ({ children, title }) => (
  <Card bg="white" mb={6} borderRadius={3}>
    <Box fontWeight="bold" mt="5px" textAlign="center" fontSize="18px" fontFamily="Comfortaa">
      {title}
    </Box>
    <Box color="textSecondary">{children}</Box>
  </Card>
);

export default SubPageSection;

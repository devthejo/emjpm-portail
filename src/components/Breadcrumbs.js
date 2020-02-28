import getConfig from "next/config";
import NextLink from "next/link";
import React from "react";
import { Box, Flex, Link } from "rebass";

const { publicRuntimeConfig } = getConfig();

const Breadcrumbs = ({ parentTitle, title }) => (
  <Flex alignItems="center" mb={4} fontSize={1} color="textSecondary">
    <NextLink href="/" as={publicRuntimeConfig.appUrl} passHref>
      <Link
        sx={{
          color: "textSecondary",
          cursor: "pointer",
          textDecoration: "none",
          "&:hover": {
            color: "primary"
          }
        }}
      >
        Accueil
      </Link>
    </NextLink>
    <Box mx={1}>&gt;</Box>
    <Box>{parentTitle}</Box>
    <Box mx={1}>&gt;</Box>
    <Box>{title}</Box>
  </Flex>
);

export default Breadcrumbs;

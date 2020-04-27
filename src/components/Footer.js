import { Logo } from "@socialgouv/emjpm-ui-core";
import React from "react";
import { Box, Flex, Link, Text } from "rebass";

const listStyle = {
  fontSize: "1",
  mb: "1",
};

const listTitleStyle = {
  color: "#555555",
  fontFamily: "Quicksand, sans-serif",
  fontSize: "2",
  fontWeight: "700",
  mb: "3",
};

const footerItemStyle = {
  flexBasis: ["100%", "27%"],
};

const List = (props) => {
  return <Box {...props} sx={listStyle} />;
};

const ListItem = (props) => {
  return <Text {...props} sx={listStyle} />;
};

const ListTitle = (props) => {
  return <Text {...props} sx={listTitleStyle} />;
};

const Footer = () => (
  <Box maxWidth={1200} mx="auto" my={4} px={4}>
    <Flex flexWrap="wrap" justifyContent="space-between">
      <Box mb={[3, 0]} flexBasis={["100%", "13%"]}>
        <Logo hasTitle={false} />
      </Box>
      <List sx={footerItemStyle}>
        <ListTitle>A propos de nous</ListTitle>
        <ListItem>
          <Link target="_blank" href="https://emjpm-blog.azurewebsites.net/category/news">
            Notre actualité
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            href="https://emjpm.num.social.gouv.fr/mentions-legales-modalites-utilisation"
          >
            Mentions légales
          </Link>
        </ListItem>
        <ListItem>
          <Link target="_blank" href="https://emjpm.num.social.gouv.fr/stats">
            Statistique de connexion
          </Link>
        </ListItem>
      </List>
      <List sx={footerItemStyle}>
        <ListTitle>Aide et ressources</ListTitle>
        <ListItem>
          <Link target="_blank" href="https://emjpm-blog.azurewebsites.net/medias/ ">
            Guide d’utilisation
          </Link>
        </ListItem>
        <ListItem>
          <Link target="_blank" href="https://github.com/SocialGouv/emjpm">
            Code source
          </Link>
        </ListItem>
      </List>
      <List sx={footerItemStyle}>
        <ListTitle>Contactez-nous</ListTitle>
        <ListItem>
          <Link target="_blank" href="mailto:support.emjpm@fabrique.social.gouv.fr">
            Par email
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            href="https://docs.google.com/forms/d/1W8f9ySchjaJfAoYMVsYxjsk1PUAGoCX51Aykb_CUNXA/prefill"
          >
            Proposez une fonctionnalité
          </Link>
        </ListItem>
      </List>
    </Flex>
  </Box>
);

export default Footer;
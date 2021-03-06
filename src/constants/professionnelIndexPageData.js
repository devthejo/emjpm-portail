import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const professionnelIndexPageData = {
  heading: `Bienvenue sur le portail de la Protection Juridique des Majeurs`,
  sections: [
    {
      image: `${publicRuntimeConfig.appUrl}/bg-pro-a.png`,
      splitTitle: { firstLine: `Je suis`, secondLine: `un mandataire individuel` },
      title: `Je suis un mandataire individuel`,
      url: `/professionnel/je-suis-un-mandataire-individuel`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-pro-c.png`,
      splitTitle: { firstLine: `Je suis`, secondLine: `un service mandataire` },
      title: `Je suis un service mandataire`,
      url: `/professionnel/je-suis-un-service-mandataire`,
    },
    {
      image: `${publicRuntimeConfig.appUrl}/bg-pro-b.png`,
      splitTitle: { firstLine: `Je suis`, secondLine: `un préposé d'établissement` },
      title: `Je suis un préposé d'établissement`,
      url: `/professionnel/je-suis-un-prepose-d-etablissement`,
    },
  ],
};

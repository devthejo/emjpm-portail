import React from "react";
import { Flex } from "rebass";

import Breadcrumbs from "../../../components/Breadcrumbs";
import IndexPageWrapper from "../../../components/IndexPageWrapper";
import PageSection from "../../../components/PageSection";
import PageSectionsWrapper from "../../../components/PageSectionsWrapper";
import { serviceMandataireIndexPageData as data } from "../../../constants/serviceMandatairePageData";

const Index = () => (
  <>
    <Breadcrumbs />
    <Flex flexWrap="wrap" maxWidth={1400} minHeight="62vh" mx="auto" justifyContent="center">
      <IndexPageWrapper heading={data.heading}>
        <PageSectionsWrapper>
          {data.sections &&
            data.sections.map((item, index) => (
              <PageSection
                key={index}
                url={item.url}
                title={item.title}
                image={item.image}
                rowAlign
              />
            ))}
        </PageSectionsWrapper>
      </IndexPageWrapper>
    </Flex>
  </>
);

export default Index;

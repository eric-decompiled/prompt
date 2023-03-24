import * as React from "react";
import { Box } from "@chakra-ui/react";
import Layout from "../components/layout";
import BlogList from "../components/bloglist";

const IndexPage = () => {
  return (
    <Layout>
      <Box>
        <h1>Welcome to My AI Experiments Blog</h1>
        <BlogList />
      </Box>
    </Layout>
  );
};

export default IndexPage;


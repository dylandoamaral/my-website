import React from "react";


import Header from "../header/header";
import Footer from "../footer/footer";

import { Layout } from "./layout.style";

export default props => (
    <Layout>
        <Header page={props.page} />
        {props.children}
        <Footer />
    </Layout>
);

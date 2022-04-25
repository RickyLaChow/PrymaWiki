import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Prymacommunity`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img src="img/logo.png" style={{ width: "25%" }} />
          <h1 style={{ fontSize: 42, color: "white" }}>PrymaWiki</h1>
          <p style={{ marginTop: -15, fontSize: 24, color: "white" }}>
            Wiki ufficiale del server Minecraft PrymaCommunity.
            <br />
            <b>mc.Prymacommunity.it</b>
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/Introduzione"
            >
              Inizia ora
            </Link>
          </div>
        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Feature mai viste!",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Il nostro server offre un gameplay diverso dagli altri, con modelli 3D
        non presenti nel gioco, dungeons e molto altro!
      </>
    ),
  },
  {
    title: "Novità",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Lavoriamo per voi, per portare sempre costantemente nuovi aggiornamenti!
        Ogni 2 settimane esce un <code>update</code>.
      </>
    ),
  },
  {
    title: "Texture Pack",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Abbiamo inserito una texture pack all'interno del Server, per migliorare
        e personalizzare l'esperienza di gioco
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

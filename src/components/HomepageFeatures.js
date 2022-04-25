import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Feature mai viste!",
    Svg: require("../../static/img/streamline-icon-blockchain@200x200.svg")
      .default,
    description: (
      <>
        Il nostro server offre un gameplay diverso dagli altri, con modelli 3D
        non presenti nel gioco, dungeons e molto altro!
      </>
    ),
  },
  {
    title: "Novità",
    Svg: require("../../static/img/streamline-icon-image@200x200.svg").default,
    description: (
      <>
        Lavoriamo per voi, per portare sempre costantemente nuovi aggiornamenti!
        Ogni 2 settimane esce un <code>update</code>.
      </>
    ),
  },
  {
    title: "Texture Pack",
    Svg: require("../../static/img/streamline-icon-marketing-2@200x200.svg")
      .default,
    description: (
      <>
        Abbiamo inserito una texture pack all'interno del Server, per migliorare
        e personalizzare l'esperienza di gioco
      </>
    ),
  },
  {
    title: "Premium Access",
    Svg: require("../../static/img/streamline-icon-shield-4@200x200.svg")
      .default,
    description: (
      <>
        Se hai comprato Minecraft, non avrai bisogno di inserire una password
        proteggiamo con maggiore sicurezza i vostri account ufficiali!
      </>
    ),
  },
  {
    title: "Community",
    Svg: require("../../static/img/streamline-icon-home-5@200x200.svg").default,
    description: (
      <>
        Lavoriamo per voi, per portare sempre costantemente nuovi aggiornamenti!
        Ascoltiamo le vostre richieste!
      </>
    ),
  },
  {
    title: "Supporto",
    Svg: require("../../static/img/streamline-icon-customer-care@200x200.svg")
      .default,
    description: (
      <>
        Il nostro server, offre un ottimo servizio di supporto clienti, entra
        nel discord per ricevere supporto! <a>discord.io/pryma</a>
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
    <section >
    </section>
  );
}

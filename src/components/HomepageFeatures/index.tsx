import React from "react";
import { CardLayout } from "../Card";
import Icon from "@site/src/components/Icons"; // adjust path if needed
import styles from "./styles.module.css";

const features = [
    {
    href: "/docs/discover/what-is-quilibrium",
    icon: "informationcircle",
    title: "Discover",
    description: "Quilibrium explained for everyone",
  },
    {
    href: "/docs/learn/communication",
    icon: "filebookmark",
    title: "Learn",
    description: "How the Quilibrium network works",
  },
  {
    href: "/docs/category/applications",
    icon: "screwdriverwrench",
    title: "Build",
    description: "How to develop applications on the Quilibrium network",
  },
  {
    href: "/docs/run-node/quick-start",
    icon: "sharingdata",
    title: "Run",
    description: "How to run a node on the Quilibrium network",
  },
  {
    href: "/docs/protocol/overview",
    icon: "screwdriverwrench",
    title: "Protocol",
    description: "Deeper protocol-specific details",
  }
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((feature, idx) => (
            <div className="col col--6 margin-bottom--lg" key={idx}>
              <CardLayout
                href={feature.href}
                icon={
                  <Icon
                    name={feature.icon}
                    className="w-6 mr-2 h-auto text-pink"
                  />
                }
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

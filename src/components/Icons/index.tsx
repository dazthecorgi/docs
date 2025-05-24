import Criticalthinking2 from "./Set/Criticalthinking2";
import Filebookmark from "./Set/Filebookmark";
import Informationcircle from "./Set/Informationcircle";
import Screwdriverwrench from "./Set/Screwdriverwrench";
import Sharingdata from "./Set/Sharingdata";

const icon = {
  criticalthinking2: Criticalthinking2,
  filebookmark: Filebookmark,
  informationcircle: Informationcircle,
  screwdriverwrench: Screwdriverwrench,
  sharingdata: Sharingdata,
};

export default function Icon({
  name,
  className = "",
  ...props
}: {
  name?: string;
  className?: string;
} & React.SVGProps<SVGSVGElement>) {
  if (!name) return null;

  const IconComponent = icon[name.toLowerCase() as keyof typeof icon];

  if (!IconComponent) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`Icon "${name}" not found in icon registry.`);
    }
    return null;
  }

  return <IconComponent className={className} {...props} />;
}

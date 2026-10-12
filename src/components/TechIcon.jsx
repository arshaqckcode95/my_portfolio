import {
  SiReact,
  SiExpo,
  SiTypescript,
  SiJavascript,
  SiApple,
  SiAndroid,
  SiRedux,
  SiFirebase,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiNodedotjs,
  SiPostgresql,
  SiSqlite,
  SiGit,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

const ICONS = {
  react: SiReact,
  expo: SiExpo,
  typescript: SiTypescript,
  javascript: SiJavascript,
  apple: SiApple,
  android: SiAndroid,
  redux: SiRedux,
  firebase: SiFirebase,
  html: SiHtml5,
  css: SiCss,
  bootstrap: SiBootstrap,
  node: SiNodedotjs,
  postgres: SiPostgresql,
  sqlite: SiSqlite,
  aws: FaAws,
  git: SiGit,
};

export default function TechIcon({ icon, color, className = "" }) {
  const Icon = ICONS[icon];
  if (!Icon) return null;
  return <Icon className={className} style={color ? { color } : undefined} />;
}

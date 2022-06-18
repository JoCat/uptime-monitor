import { html, ky, useEffect, useState } from "../../utils.js";
import { Header } from "../components/Header.js";

export function BaseLayout() {
  const [themeData, setThemeData] = useState({});

  useEffect(() => {
    ky.get("/api/theme").json().then(setThemeData);
  }, [])

  return html`<${Header} ...${themeData}/>`;
}

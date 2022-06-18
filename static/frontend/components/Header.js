import { html } from "../../utils.js";

export function Header({ logoUrl = "/logo.png", backgroundColor = '#222', title = "Uptime Monitor", logoAlt = "Uptime Monitor" }) {
  return html`<header style="background-color: ${backgroundColor}">
    <img class="logo" src="${logoUrl}" alt="${logoAlt}" />
    <span class="title">${title}</span>
  </header>`;
}

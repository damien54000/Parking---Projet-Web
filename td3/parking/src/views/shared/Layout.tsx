import { html } from "hono/html";
type Props={
children: any,
titre: any,
titre1 : any

}
export const Layout = ( { children,titre,titre1 }:Props) => html`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,
initial-scale=1.0">
<title>${titre}</title>
</head>
<body>
<h1>${titre1}</h1>
${children}
</body>
</html>`;

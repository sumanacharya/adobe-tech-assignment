# EDS Hero and News Cards (Google Docs Authoring)

"Simple EDS Block using Document Based Authoring (using Google Docs) for Edge Delivery Services"

## What’s included
- Hero block (`blocks/hero`)
- School News cards block (`blocks/cards`)

## Authoring with Google Docs (Document-Based Authoring)
This project is built for Edge Delivery Services  and is authored in Google Docs using block tables.

General pattern for blocks:
- Create a table for the block content.
- Set the first row of the table to the block name (e.g., `hero`, `cards`).
- Add content rows as described below for each block type.

### Hero block authoring
Structure a table with two content rows:
1. Content row
   - Title: place the hero title text.
   - Body: place supporting text; the first link in the body will be promoted to the primary CTA button.
2. Image row
   - Insert the hero image.

### Cards block (News)
Create a table with one row per card:
- Column with image.
- Column with content: include title, description, and a link.


## Environments
- Preview: https://main--adobe-tech-assignment--sumanacharya.aem.page/
- Live: https://main--adobe-tech-assignment--sumanacharya.aem.live/

## Documentation

Before using the aem-boilerplate, we recommand you to go through the documentation on https://www.aem.live/docs/ and more specifically:
1. [Developer Tutorial](https://www.aem.live/developer/tutorial)
2. [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
3. [Web Performance](https://www.aem.live/developer/keeping-it-100)
4. [Markup, Sections, Blocks, and Auto Blocking](https://www.aem.live/developer/markup-sections-blocks)

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template
2. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
3. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
4. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
5. Open the `{repo}` directory in your favorite IDE and start coding :)

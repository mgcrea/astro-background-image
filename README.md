# @mgcrea/astro-background-image

Basic component to render a background image with Astro.

- Leverages the `getImage()` helper from `astro:assets` to generate responsive image URLs.
- Supports `srcset` and `widths` attributes.

```sh
npm install --dev @mgcrea/astro-background-image
# or
pnpm add --save-dev @mgcrea/astro-background-image
```

## Usage

```astro
---
import BackgroundImage from '@mgcrea/astro-background-image';

import heroSrc from "src/assets/hero.jpg";
---

<section id="hero" class="relative">
 <BackgroundImage src={heroSrc} class="bg-cover">
 <div>Hero</div>
</section>
```

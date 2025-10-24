run `bun install` to install dependencies, then you can see these errors:

1. open this repo in VSCode, and open any astro file, press `ctrl + S`, biome plugin will crash
2. run `bunx biome lint` will throw error in `src/components/pay-layout.astro`, it seems like use a comment and variable in [Dynamic HTML](https://docs.astro.build/en/reference/astro-syntax/#dynamic-html)

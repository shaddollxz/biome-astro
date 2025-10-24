Run `bun install` to install the dependencies. After that, you can observe the following issues:

1. VSCode Extension Crashes on Save:
    - Open this repository in VSCode and open any .astro file.
    - Press `Ctrl + S` to save the file. The Biome plugin will crash.

2. Linter Error in map.astro:
    - Run `bunx biome lint` in the terminal.
    - This command will throw a parsing error in `src/pages/map.astro`. The issue seems to occur when using a comment alongside a variable inside [Dynamic HTML](https://docs.astro.build/en/reference/astro-syntax/#dynamic-html) expressions.

3. Formatter Fails for Code in Curly Braces:
    - Run `bunx biome format` in the terminal.
    - in `src/pages/format.astro`. The formatter does not work correctly for code blocks wrapped in curly braces {}.

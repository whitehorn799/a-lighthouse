# Location
- Open ```quartz/styles/custom.scss  ```
    
- Paste any custom CSS or SCSS rules you want in that file.

## Setup 
### Snippets Folder
```
quartz/
└── styles/
    ├── custom.scss
    └── snippets/       <-- Create this folder
        ├── _embeds.scss
        ├── _callouts.scss
        ├── _typography.scss
        └── _breakouts.scss
```
**Note on naming:** In SCSS, starting a filename with an underscore (like _embeds.scss) marks it as a **partial**. This tells Quartz's compiler: _"Don't compile this file on its own; I'll be importing it into custom.scss."_

### Import Snippets
```
// Import modular snippet partials @import "snippets/embeds"; @import "snippets/callouts"; @import "snippets/typography"; @import "snippets/breakouts";
```


# SCSS Fixes

```
// Custom layout & typography tweaks

// Adjust main page width
.page {
  max-width: 1200px;
}

// Custom font or link styling
a.internal {
  text-decoration: underline;
  text-decoration-color: var(--tertiary);
}

// Hide specific sidebar elements if needed
.explorer {
  // your custom sidebar styling here
}
```
# Themes
If you want to adjust the color palette (background, text, accent colors), open quartz.config.ts. Look for the **theme:** section inside **configuration:**

### 2. Manual Color Overrides (Standard Hex Palette)

If you aren't using a `quartz-themes` preset and want to define exact hex codes for light and dark modes, you do that inside **`quartz.config.yaml`** under `theme.colors`:


```
// quartz/config.ts
theme: {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
    header: "Schibsted Grotesk",
    body: "Source Sans Pro",
    code: "IBM Plex Mono",
  },
  colors: {
    lightMode: {
      light: "#faf8f8",       // Main background
      lightgray: "#e5e5e5",   // Borders
      gray: "#b8b8b8",        // Heavy borders/graph links
      darkgray: "#4e4e4e",    // Body text
      dark: "#2b2b2b",        // Headers & titles
      secondary: "#284b63",   // Links & accent
      tertiary: "#84a59d",    // Visited/Hover state
      highlight: "rgba(143, 159, 169, 0.15)",
    },
    darkMode: {
      light: "#161618",
      lightgray: "#393639",
      gray: "#646464",
      darkgray: "#d4d4d4",
      dark: "#ebebec",
      secondary: "#7b97aa",
      tertiary: "#84a59d",
      highlight: "rgba(143, 159, 169, 0.15)",
    },
  },
}
```

### Summary
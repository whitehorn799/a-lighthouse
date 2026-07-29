quartz.config.yaml

In your setup, **`quartz.config.yaml`** is the primary "control panel" created by the `saberzero1` plugin system to configure **community themes, layout choices, and plugin behaviors** without having to write raw TypeScript code.

While `quartz/config.ts` handles low-level site settings, you will edit **`quartz.config.yaml`** whenever you want to tweak how your site looks or functions at a high level.


### When to Edit quartz.config.yaml

#### 1. Changing Theme Colors & Dark/Light Mode Defaults

Instead of editing hex codes in code, you can set your color themes directly in YAML:

YAML

```
theme:
  colors:
    scheme: "catppuccin-mocha" # Or "dracula", "nord", "obsidian", etc.
    mode: "auto"              # Options: auto, dark, light
```

#### 2. Enabling or Disabling Page Features & Plugins

If you want to turn on or off features like hover previews, the graph view, table of contents, or search:

YAML

```
plugins:
  emitters:
    - ContentPage
    - TagPage
  transformers:
    - Frontmatter
    - TableOfContents
    - CrawlLinks
```

#### 3. Configuring Sidebar Components

You can adjust what shows up on the left or right sidebars (e.g., hiding/showing the File Explorer, Search bar, or Dark Mode toggle):

YAML

```
pageLayout:
  left:
    - PageTitle
    - Search
    - Darkmode
    - Explorer
  right:
    - Graph
    - TableOfContents
    - Backlinks
```

### Pro-Tip for YAML Files

YAML is very strict about **spacing and indentation** (it uses 2 spaces, no tabs). If you edit `quartz.config.yaml` and save, check your running PowerShell window—if you accidentally mess up the spacing, Quartz will show a clear error line in the terminal so you can fix it right away!


```
---
title: "My Note Title"
description: "A short summary for previews and search results."
draft: false
tags:
  - game-dev
  - worldbuilding
aliases:
  - "Alternate Title"
  - "Old Note Name"
date: 2026-07-27
lastmod: 2026-07-27
enableToc: true
cssclasses:
  - custom-layout
---
```

## Meaning

|**Property**|**Type**|**What it controls**|
|---|---|---|
|**`title`**|String|Overrides the H1 header and tab title (wrap in quotes if it contains colons or special characters).|
|**`description`**|String|Used for SEO meta tags and search preview cards.|
|**`draft`**|Boolean|Set to `true` to hide the page completely from public builds.|
|**`publish`**|Boolean|Set to `false` to suppress publication.|
|**`tags`**|List|Generates tag pages and tag-based filtering in Quartz.|
|**`aliases`**|List|Keeps internal Obsidian `[[links]]` intact if you rename the file.|
|**`date`**|Date (`YYYY-MM-DD`)|Defines the created date shown on page footers and RSS feeds.|
|**`enableToc`**|Boolean|Set to `false` on specific pages to hide the Table of Contents sidebar.|
|**`cssclasses`**|List|Applies custom CSS classes directly to the body wrapper of this specific page.|
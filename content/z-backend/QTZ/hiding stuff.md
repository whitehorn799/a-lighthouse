---
date: 2026-08-25 12:41:04
lastmod: 2026-08-25 14:52:14
---
# quartz.config.yaml
## Ignore Folders
ignorePatterns, which is case sensitive.
```
  - arc
  - tag-index
```


## Sort & Hide Explorer

Sort options with SCSS in _page.scss
```
/* Default order for unlisted items */
.explorer ul > li,
#explorer-content ul > li {
  order: 99 !important;
}

/* Match Program */
.explorer ul > li:has(a[href*="program" i]),
.explorer ul > li:has(a[href*="Program" i]) {
  order: 1 !important;
}

/* Match About */
.explorer ul > li:has(a[href*="about" i]),
.explorer ul > li:has(a[href*="About" i]) {
  order: 2 !important;
}

/* Match Material */
.explorer ul > li:has(a[href*="material" i]),
.explorer ul > li:has(a[href*="Material" i]) {
  order: 3 !important;
}
```

Hide a Folder in Explorer via _pages.scss_
```
/* Enable flex ordering on the root Explorer container */
.explorer ul,
#explorer-content ul {
  display: flex !important;
  flex-direction: column !important;
}

/* 1. HIDE POWER INDEX (Case-insensitive href matching) */
.explorer li:has(a[href*="power-index" i]),
.explorer li:has(a[href*="power_index" i]),
#explorer-content li:has(a[href*="power-index" i]) {
  display: none !important;
}
```

## Hide Frontmatter
Use the filterFn information.

```
  - source: "@quartz-community/explorer"

    enabled: true

    options:

      title: Site Explorer

      folderClickBehavior: collapse

      folderDefaultState: collapse

      useSavedState: true

	  filterFn: "node => !node.file?.frontmatter?.unlisted"

    layout:

      position: left

      priority: 50
```

## YAML
This will hide from search

```
---
title: My Private Note
draft: true
---
```

## Hide Article Title
```
<style>
  h1.article-title {
    display: none !important;
  }
</style>
```


# Breadcrumbs Folders
To make folders unclickable:
```

```
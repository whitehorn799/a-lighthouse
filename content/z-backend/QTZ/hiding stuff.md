# quartz.config.yaml
## Hide Folders
ignorePatterns, which is case sensitive.
```
  - arc
  - tag-index
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
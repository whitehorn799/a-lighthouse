# Plugins

The right sidebar concerns itself with plugins, which are located in the quartz.config.yaml file.

```
# quartz.config.yaml
plugins:
  # Example: Interactive Graph in right sidebar
  - source: github:quartz-community/graph
    enabled: true
    layout:
      position: right
      priority: 10

  # Example: Table of Contents in right sidebar
  - source: github:quartz-community/toc
    enabled: true
    layout:
      position: right
      priority: 20

  # Example: Backlinks in right sidebar
  - source: github:quartz-community/backlinks
    enabled: true
    layout:
      position: right
      priority: 30
```
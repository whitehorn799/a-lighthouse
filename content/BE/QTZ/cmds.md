# Copy Obsidian Vault
```
Copy-Item -Path "E:\2024 Brandon Artworks\Teacher Kelly\A-Lighthouse\*" -Destination "content" -Recurse -Force
```

If copying files back and forth gets repetitive as you make edits:

You can open Obsidian, click **"Open folder as vault"** at the bottom left, and choose your quartz/content/ folder directly.

# Build Server
```
npx quartz build --serve
```

# Push Site
```
npx quartz sync --no-pull
```
## Updates
For subsequent updates:
```
npx quartz sync
```

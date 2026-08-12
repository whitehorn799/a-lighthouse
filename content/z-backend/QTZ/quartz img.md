# Clickable full view

In /components/head.tsx

```
        {/* CLICKABLE FULL-SIZE IMAGES SCRIPT */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("nav", () => {
                document.querySelectorAll("article img[alt*='full']").forEach((img) => {
                  img.style.cursor = "pointer";
                  img.onclick = () => {
                    window.open(img.src, "_blank", "noopener,noreferrer");
                  };
                });
              });
            `,
          }}
        />
      </head>
```
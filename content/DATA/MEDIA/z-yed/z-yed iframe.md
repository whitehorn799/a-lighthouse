---
title: z-yed iframe
description: ""
draft: true
unlisted: true
stealth: true
robots: 
password: 
tags: 
aliases: 
permalink: 
date: 2026-09-14 15:01:54
lastmod: 2026-09-15 11:13:39
enableToc:  true
cssclasses: 
  - hide-breadcrumbs
---
# 1 
Replace the opening xml/svg tag with this

```
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" 
     xmlns:xlink="http://www.w3.org/1999/xlink" 
     id="interactive-diagram" 
     viewBox="0 0 840 290" 
     width="100%" 
     height="100%" 
     fill-opacity="1" 
     color-rendering="auto" 
     color-interpolation="auto" 
     text-rendering="auto" 
     stroke="black" 
     stroke-linecap="square" 
     stroke-miterlimit="10" 
     shape-rendering="auto" 
     stroke-opacity="1" 
     fill="black" 
     stroke-dasharray="none" 
     font-weight="normal" 
     stroke-width="1" 
     font-family="'Dialog'" 
     font-style="normal" 
     stroke-linejoin="miter" 
     font-size="12px" 
     stroke-dashoffset="0" 
     image-rendering="auto">
```

# 2 
Paste at the top just after: ```    <defs id="defs1">``` 


```
  

      <!-- ============================================================ -->

      <!-- 1. CUSTOM STYLING & FONT IMPORTS                             -->

      <!-- ============================================================ -->

      <style type="text/css">

      <![CDATA[

        @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;700&family=Playfair+Display:wght@400;700&display=swap');

  

        /* Explicit touch event rules for iPad/Tablet compatibility */

        #directional-controls, #directional-controls * {

          cursor: pointer;

          touch-action: manipulation;

          -webkit-tap-highlight-color: transparent;

        }

  

        svg {

          cursor: grab;

        }

        svg:active {

          cursor: grabbing;

        }

  

        text, tspan, div, p, span, foreignObject * {

          font-family: 'Dosis', 'Playfair Display', sans-serif !important;

        }

      ]]>

      </style>

  

      <!-- ============================================================ -->

      <!-- 2. PAN-ZOOM ENGINE & INITIALIZATION SCRIPT                   -->

      <!-- ============================================================ -->

      <script xlink:href="https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"/>

  

      <script type="text/javascript">

      <![CDATA[

        var panZoomInstance;

  

        window.addEventListener("load", function() {

          // Initialize Pan-Zoom

          panZoomInstance = svgPanZoom('#interactive-diagram', {

            zoomEnabled: true,

            controlIconsEnabled: true,

            fit: false,

            center: false,

            minZoom: 0.2,

            maxZoom: 10,

            zoomScaleSensitivity: 0.2

          });

  

          // 1. Set zoom level (90%)

          var targetZoom = 0.90;

          panZoomInstance.zoom(targetZoom);

  

          // 2. Set center coordinates

          var targetX = 600.0;

          var targetY = 750.0;
  

          // 3. Calculate viewport center offset

          var sizes = panZoomInstance.getSizes();

          var containerWidth = sizes.width;

          var containerHeight = sizes.height;

  

          var panX = (containerWidth / 2) - (targetX * targetZoom);

          var panY = (containerHeight / 2) - (targetY * targetZoom);

  

          panZoomInstance.pan({ x: panX, y: panY });

  

          // 4. Bind touch listeners for iPad / Tablet D-Pad support

          bindTouchControl('btn-up', 'up');

          bindTouchControl('btn-down', 'down');

          bindTouchControl('btn-left', 'left');

          bindTouchControl('btn-right', 'right');

        });

  

        /* Directional Pan Execution */

        function moveDiagram(direction) {

          if (!panZoomInstance) return;

          var step = 80;

          if (direction === 'up') panZoomInstance.panBy({x: 0, y: step});

          if (direction === 'down') panZoomInstance.panBy({x: 0, y: -step});

          if (direction === 'left') panZoomInstance.panBy({x: step, y: 0});

          if (direction === 'right') panZoomInstance.panBy({x: -step, y: 0});

        }

  

        /* iPad / iOS Touch Event Binding */

        function bindTouchControl(elementId, direction) {

          var elem = document.getElementById(elementId);

          if (!elem) return;

          var handleAction = function(e) {

            e.preventDefault();

            e.stopPropagation();

            moveDiagram(direction);

          };

  

          elem.addEventListener('touchstart', handleAction, { passive: false });

          elem.addEventListener('click', handleAction);

        }

      ]]>

      </script>

  

      <!-- LEAVE ALL EXISTING YED-GENERATED <clipPath> TAGS BELOW THIS LINE -->
```


# 3 
Paste this directional arrow script at the very bottom; right before the closing `</svg>` tag
```
  <!-- ============================================================ -->

  <!-- 3. TABLET & MOBILE TOUCH D-PAD OVERLAY (PASTE BEFORE </svg>) -->

  <!-- ============================================================ -->

  <g id="directional-controls" style="opacity: 0.85;">

    <rect x="10" y="10" width="105" height="105" rx="12" fill="#222222" opacity="0.65"/>

  

    <g id="btn-up" transform="translate(47.5, 15)">

      <rect width="30" height="30" rx="6" fill="#ffffff" opacity="0.9"/>

      <text x="15" y="21" font-size="18" font-weight="bold" text-anchor="middle" fill="#000000">▲</text>

    </g>

  

    <g id="btn-down" transform="translate(47.5, 80)">

      <rect width="30" height="30" rx="6" fill="#ffffff" opacity="0.9"/>

      <text x="15" y="21" font-size="18" font-weight="bold" text-anchor="middle" fill="#000000">▼</text>

    </g>

  

    <g id="btn-left" transform="translate(15, 47.5)">

      <rect width="30" height="30" rx="6" fill="#ffffff" opacity="0.9"/>

      <text x="15" y="21" font-size="18" font-weight="bold" text-anchor="middle" fill="#000000">◄</text>

    </g>

  

    <g id="btn-right" transform="translate(80, 47.5)">

      <rect width="30" height="30" rx="6" fill="#ffffff" opacity="0.9"/>

      <text x="15" y="21" font-size="18" font-weight="bold" text-anchor="middle" fill="#000000">►</text>

    </g>

  </g>
```

# 4
Add this to the Obsidian MD note

```
<div style="width: 100%; height: 500px; border: 1px solid rgba(0, 0, 0, 0.15); border-radius: 8px; overflow: hidden;">
  <iframe 
    src="../material/love-map.svg" 
    style="width: 100%; height: 100%; border: none; display: block;" 
    loading="lazy">
  </iframe>
</div>
```
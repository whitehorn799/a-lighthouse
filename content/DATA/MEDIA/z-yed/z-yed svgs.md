---
title: z-yed iframe full
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
lastmod: 2026-09-22 20:21:00
enableToc:  true
cssclasses: 
  - hide-breadcrumbs
---

# HTML
Make an html file for the specific svg. Don't make an MD note. Paste this in it.

Use this in Obsidian to link to this page:
<a href="/static/xxx.html" target="_blank" rel="noopener">

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Love Map: Complex</title>
  
  <!-- Import Dosis Font from Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@500;700&display=swap" rel="stylesheet">

  <style>
    /* 1. Reset root HTML and body */
    html, body {
      margin: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background-color: #ffffff;
      font-family: 'Dosis', sans-serif !important;
    }

    /* 2. Full-viewport SVG container */
    #interactive-diagram-container {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    /* 3. Object element dimensions */
    #yed-svg {
      display: block;
      width: 100%;
      height: 100%;
      border: none;
    }

    /* 4. Lower-Left Fixed D-Pad Overlay (Upside-Down T Layout: 3 cols x 2 rows) */
    #dpad-container {
      position: fixed !important;
      bottom: 25px !important;
      left: 25px !important;
      z-index: 999999 !important;
      display: grid;
      grid-template-columns: repeat(3, 34px);
      grid-template-rows: repeat(2, 34px);
      gap: 3px;
      background: rgba(0, 0, 0, 0.0);
      padding: 5px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.0);
      /*backdrop-filter: blur(4px);*/
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }

    /* Button Styling to match default svg-pan-zoom control icons */
    .dpad-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      font-family: 'Dosis', sans-serif !important;
      font-size: 13px;
      font-weight: 700;
      color: #ffffff;
      cursor: pointer;
      transition: background 0.15s ease, transform 0.05s ease;
    }

    .dpad-btn:hover {
      background: rgba(0, 0, 0, 0.85);
    }

    .dpad-btn:active {
      background: #000000;
      transform: scale(0.92);
    }

    /* Grid layout: Upside-Down T configuration */
    #btn-up    { grid-column: 2; grid-row: 1; }
    #btn-left  { grid-column: 1; grid-row: 2; }
    #btn-down  { grid-column: 2; grid-row: 2; }
    #btn-right { grid-column: 3; grid-row: 2; }
  </style>
  <script src="https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"></script>
</head>
<body>

  <!-- Background SVG Viewport -->
  <div id="interactive-diagram-container">
    <object id="yed-svg" type="image/svg+xml" data="love-map-complex.svg" width="100%" height="100%"></object>
  </div>

  <!-- Foreground Fixed Overlay (Upside-Down T D-Pad) -->
  <div id="dpad-container">
    <button id="btn-up" class="dpad-btn" title="Pan Up">▲</button>
    <button id="btn-left" class="dpad-btn" title="Pan Left">◄</button>
    <button id="btn-down" class="dpad-btn" title="Pan Down">▼</button>
    <button id="btn-right" class="dpad-btn" title="Pan Right">►</button>
  </div>

  <script>
    var panZoomInstance = null;

    // Target position & zoom settings
    var DEFAULT_RESET_ZOOM = 0.86; 
    var TARGET_X = -2100;           
    var TARGET_Y = -7;          
    var PAN_STEP = 200; 

    function resetView() {
      if (!panZoomInstance) return;

      panZoomInstance.resize();
      panZoomInstance.zoom(DEFAULT_RESET_ZOOM);
      panZoomInstance.pan({ x: TARGET_X, y: TARGET_Y });
    }

    function moveDiagram(direction) {
      if (!panZoomInstance) return;
      if (direction === 'up')    panZoomInstance.panBy({ x: 0, y: PAN_STEP });
      if (direction === 'down')  panZoomInstance.panBy({ x: 0, y: -PAN_STEP });
      if (direction === 'left')  panZoomInstance.panBy({ x: PAN_STEP, y: 0 });
      if (direction === 'right') panZoomInstance.panBy({ x: -PAN_STEP, y: 0 });
    }

    function bindControl(elementId, actionFn) {
      var elem = document.getElementById(elementId);
      if (!elem) return;

      var handleAction = function(e) {
        e.preventDefault();
        e.stopPropagation();
        actionFn();
      };

      elem.addEventListener('touchstart', handleAction, { passive: false });
      elem.addEventListener('click', handleAction);
    }

    function initPanZoom() {
      var objectElem = document.getElementById('yed-svg');
      if (!objectElem) return;

      var svgDoc = objectElem.contentDocument;
      var svgElement = svgDoc ? svgDoc.querySelector('svg') : null;

      if (svgElement && !panZoomInstance) {
        // Inject Dosis font inside SVG document to ensure yEd rendering uses it
        try {
          var styleElem = svgDoc.createElementNS("http://www.w3.org/2000/svg", "style");
          styleElem.textContent = "@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@500;700&display=swap'); * { font-family: 'Dosis', sans-serif !important; }";
          svgElement.insertBefore(styleElem, svgElement.firstChild);
        } catch(e) {
          console.warn("Could not inject Dosis font into SVG inner document:", e);
        }

        svgElement.setAttribute('width', '100%');
        svgElement.setAttribute('height', '100%');

        panZoomInstance = svgPanZoom(svgElement, {
          zoomEnabled: true,
          controlIconsEnabled: true,
          dblClickZoomEnabled: false,
          fit: false,
          center: false,
          minZoom: 0.2,
          maxZoom: 10,
          zoomScaleSensitivity: 0.2
        });

        // Allow layout calculation to stabilize before initial pan
        requestAnimationFrame(function() {
          requestAnimationFrame(function() {
            resetView();

            // Override built-in bottom-right reset icon
            var builtInResetBtn = svgDoc.getElementById('svg-pan-zoom-reset-pan-zoom');
            if (builtInResetBtn) {
              var newResetBtn = builtInResetBtn.cloneNode(true);
              builtInResetBtn.parentNode.replaceChild(newResetBtn, builtInResetBtn);

              var handleReset = function(e) {
                e.preventDefault();
                e.stopPropagation();
                resetView();
              };

              newResetBtn.addEventListener('click', handleReset);
              newResetBtn.addEventListener('touchstart', handleReset, { passive: false });
            }
          });
        });

        window.addEventListener('resize', function() {
          resetView();
        });

        // Bind D-Pad directional controls
        bindControl('btn-up', function() { moveDiagram('up'); });
        bindControl('btn-down', function() { moveDiagram('down'); });
        bindControl('btn-left', function() { moveDiagram('left'); });
        bindControl('btn-right', function() { moveDiagram('right'); });
      }
    }

    // Handle fast-cached and fresh loads
    var objectElem = document.getElementById('yed-svg');
    if (objectElem.contentDocument && objectElem.contentDocument.querySelector('svg')) {
      initPanZoom();
    } else {
      objectElem.addEventListener('load', initPanZoom);
    }
  </script>

</body>
</html>
```

<hr>

# Find the zoom
Type this in the developer console in the browser after you position the default zoom and pan. Copy into the TARGET_X, TARGET_Y, and DEFAULT_RESET_ZOOM.

```
console.log("Current Pan:", panZoomInstance.getPan(), "Current Zoom:", panZoomInstance.getZoom());
```

# Obsidian Note
Place this inside the note

```
<a href="/static/lmc-index.html" target="_blank" rel="noopener">Love Map: Complex (Full Screen)</a>
```
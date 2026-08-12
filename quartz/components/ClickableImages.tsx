import { QuartzComponent, QuartzComponentConstructor } from "./types"

export const ClickableImages: QuartzComponentConstructor = () => {
  const Component: QuartzComponent = () => null // Renders no HTML element

  Component.afterDOMLoaded = `
    document.addEventListener("nav", () => {
      document.querySelectorAll("article img[alt*='full']").forEach((img) => {
        img.style.cursor = "pointer"
        img.onclick = () => {
          window.open(img.src, "_blank", "noopener,noreferrer")
        }
      })
    })
  `

  return Component
}

export default ClickableImages
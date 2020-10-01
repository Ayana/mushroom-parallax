import React, { useEffect } from "react"

import SEO from "../SEO/SEO"
import "../../assets/styles/App.scss"

export default ({ children, location, pageSlug }) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  useEffect(() => {
    // Get correct height function with clearTimeout to prevent too many requests
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
    const currentWidth = window.innerWidth

    let timeoutId = null
    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (currentWidth !== window.innerWidth) {
          // get correct height
          const vh = window.innerHeight * 0.01
          document.documentElement.style.setProperty("--vh", `${vh}px`)
        }
      }, 500)
    }
    window.addEventListener("resize", resizeListener)

    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [])

  return (
    <>
      <SEO location={location} />
      <main>{children}</main>
    </>
  )
}

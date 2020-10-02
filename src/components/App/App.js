import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

function App() {
  const data = useStaticQuery(graphql`
    query {
      layer1: file(relativePath: { eq: "layer1.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      layer2: file(relativePath: { eq: "layer2.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      layer3: file(relativePath: { eq: "layer3.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      layer4: file(relativePath: { eq: "layer4.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      layer5: file(relativePath: { eq: "layer5.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      layer_grass: file(relativePath: { eq: "layer_grass.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      layer6: file(relativePath: { eq: "layer6.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      layer7: file(relativePath: { eq: "layer7.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  const layer1 = data.layer1.childImageSharp.fluid
  const layer2 = data.layer2.childImageSharp.fluid
  const layer3 = data.layer3.childImageSharp.fluid
  const layer4 = data.layer4.childImageSharp.fluid
  const layer5 = data.layer5.childImageSharp.fluid
  const layer_grass = data.layer_grass.childImageSharp.fluid
  const layer6 = data.layer6.childImageSharp.fluid
  const layer7 = data.layer7.childImageSharp.fluid

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
      }, 1000)
    }
    window.addEventListener("resize", resizeListener)

    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  })

  useEffect(() => {
    const button = document.querySelector(".button")
    const container = document.querySelector(".parallax-container")
    const layer1 = document.querySelector(".layer1")
    const layer2 = document.querySelector(".layer2")
    const layer3 = document.querySelector(".layer3")
    const layer4 = document.querySelector(".layer4")
    const layer5 = document.querySelector(".layer5")
    const layer_grass = document.querySelector(".layer_grass")
    const layer6 = document.querySelector(".layer6")
    const layer7 = document.querySelector(".layer7")
    button.addEventListener("click", onClick)

    function onClick() {
      // feature detect
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === "granted") {
              button.style.display = "none"
              container.style.display = "block"
              window.addEventListener("deviceorientation", e => {
                const gamma = e.gamma
                const beta = e.beta

                if (beta > -80 && beta < 80) {
                  layer1.style.transform = `translate3d(${-gamma * 1.4}px,${
                    -beta * 1.2
                  }px,0px)`
                  layer2.style.transform = `translate3d(${-gamma * 1.3}px,${
                    -beta * 1.1
                  }px,0px)`
                  layer3.style.transform = `translate3d(${-gamma * 1.2}px,${
                    -beta * 1.05
                  }px,0px)`
                  layer4.style.transform = `translate3d(${-gamma * 1.04}px,${
                    -beta * 1.02
                  }px,0px)`
                  layer_grass.style.transform = `translate3d(${-gamma * 1}px,${
                    -beta * 0.9
                  }px,0px)`
                  layer5.style.transform = `translate3d(${-gamma * 0.8}px,${
                    -beta * 0.9
                  }px,0px)`
                  layer6.style.transform = `translate3d(${-gamma * 0.6}px,${
                    -beta * 0.5
                  }px,0px)`
                  layer7.style.transform = `translate3d(${-gamma * 0.5}px,${
                    -beta * 0.3
                  }px,0px)`
                }
              })
            }
          })
          .catch(console.error)
      } else {
        button.style.display = "none"
        container.style.display = "block"
        // handle regular non iOS 13+ devices

        document.body.addEventListener("mousemove", e => {
          const x = e.clientX - window.innerWidth / 2
          const y = e.clientY - window.innerHeight / 2
          layer1.style.transform = `translate3d(${-x * 0.25}px,${
            -y * 0.08
          }px,0px`
          layer2.style.transform = `translate3d(${-x * 0.18}px,${
            -y * 0.06
          }px,0px`
          layer3.style.transform = `translate3d(${-x * 0.12}px,${
            -y * 0.05
          }px,0px`
          layer4.style.transform = `translate3d(${-x * 0.08}px,${
            -y * 0.04
          }px,0px`
          layer_grass.style.transform = `translate3d(${-x * 0.11}px,${
            -y * 0.03
          }px,0px`
          layer5.style.transform = `translate3d(${-x * 0.09}px,${
            -y * 0.03
          }px,0px`
          layer6.style.transform = `translate3d(${-x * 0.04}px,${
            -y * 0.02
          }px,0px`
          layer7.style.transform = `translate3d(${-x * 0.03}px,${
            -y * 0.01
          }px,0px`
        })
      }
    }
  })

  return (
    <>
      <button className="button">CLICK TO SHOW</button>
      <div className="parallax-container">
        <div className="parallax-layer layer7">
          <Img fluid={layer7} alt="" className="" />
        </div>
        <div className="parallax-layer layer6">
          <Img fluid={layer6} alt="" />
        </div>
        <div className="parallax-layer layer5">
          <Img fluid={layer5} alt="" />
        </div>
        <div className="parallax-layer layer_grass">
          <Img fluid={layer_grass} alt="" />
        </div>
        <div className="parallax-layer layer4">
          <Img fluid={layer4} alt="" />
        </div>
        <div className="parallax-layer layer3">
          <Img fluid={layer3} alt="" />
        </div>
        <div className="parallax-layer layer2">
          <Img fluid={layer2} alt="" />
        </div>
        <div className="parallax-layer layer1">
          <Img fluid={layer1} alt="" />
        </div>
      </div>
    </>
  )
}

export default App

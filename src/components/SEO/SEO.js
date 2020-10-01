import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ lang, pageSlug }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteDescription
            siteKeywords
            siteUrl
            ogpImage
            author
          }
        }
      }
    `
  )

  // Site Data
  const siteTitle = site.siteMetadata.siteTitle
  const siteTitleJa = site.siteMetadata.siteTitleJa
  const siteDescription = site.siteMetadata.siteDescription
  const siteDescriptionJa = site.siteMetadata.siteDescriptionJa
  const siteKeywords = site.siteMetadata.siteKeywords
  const siteUrl = site.siteMetadata.siteUrl
  const ogpImage = site.siteMetadata.ogpImage
  const author = site.siteMetadata.author

  const url = typeof window !== "undefined" ? window.location.href : ""
  const isLangJa = lang === "ja"

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
        bodyAttributes={{
          class: pageSlug,
        }}
        title={isLangJa ? siteTitleJa : siteTitle}
        defaultTitle={siteTitle}
      >
        {/* General tags */}
        <meta name="image" content={siteUrl + ogpImage} />
        <meta
          name="description"
          content={isLangJa ? siteDescriptionJa : siteDescription}
        />
        <meta name="keyword" content={siteKeywords} />

        {/* OpenGraph tags */}
        <meta
          property="og:title"
          content={isLangJa ? siteTitleJa : siteTitle}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={siteUrl + ogpImage} />
        <meta
          property="og:description"
          content={isLangJa ? siteDescriptionJa : siteDescription}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={author} />
        <meta
          name="twitter:title"
          content={isLangJa ? siteTitleJa : siteTitle}
        />
        <meta name="twitter:image" content={siteUrl + ogpImage} />
        <meta
          name="twitter:description"
          content={isLangJa ? siteDescriptionJa : siteDescription}
        />

        {/* Alternate pages */}
        <link rel="alternate" hreflang="en" href={siteUrl} />
      </Helmet>
    </>
  )
}

export default SEO

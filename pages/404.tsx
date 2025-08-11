export default function Custom404() {
  return (
    <>
      <head>
        <title>404: This page could not be found - Phillip Collins</title>
        <meta name="robots" content="noindex" />
      </head>
      <div style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue', 'Lucida Grande', sans-serif",
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        color: "#000",
        background: "#fff"
      }}>
        <div>
          <h1 style={{
            display: "inline-block",
            margin: 0,
            marginRight: "20px",
            padding: "0 23px 0 0",
            fontSize: "24px",
            fontWeight: 500,
            verticalAlign: "top",
            lineHeight: "49px",
            borderRight: "1px solid rgba(0, 0, 0, .3)"
          }}>
            404
          </h1>
          <div style={{
            display: "inline-block",
            textAlign: "left",
            lineHeight: "49px",
            height: "49px",
            verticalAlign: "middle"
          }}>
            <h2 style={{
              fontFamily: "'Waiting for the Sunrise', cursive",
              fontSize: "16px",
              fontWeight: "normal",
              lineHeight: "49px",
              margin: 0,
              padding: 0,
              color: "#F96E1E"
            }}>
              This page could not be found.
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

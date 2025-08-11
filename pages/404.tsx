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
        background: "#fff",
        padding: "20px"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
          maxWidth: "800px"
        }}>
          {/* 404 Circle Image */}
          <a 
            href="/"
            style={{
              display: "block",
              transition: "transform 0.2s ease",
              cursor: "pointer"
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.transform = "scale(1.05)"}
            onMouseOut={(e) => (e.target as HTMLElement).style.transform = "scale(1)"}
          >
            <img
              src="/images/404.png"
              alt="404 - Page not found"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "contain"
              }}
            />
          </a>

          {/* Sometimes... Speech Bubble Image */}
          <a 
            href="/"
            style={{
              display: "block",
              transition: "transform 0.2s ease",
              cursor: "pointer"
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.transform = "scale(1.05)"}
            onMouseOut={(e) => (e.target as HTMLElement).style.transform = "scale(1)"}
          >
            <img
              src="/images/Sometimes the most valuable insights come from unexpected detours.png"
              alt="Sometimes the most valuable insights come from unexpected detours"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "contain"
              }}
            />
          </a>
        </div>
      </div>
    </>
  )
}

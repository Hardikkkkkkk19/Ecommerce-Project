export function About() {
  const cardStyle = {
    background: "#0f172a",
    border: "1px solid rgba(59,130,246,0.2)",
    borderRadius: "15px",
    padding: "25px",
    width: "230px",
    textAlign: "center",
    boxShadow: "0 0 15px rgba(59,130,246,0.1)",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #020617, #0f172a, #020617)",
        color: "white",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
      style={{ color: "cyan" }}> About ASUS</h1>
        <hr></hr>
     

      <p
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "auto",
          color: "#cbd5e1",
          fontSize: "18px",
          lineHeight: "30px",
        }}
      >
        ASUS is a global technology leader known for innovation,
        performance, and incredible quality. We create laptops,
        gaming gear, motherboards, graphics cards, and more.
      </p>

      <div
        style={{
          width: "80px",
          height: "4px",
          background: "#3b82f6",
          margin: "25px auto 50px",
          borderRadius: "10px",
        }}
      ></div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <h2>🏆</h2>
          <h3>Premium Quality</h3>
          <p style={{ color: "#94a3b8" }}>
            We use the best materials and technology.
          </p>
        </div>

        <div style={cardStyle}>
          <h2>🚀</h2>
          <h3>Innovation</h3>
          <p style={{ color: "#94a3b8" }}>
            Bringing powerful and smart solutions.
          </p>
        </div>

        <div style={cardStyle}>
          <h2>🎧</h2>
          <h3>Customer Support</h3>
          <p style={{ color: "#94a3b8" }}>
            24/7 support whenever you need help.
          </p>
        </div>

        <div style={cardStyle}>
          <h2>🛡️</h2>
          <h3>Trusted Brand</h3>
          <p style={{ color: "#94a3b8" }}>
            Millions trust ASUS worldwide.
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "50px",
          background: "#0f172a",
          border: "1px solid rgba(59,130,246,0.2)",
          borderRadius: "15px",
          padding: "25px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h3>2 Year Free Warranty</h3>
          <p style={{ color: "#94a3b8" }}>
            Official warranty included.
            <hr></hr>
          </p>
        </div>

        <div>
          <h3>Free Home Delivery</h3>
          <p style={{ color: "#94a3b8" }}>
            Within 48 hours of delivery.
           <hr></hr>
          </p>
        </div>

        <div>
          <h3>24/7 Help & Support</h3>
          <p style={{ color: "#94a3b8" }}>
            AI Chat bot OR Human vedio calls supported.
            <hr></hr>
          </p>
        </div>
        </div>
        <div
style={{
  textAlign:"center",
  padding:"20px",
  color:"#aaa",
  marginTop:"50px"
}}
>
© 2026 ASUS Premium | All Rights Reserved
</div>
      <hr/>
    </div>
  );
}
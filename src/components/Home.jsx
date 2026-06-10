export function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #020617, #0f172a, #020617)",
        color: "white",
        padding: "40px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "skyblue" }}>ASUS Premium Accessories </h1>
        <hr></hr>
      

      <p
        style={{
          color: "#94a3b8",
          maxWidth: "700px",
          margin: "auto",
          lineHeight: "28px",
        }}
      >
        High Performance gear designed to complement your lifestyle.
      </p>

      <div
        style={{
          width: "80px",
          height: "4px",
          background: "#3b82f6",
          margin: "25px auto",
          borderRadius: "10px",
        }}
      ></div>

      <div
        style={{
          display: "flex",
          gap: "25px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
      
        <div
          style={{
            background: "#0f172a",
            border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: "15px",
            padding: "20px",
            width: "280px",
            boxShadow: "0 0 15px rgba(59,130,246,0.15)",
          }}
        >
          <img
            src="/scope.jpg"
            alt="SCOPE"
            width="240"
            style={{ borderRadius: "10px" }}
          />

          <h3 style={{ color: "#60a5fa" }}>
            ASUS ROG Strix Scope II
          </h3>

          <h5>Gaming Keyboard</h5>

          <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
            ASUS ROG Strix Scope II 96 RX Wireless Gaming Keyboard.
          </p>

          <h2 style={{ color: "green" }}>₹14,990</h2>

          <p style={{ color: "#94a3b8" }}>
            (Incl. all Taxes)
          </p>

          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            View Details
          </button>
        </div>
        <div
          style={{
            background: "#0f172a",
            border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: "15px",
            padding: "20px",
            width: "280px",
            boxShadow: "0 0 15px rgba(59,130,246,0.15)",
          }}
        >
          <img
            src="/gladius.jpg"
            alt="GLADIUS"
            width="240"
            style={{ borderRadius: "10px" }}
          />

          <h3 style={{ color: "#60a5fa" }}>
            ASUS ROG Gladius III
          </h3>

          <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
            Wired Optical Gaming Mouse with 19000 DPI and
            customizable buttons.
          </p>

          <h2 style={{ color: "green" }}>₹6,990</h2>

          <p style={{ color: "#94a3b8" }}>
            (Incl. all Taxes)
          </p>

          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            View Details
          </button>
        </div>

        <div
          style={{
            background: "#0f172a",
            border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: "15px",
            padding: "20px",
            width: "280px",
            boxShadow: "0 0 15px rgba(59,130,246,0.15)",
          }}
        >
          <img
            src="/delta.jpg"
            alt="DELTA"
            width="240"
            style={{ borderRadius: "10px" }}
          />

          <h3 style={{ color: "#60a5fa" }}>
            ASUS ROG Delta S
          </h3>

          <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
            Lightweight USB-C gaming headset with AI
            noise-canceling microphone.
          </p>

          <h2 style={{ color: "green" }}>₹15,990</h2>

          <p style={{ color: "#94a3b8" }}>
            (Incl. all Taxes)
          </p>

          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            View Details
          </button>
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
<hr></hr>
    </div>
    
  );
}
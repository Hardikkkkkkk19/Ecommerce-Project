export function Products() {
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
      <h1 style={{ color: "cyan" }}>ASUS Premium Laptops</h1>
        <hr></hr>
   

      <p
        style={{
          color: "#94a3b8",
          maxWidth: "700px",
          margin: "auto",
          lineHeight: "28px",
        }}
      >
        Explore the latest ASUS gaming and productivity laptops
        designed for performance and innovation.
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
            src="/rog.jpg"
            alt="ROG"
            width="240"
            style={{ borderRadius: "10px" }}
          />

          <h3 style={{ color: "#60a5fa" }}>ASUS ROG Strix</h3>

          <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
            ASUS ROG Strix G16 G615LR-S5190WS Intel Core Ultra 9 Gaming Laptop.
          </p>

          <h2 style={{ color: "green" }}>₹276,990</h2>

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
            Order Now
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
            src="/asus.jpg"
            alt="ASUS"
            width="240"
            style={{ borderRadius: "10px" }}
          />

          <h3 style={{ color: "#60a5fa" }}>ASUS Zenbook</h3>

          <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
            ASUS Zenbook Duo Intel Core Ultra 9 Touchscreen Laptop.
          </p>

          <h2 style={{ color: "green" }}>₹239,990</h2>

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
            Order Now
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
            src="/vivobook.jpg"
            alt="VIVOBOOK"
            width="240"
            style={{ borderRadius: "10px" }}
          />

          <h3 style={{ color: "#60a5fa" }}>ASUS Vivobook</h3>

          <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
            ASUS Vivobook 16 Intel Core Ultra 5 Thin & Light Laptop.
          </p>

          <h2 style={{ color: "green" }}>₹98,990</h2>

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
            Order Now
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
            src="/tuff.jpg"
            alt="TUF"
            width="240"
            style={{ borderRadius: "10px" }}
          />

          <h3 style={{ color: "#60a5fa" }}>ASUS TUF Gaming</h3>

          <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
            ASUS TUF A15 Ryzen 7 Gaming Laptop with RTX 3050.
          </p>

          <h2 style={{ color: "green" }}>₹78,990</h2>

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
            Order Now
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
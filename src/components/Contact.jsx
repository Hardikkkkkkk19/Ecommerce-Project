export function Contact() {
  return (
    <div
      style={{
        padding: "30px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "cyan" }}>Contact Us</h1>
      <p>We would love to hear from you. Get in touch with us.</p>

      <br />

      <div
        style={{
          width: "90%",
          maxWidth: "500px",
          margin: "auto",
          border: "1px solid #ccc",
          padding: "20px",
        }}
      >
        <form>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="Enter Your Name"
              style={{
                width: "90%",
                padding: "10px",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              placeholder="Enter Your Email"
              style={{
                width: "90%",
                padding: "10px",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="Enter Subject"
              style={{
                width: "90%",
                padding: "10px",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <textarea
              placeholder="Enter Your Message"
              rows="5"
              style={{
                width: "90%",
                padding: "10px",
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      </div>

      <br />

      <div
        style={{
          width: "90%",
          maxWidth: "1000px",
          margin: "30px auto",
          display: "flex",
          justifyContent: "space-between",
          gap: "30px",
          border: "1px solid #333",
          padding: "30px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "2", minWidth: "250px" }}>
          <h3 style={{ color: "blue" }}>📍 Address</h3>
          <h5>ASUS Store Near Railway Station, Before General Medical Store, Navi Mumbai (W), Maharashtra - 400093</h5>
          
        </div>

        <div style={{ flex: "1", minWidth: "200px" }}>
          <h3 style={{ color: "blue" }}>📧 Email ID</h3>
          <h5>hvjadhav19@gmail.com</h5>
        </div>

        <div style={{ flex: "1", minWidth: "180px" }}>
          <h3 style={{ color: "blue" }}>📞 Phone No</h3>
          <h5>+91 94593 26846</h5>
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
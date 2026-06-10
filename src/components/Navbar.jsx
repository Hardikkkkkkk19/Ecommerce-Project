export function Navbar() {
  return (
    <nav
      style={{
        background: "#000",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3>ASUS</h3>

      <div style={{ display: "flex", gap: "50px" }}>
        <p>Home</p>
        <p>Products</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </nav>
  );
}
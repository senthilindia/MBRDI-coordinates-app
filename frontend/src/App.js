import React, { useState } from "react";
import { Container, Typography } from "@mui/material";

function App() {
  const [coords, setCoords] = useState(null);

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setCoords({ x, y });

    fetch("http://localhost:5000/api/coordinates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ x, y }),
    });
  };

  return (
    <Container>
      <Typography variant="h4">Click on the image</Typography>
      <img
        src="https://placehold.co/600x400"
        alt="test"
        onClick={handleClick}
        style={{ cursor: "crosshair", maxWidth: "100%" }}
      />
      {coords && (
        <Typography mt={2}>
          X: {coords.x}, Y: {coords.y}
        </Typography>
      )}
    </Container>
  );
}

export default App;

document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("cursor-pointer");
  const ring = document.getElementById("cursor-ring");

  document.addEventListener("mousemove", (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
    ring.style.transform = `translate(${x}px, ${y}px)`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const id = new URLSearchParams(location.search).get("id") || "linen-saree";
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  document.getElementById("productCategory").textContent = product.category;
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productPrice").textContent = product.price;
  document.getElementById("productDesc").textContent = product.desc;
  const image = document.getElementById("productImage");
  image.src = product.image;
  image.alt = product.name;
  image.onerror = () => { image.onerror = null; image.src = product.fallback; };
  document.title = `${product.name} — ${SITE_CONFIG.brandName}`;

  const buttons = document.querySelectorAll(".size-btn");
  const note = document.getElementById("sizeNote");
  let selected = "";
  buttons.forEach(btn => btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selected = btn.dataset.size;
    note.textContent = "";
  }));

  document.getElementById("addToBagBtn").addEventListener("click", () => {
    if (!selected) {
      note.textContent = "Please select a size first.";
      note.style.color = "var(--wine)";
      return;
    }
    note.style.color = "var(--muted)";
    note.textContent = `Added — ${product.name}, size ${selected}.`;
  });
});
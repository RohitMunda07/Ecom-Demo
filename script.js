/* =========================================================
   CLIENT CONFIG — change these values for each client.
   Everything else on the site can stay the same.
   ========================================================= */
const SITE_CONFIG = {
  brandName: "Verane",
  logo: "assets/logo.svg",
  tagline: "Modern fashion for everyday life.",
  accentColor: "#6E2A34",
  whatsappNumber: "9330000000"
};

const PRODUCTS = [
  {
    "id": "linen-saree",
    "name": "Linen Saree",
    "category": "Sarees",
    "price": "₹2,499",
    "desc": "A lightweight everyday saree with a clean border and easy drape.",
    "image": "https://images.unsplash.com/photo-1735331467260-0153c5fbd31d?w=500&auto=format&fithttps://images.unsplash.com/photo-1742287724816-4a8a1cc7ad5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGluZW4lMjBTYXJlZXxlbnwwfHwwfHx8MA%3D%3D=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
    "fallback": "assets/products/linen-saree.svg"
  },
  {
    "id": "cotton-saree",
    "name": "Classic Cotton Saree",
    "category": "Sarees",
    "price": "₹1,899",
    "desc": "Soft cotton weave with a simple contrast border for everyday wear.",
    "image": "https://images.unsplash.com/photo-1710969490678-0765d1478fe2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fENsYXNzaWMlMjBDb3R0b24lMjBTYXJlZXxlbnwwfHwwfHx8MA%3D%3D",
    "fallback": "assets/products/cotton-saree.svg"
  },
  {
    "id": "silk-saree",
    "name": "Festive Silk Saree",
    "category": "Sarees",
    "price": "₹4,999",
    "desc": "A dressier silk-inspired weave for festive evenings and occasions.",
    "image": "https://images.unsplash.com/photo-1727430228383-aa1fb59db8bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmVzdGl2ZSUyMFNpbGslMjBTYXJlZXxlbnwwfHwwfHx8MA%3D%3D",
    "fallback": "assets/products/silk-saree.svg"
  },
  {
    "id": "printed-kurti",
    "name": "Printed Everyday Kurti",
    "category": "Kurtis",
    "price": "₹1,299",
    "desc": "Relaxed straight-fit kurti with an all-over botanical print.",
    "image": "https://plus.unsplash.com/premium_photo-1682097935697-2ed1efce421a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJpbnRlZC1rdXJ0aXxlbnwwfHwwfHx8MA%3D%3D",
    "fallback": "assets/products/printed-kurti.svg"
  },
  {
    "id": "a-line-kurti",
    "name": "A-Line Kurti",
    "category": "Kurtis",
    "price": "₹1,499",
    "desc": "An easy A-line silhouette designed for workdays and weekends.",
    "image": "https://images.unsplash.com/photo-1759840278381-bf7d5e332050?auto=format&fit=crop&w=1200&q=82",
    "fallback": "assets/products/a-line-kurti.svg"
  },
  {
    "id": "festive-kurti",
    "name": "Festive Embroidered Kurti",
    "category": "Kurtis",
    "price": "₹1,899",
    "desc": "Light festive detailing with a comfortable everyday silhouette.",
    "image": "https://images.unsplash.com/photo-1732128104921-239596d768e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZlc3RpdmUlMjBFbWJyb2lkZXJlZCUyMEt1cnRpfGVufDB8fDB8fHww",
    "fallback": "assets/products/festive-kurti.svg"
  },
  {
    "id": "anarkali",
    "name": "Soft Anarkali Dress",
    "category": "Dresses",
    "price": "₹2,299",
    "desc": "Flowing panelled dress with a gentle flare and comfortable fit.",
    "image": "https://images.unsplash.com/photo-1754244575428-8123e0d27ef3?auto=format&fit=crop&w=1200&q=82",
    "fallback": "assets/products/anarkali.svg"
  },
  {
    "id": "co-ord",
    "name": "Cotton Co-ord Set",
    "category": "Ethnic Sets",
    "price": "₹2,099",
    "desc": "A coordinated ethnic set for an effortless festive look.",
    "image": "https://images.unsplash.com/photo-1759840278381-bf7d5e332050?auto=format&fit=crop&w=1200&q=82",
    "fallback": "assets/products/co-ord.svg"
  },
  {
    "id": "dupatta",
    "name": "Printed Cotton Dupatta",
    "category": "Dupattas",
    "price": "₹899",
    "desc": "A versatile printed dupatta to layer across multiple outfits.",
    "image": "https://images.unsplash.com/photo-1773439878338-c61b0fe9ed48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGR1cGF0dGF8ZW58MHx8MHx8fDA%3D",
    "fallback": "assets/products/dupatta.svg"
  },
  // {
  //   "id": "bandi",
  //   "name": "Handloom Bandi",
  //   "category": "Ethnic Sets",
  //   "price": "₹1,799",
  //   "desc": "A structured sleeveless layer that works with kurtas and shirts.",
  //   "image": "https://images.unsplash.com/photo-1759840278381-bf7d5e332050?auto=format&fit=crop&w=1200&q=82",
  //   "fallback": "assets/products/bandi.svg"
  // },
  {
    "id": "potli",
    "name": "Embroidered Potli",
    "category": "Accessories",
    "price": "₹699",
    "desc": "Compact festive accessory with decorative detailing.",
    "image": "https://plus.unsplash.com/premium_photo-1724762183683-251ce8b09d08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGV0aG5pYyUyMHNldCUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D",
    "fallback": "assets/products/potli.svg"
  },
  {
    "id": "stole",
    "name": "Soft Everyday Stole",
    "category": "Dupattas",
    "price": "₹749",
    "desc": "A lightweight stole designed for easy layering.",
    "image": "https://images.unsplash.com/photo-1572470176170-98fa8abcb741?auto=format&fit=crop&w=1200&q=82",
    "fallback": "assets/products/stole.svg"
  }
];

function applyConfig() {
  document.querySelectorAll('[data-config="brandName"]').forEach(el => el.textContent = SITE_CONFIG.brandName);
  document.querySelectorAll('[data-config="tagline"]').forEach(el => el.textContent = SITE_CONFIG.tagline);
  document.querySelectorAll("#brandLogo").forEach(img => {
    img.src = SITE_CONFIG.logo;
    img.alt = SITE_CONFIG.brandName + " logo";
  });

  document.documentElement.style.setProperty("--wine", SITE_CONFIG.accentColor);
  document.title = document.title.replace(/Verane/g, SITE_CONFIG.brandName);

  const wa = `https://wa.me/${SITE_CONFIG.whatsappNumber}`;
  const a = document.getElementById("waFloat");
  const b = document.getElementById("waLink");

  if (a) a.href = wa;
  if (b) b.href = wa;
}

function productCard(p) {
  return `<a class="product-card" href="product.html?id=${encodeURIComponent(p.id)}">
  <div class="product-image-wrap">
  <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${p.fallback}'">
  <span class="quick-view">View product</span>
  </div>
  <div class="product-info-card">
  <span class="product-category">${p.category}</span>
  <h3>${p.name}</h3>
  <p class="price">${p.price}</p>
  </div>
  </a>`;
}

function renderProducts(filter = "All", search = "") {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const q = search.trim().toLowerCase();

  const list = PRODUCTS.filter(p =>
    (filter === "All" || p.category === filter) &&
    (!q || `${p.name} ${p.category}`.toLowerCase().includes(q))
  );

  grid.innerHTML = list.map(productCard).join("");
  document.getElementById("emptyState").hidden = list.length !== 0;
}

document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  renderProducts();

  const burger = document.getElementById("burgerBtn");
  const panel = document.getElementById("mobilePanel");

  if (burger && panel) {

    burger.addEventListener("click", () => {
      const open = panel.classList.toggle("open");

      burger.classList.toggle("active", open);
      burger.setAttribute("aria-expanded", String(open));
    });

    panel.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => {
        panel.classList.remove("open");
        burger.classList.remove("active");
        burger.setAttribute("aria-expanded", "false");
      })
    );

    document.addEventListener("click", (event) => {
      if (!panel.contains(event.target) && !burger.contains(event.target)) {
        panel.classList.remove("open");
        burger.classList.remove("active");
        burger.setAttribute("aria-expanded", "false");
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        panel.classList.remove("open");
        burger.classList.remove("active");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ===================[back button]===================
  const backBtn = document.getElementById("back-btn")

  backBtn.addEventListener("click", () => {
    panel.classList.remove("open");
    burger.classList.remove("active");
  })

  document.querySelectorAll(".filter").forEach(btn =>
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      renderProducts(
        btn.dataset.filter,
        document.getElementById("searchInput")?.value || ""
      );
    })
  );

  document.querySelectorAll(".category-card").forEach(card =>
    card.addEventListener("click", () => {
      const filter = card.dataset.filter;

      document.querySelectorAll(".filter").forEach(b =>
        b.classList.toggle("active", b.dataset.filter === filter)
      );

      setTimeout(() => renderProducts(filter), 0);
    })
  );

  const searchPanel = document.getElementById("searchPanel");
  const searchBtn = document.getElementById("searchBtn");
  const closeSearch = document.getElementById("closeSearch");
  const searchInput = document.getElementById("searchInput");

  if (searchBtn && searchPanel) {
    searchBtn.addEventListener("click", () => {
      searchPanel.classList.add("open");
      searchInput.focus();
    });
  }

  if (closeSearch) {
    closeSearch.addEventListener("click", () =>
      searchPanel.classList.remove("open")
    );
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
      document.querySelector('.filter[data-filter="All"]').classList.add("active");

      renderProducts("All", searchInput.value);
    });
  }

  const form = document.getElementById("newsletterForm");
  const note = document.getElementById("formNote");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      note.textContent = "Thanks — you're on the list.";
      form.reset();
    });
  }
});
// Izbornik na mobitelu
document.addEventListener("click", (e) => {
  const t = e.target.closest(".menu-toggle");
  if (t) document.querySelector(".menu").classList.toggle("open");
});

// Godina u podnožju
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

// ---------- Stranice kategorija ----------
const grid = document.getElementById("products");
if (grid && typeof PRODUCTS !== "undefined") {
  const cat = grid.dataset.category;
  const all = PRODUCTS[cat] || [];
  const groups = (typeof GROUPS !== "undefined" && GROUPS[cat]) || null;
  let current = groups ? groups[0][0] : null;

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const render = () => {
  const list = groups && current !== "sve" ? all.filter((p) => p.group === current) : all;
  grid.innerHTML = list.map((p) => `
    <article class="product" data-id="${esc(p.id)}"><div class="product-inner">
      <div class="product-media">
      <div class="product-gallery">
        ${p.images && p.images.length
          ? `<img src="${esc(p.images[0])}" alt="${esc(p.name)}" loading="lazy" class="main-img">`
          : `<div class="ph">Fotografija proizvoda<br>uskoro</div>`}
      </div>
      ${p.images && p.images.length > 1
        ? `<div class="thumbs">${p.images.map((src, i) => `<img src="${esc(src)}" alt="" class="${i === 0 ? "active" : ""}" loading="lazy">`).join("")}</div>`
        : ""}
      </div>
      <div class="product-body">
        <h3>${esc(p.name)}</h3>
        <div class="product-sub">${esc(p.sub || "")}</div>
        <p class="desc">${esc(p.desc || "")}</p>
        ${p.features && p.features.length ? `<ul class="features">${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
        ${(p.options || []).map((g, gi) => `
          <div class="option-group" data-label="${esc(g.label)}">
            <label>${esc(g.label)}</label>
            ${typeof SWATCHES !== "undefined" && g.values.every((v) => SWATCHES[v])
              ? `<div class="chips swatches">${g.values.map((v) => {
                  const sw = SWATCHES[v];
                  const st = sw.img ? `background-image:url('${esc(sw.img)}')` : `background:${sw.color}`;
                  return `<button type="button" class="chip swatch" aria-pressed="false" title="${esc(v)}" data-value="${esc(v)}"><span class="sw" style="${st}"></span><span class="sw-name">${esc(v)}</span></button>`;
                }).join("")}</div><div class="sw-preview" hidden></div>`
              : g.values.length > 5 && !g.multi
              ? `<select class="opt-select" aria-label="${esc(g.label)}"><option value="">Odaberite…</option>${g.values.map((v) => `<option>${esc(v)}</option>`).join("")}</select>`
              : `<div class="chips${g.multi ? " multi" : ""}">${g.values.map((v) => `<button type="button" class="chip" aria-pressed="false">${esc(v)}</button>`).join("")}</div>`}
          </div>`).join("")}
        <button type="button" class="btn btn-dark btn-block inquire">Pošalji upit</button>
      </div>
    </div></article>`).join("");
  };

  if (groups) {
    const bar = document.createElement("div");
    bar.className = "group-tabs";
    bar.setAttribute("role", "tablist");
    const tabs = [...groups, ["sve", "Sve (" + all.length + ")"]];
    bar.innerHTML = tabs.map(([k, label]) => {
      const n = k === "sve" ? "" : ` <span>${all.filter((p) => p.group === k).length}</span>`;
      return `<button type="button" role="tab" class="group-tab${k === current ? " active" : ""}" data-group="${k}">${label}${n}</button>`;
    }).join("");
    grid.before(bar);
    bar.addEventListener("click", (e) => {
      const b = e.target.closest(".group-tab");
      if (!b) return;
      current = b.dataset.group;
      bar.querySelectorAll(".group-tab").forEach((t) => t.classList.toggle("active", t === b));
      render();
    });
  }
  render();

  grid.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (chip) {
      if (chip.parentElement.classList.contains("multi")) {
        chip.classList.toggle("selected");
      } else {
        chip.parentElement.querySelectorAll(".chip").forEach((c) => { c.classList.remove("selected"); c.setAttribute("aria-pressed", "false"); });
        chip.classList.add("selected");
      }
      chip.setAttribute("aria-pressed", chip.classList.contains("selected"));
      if (chip.classList.contains("swatch")) {
        const pv = chip.closest(".option-group").querySelector(".sw-preview");
        const sw = SWATCHES[chip.dataset.value];
        pv.hidden = false;
        pv.innerHTML = `<span class="sw-big" style="${sw.img ? `background-image:url('${sw.img}')` : `background:${sw.color}`}"></span><span>${esc(chip.dataset.value)}</span>`;
      }
      return;
    }
    const th = e.target.closest(".thumbs img");
    if (th) {
      const card = th.closest(".product");
      card.querySelector(".main-img").src = th.src;
      card.querySelectorAll(".thumbs img").forEach((i) => i.classList.remove("active"));
      th.classList.add("active");
      return;
    }
    const btn = e.target.closest(".inquire");
    if (btn) openInquiry(btn.closest(".product"));
  });
}

// ---------- Prozor s formom za upit ----------
const modal = document.getElementById("inquiry-modal");

function openInquiry(card) {
  if (!modal) return;
  const name = card ? card.querySelector("h3").textContent : "Opći upit";
  const opts = card
    ? [...card.querySelectorAll(".option-group")].map((g) => {
        const sel = [...g.querySelectorAll(".chip.selected")].map((c) => c.dataset.value || c.textContent).join(", ");
        const dd = g.querySelector(".opt-select");
        const val = dd ? dd.value : sel;
        return `${g.dataset.label}: ${val || "nije odabrano"}`;
      })
    : [];
  modal.querySelector('[name="proizvod"]').value = name;
  modal.querySelector('[name="odabir"]').value = opts.join(" | ");
  modal.querySelector(".summary").innerHTML =
    `<strong>${name}</strong>${opts.length ? "<br>" + opts.join("<br>") : ""}`;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(() => modal.querySelector('[name="ime"]').focus(), 50);
}
function closeInquiry() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest(".modal-close")) closeInquiry();
  });
  document.addEventListener("keydown", (e) => e.key === "Escape" && closeInquiry());
  document.querySelectorAll("[data-open-inquiry]").forEach((b) => b.addEventListener("click", () => openInquiry(null)));
}

// ---------- Slider fotografija (Realizacije) ----------
document.querySelectorAll(".real-gallery.slider").forEach((box) => {
  const imgs = [...box.querySelectorAll("img")];
  if (imgs.length < 2) return;
  imgs.forEach((i) => (i.loading = "eager"));
  box.innerHTML = `
    <div class="slides"><div class="track"></div></div>
    <button type="button" class="slide-btn prev" aria-label="Prethodna fotografija">&#8249;</button>
    <button type="button" class="slide-btn next" aria-label="Sljedeća fotografija">&#8250;</button>
    <div class="slide-foot"><span class="slide-cap"></span><span class="slide-count"></span></div>
    <div class="dots"></div>`;
  const track = box.querySelector(".track");
  imgs.forEach((i) => { const f = document.createElement("figure"); f.appendChild(i); track.appendChild(f); });
  const dots = box.querySelector(".dots");
  imgs.forEach((_, k) => { const d = document.createElement("button"); d.type = "button"; d.setAttribute("aria-label", "Fotografija " + (k + 1)); dots.appendChild(d); });
  let idx = 0, timer = null;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const show = (n) => {
    idx = (n + imgs.length) % imgs.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.querySelectorAll("button").forEach((d, k) => d.classList.toggle("on", k === idx));
    box.querySelector(".slide-cap").textContent = imgs[idx].alt;
    box.querySelector(".slide-count").textContent = `${idx + 1} / ${imgs.length}`;
  };
  const play = () => { if (!reduce) { clearInterval(timer); timer = setInterval(() => show(idx + 1), 4500); } };
  const stop = () => clearInterval(timer);
  box.querySelector(".prev").onclick = () => { show(idx - 1); play(); };
  box.querySelector(".next").onclick = () => { show(idx + 1); play(); };
  dots.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { show([...dots.children].indexOf(b)); play(); } });
  box.addEventListener("mouseenter", stop);
  box.addEventListener("mouseleave", play);
  let x0 = null;
  box.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; stop(); }, { passive: true });
  box.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) show(idx + (dx < 0 ? 1 : -1));
    x0 = null; play();
  });
  box.tabIndex = 0;
  box.addEventListener("keydown", (e) => { if (e.key === "ArrowLeft") { show(idx - 1); play(); } if (e.key === "ArrowRight") { show(idx + 1); play(); } });
  show(0); play();
});

// ---------- Prije / poslije ----------
document.querySelectorAll(".ba").forEach((ba) => {
  const r = ba.querySelector(".ba-range");
  r.addEventListener("input", () => ba.style.setProperty("--pos", r.value + "%"));
});

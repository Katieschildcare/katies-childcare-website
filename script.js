// Bumped by tools/bump-version.ps1 on every update so browsers fetch fresh pictures.
const ASSET_VERSION = "202611271107";
const v = (path) => `${path}?v=${ASSET_VERSION}`;

// The contact form opens the visitor's email app with their message addressed here.
const CONTACT_EMAIL = "katieschildcare1977@gmail.com";

// Team members. Add a "role" to any person and it will show under their name.
const TEAM = [
  { first: "Katie",  last: "Peace",     img: "katie",      role: "Owner" },
  { first: "Emily",  last: "Tilbrook",  img: "emily",      role: "Room leader · Tiny Treasures" },
  { first: "Chloe",  last: "Day",       img: "chloe-day",  role: "Room leader · Little Gems" },
  { first: "Gemma",  last: "Dodd",      img: "gemma",      role: "Room leader · Shining Stars" },
  { first: "Kasey",  last: "Peace",     img: "kasey" },
  { first: "Chloe",  last: "Dack",      img: "chloe-dack" },
  { first: "Edwina", last: "Thorpe",    img: "edwina" },
  { first: "Maisie", last: "Gregory",   img: "maisie" },
  { first: "Megan",  last: "Mactavish", img: "megan" },
  { first: "Mylie",  last: "Hall",      img: "mylie" },
  { first: "Vikki",  last: "Fitch",     img: "vikki" },
];

// Nursery photos for the gallery. Put the image files in assets/gallery/ and list them here.
// "area" puts the photo under one of the filter buttons (see GALLERY_AREAS).
// The order here is the order under "All", and the first few show before "Show all photos".
const GALLERY_AREAS = [
  { id: "all",     label: "All" },
  { id: "baby",    label: "Baby room" },
  { id: "big",     label: "Big side" },
  { id: "outside", label: "Outside" },
  { id: "sensory", label: "Sensory & soft play" },
];
const GALLERY = [
  { area: "sensory", src: "assets/gallery/sensory-attic.jpg",      caption: "Sensory and movement attic", alt: "Attic playroom with a small trampoline, spinning seats, a rocker, a light box and a hanging sensory swing" },
  { area: "baby",    src: "assets/gallery/baby-full-view.jpg",     caption: "The baby room", alt: "Wide view of the bright baby room with grey carpet and low wooden play shelves" },
  { area: "outside", src: "assets/gallery/out-baby-nook-front.jpg", caption: "Outdoor baby nook", alt: "Covered wooden outdoor nook on artificial grass with cushions, a play mat, colourful ribbons and baby walkers" },
  { area: "big",     src: "assets/gallery/big-dinosaurs.jpg",      caption: "Dinosaur world", alt: "Small world dinosaur scene with plants, wooden shelves and toy dinosaurs on a green grass mat" },
  { area: "sensory", src: "assets/gallery/soft-play.jpg",          caption: "Soft play", alt: "Soft play area with a green tunnel, padded blocks and ride-on horse and dinosaur toys" },
  { area: "outside", src: "assets/gallery/out-lookout.jpg",        caption: "The lookout", alt: "Wooden climbing lookout with steps and coloured windows on artificial grass in the garden" },
  { area: "baby",    src: "assets/gallery/baby-den.jpg",           caption: "Cosy den", alt: "Soft den in the baby room with a grey canopy, cushions, a rug and a bookshelf" },
  { area: "big",     src: "assets/gallery/big-home-corner.jpg",    caption: "Home corner", alt: "Play kitchen with a toy oven, microwave, telephone and a table set with play food" },
  { area: "outside", src: "assets/gallery/out-water-tray.jpg",     caption: "Water tray", alt: "Outdoor water tray filled with toy sea animals, plants and a fishing net" },
  { area: "baby",    src: "assets/gallery/baby-animals.jpg",       caption: "Animals and nature shelf", alt: "Low wooden shelf with toy animals, wooden owls, baskets and natural objects" },
  { area: "baby",    src: "assets/gallery/baby-building.jpg",      caption: "Building and shapes", alt: "Wooden shelf of rainbow blocks, shape frames and baskets of building toys" },
  { area: "baby",    src: "assets/gallery/baby-home-corner.jpg",   caption: "Baby home corner", alt: "Wooden play kitchen and cotton-reel table and stools in the corner of the baby room" },
  { area: "baby",    src: "assets/gallery/baby-mirror-table.jpg",  caption: "Mirror table", alt: "Low wooden mirror table with black and white picture cards and wooden toys" },
  { area: "baby",    src: "assets/gallery/baby-music.jpg",         caption: "Music corner", alt: "Music corner with a drum, a xylophone table and shelves of instruments" },
  { area: "baby",    src: "assets/gallery/baby-7104.jpg",          caption: "Play shelves", alt: "Low wooden shelves with toys and a fabric activity tent on the baby room carpet" },
  { area: "baby",    src: "assets/gallery/baby-7105.jpg",          caption: "Road play mat", alt: "Road play mat on the carpet in front of a shelf of toys by the window" },
  { area: "baby",    src: "assets/gallery/baby-kitchen.jpg",       caption: "Baby room kitchen", alt: "Small grey kitchen with a sink, kettle and microwave in the baby room" },
  { area: "big",     src: "assets/gallery/big-art-area.jpg",       caption: "Art area", alt: "Art area with storage boxes, small stools, an alphabet poster and art supplies" },
  { area: "big",     src: "assets/gallery/big-dressing-up.jpg",    caption: "Dressing up", alt: "Wooden pallet dressing-up wall with bags, hats and flowers hanging from it" },
  { area: "big",     src: "assets/gallery/big-hairdressing.jpg",   caption: "Hairdressing salon", alt: "Role-play hairdressing table with a mirror, hairdryers, combs and sunglasses" },
  { area: "outside", src: "assets/gallery/out-baby-nook.jpg",      caption: "Inside the baby nook", alt: "Inside the outdoor nook: cushions, a zigzag rug, scarves and a wooden bowl" },
  { area: "outside", src: "assets/gallery/out-baby-nook-2.jpg",    caption: "Baby nook treasures", alt: "Pine cones, a basket of toys and colourful ribbons on a rug in the outdoor nook" },
  { area: "outside", src: "assets/gallery/out-stage.jpg",          caption: "The stage", alt: "Wooden outdoor stage with hanging spoons and a toy guitar" },
  { area: "outside", src: "assets/gallery/out-music.jpg",          caption: "Outdoor music wall", alt: "Rainbow chimes and hanging pots and pans for making music outside" },
  { area: "outside", src: "assets/gallery/out-discovery.jpg",      caption: "Discovery corner", alt: "Discovery area with pallet walls, a bug hotel and yellow tubes under a canopy" },
  { area: "outside", src: "assets/gallery/out-sand-kitchen.jpg",   caption: "Sand kitchen", alt: "Outdoor play kitchen with sand, pine cones and pans in a muffin tray" },
  { area: "outside", src: "assets/gallery/out-sand-kitchen-2.jpg", caption: "Cooking in the sand kitchen", alt: "Pots, pans and a tray of sand in the outdoor play kitchen" },
  { area: "outside", src: "assets/gallery/out-sand-pit.jpg",       caption: "Sand pit", alt: "Large blue sand pit with buckets and spades" },
  { area: "sensory", src: "assets/gallery/ball-pit.jpg",           caption: "Ball pit and climbing", alt: "Ball pit full of colourful balls next to soft climbing blocks and ramps" },
  { area: "sensory", src: "assets/gallery/sensory-den.jpg",        caption: "Our sensory den", alt: "Dark sensory den with colourful fairy lights, a bubble tube, a cosy chair and picture books" },
];
const GALLERY_PREVIEW = 9; // photos shown under "All" before "Show all photos"

// Parent reviews. Only use real quotes, with the parent's permission.
const REVIEWS = [
  { quote: "[Add a real quote from a parent here.]", name: "[Parent's first name]", detail: "[e.g. Mum of two]" },
  { quote: "[Add a real quote from a parent here.]", name: "[Parent's first name]", detail: "[e.g. Dad of one]" },
  { quote: "[Add a real quote from a parent here.]", name: "[Parent's first name]", detail: "[e.g. Mum of one]" },
];

document.documentElement.classList.add("js");

const tints = ["#DDEEFB", "#FFE1F1", "#E4F3D8", "#FFE6D6"];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// ---- Team grid (cartoon, with the real photo on hover or tap) ----
const camera = '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>';
const grid = document.getElementById("team-grid");
TEAM.forEach((p, i) => {
  const name = esc(`${p.first} ${p.last}`);
  const li = document.createElement("li");
  li.className = "member reveal";
  li.style.setProperty("--bg", tints[i % tints.length]);
  li.style.setProperty("--tilt", (i % 2 ? 0.6 : -0.6) + "deg");
  li.style.setProperty("--d", (i % 4) * 0.05 + "s");
  li.innerHTML = `
    <div class="member-photo">
      <img src="${v(`assets/team/${p.img}.jpg`)}" alt="Cartoon portrait of ${name}" width="640" height="854" loading="lazy">
      <img class="real" src="${v(`assets/team-real/${p.img}.jpg`)}" alt="Photo of ${name}" width="600" height="800" loading="lazy">
      <button class="photo-toggle" type="button" aria-pressed="false" aria-label="Show real photo of ${name}">${camera}</button>
    </div>
    <div class="member-body">
      <p class="member-name">${esc(p.first)}</p>
      <p class="member-surname">${esc(p.last)}</p>
      ${p.role ? `<p class="member-role">${esc(p.role)}</p>` : ""}
    </div>`;
  const btn = li.querySelector(".photo-toggle");
  btn.addEventListener("click", () => {
    const on = btn.getAttribute("aria-pressed") !== "true";
    btn.setAttribute("aria-pressed", String(on));
    li.classList.toggle("show-real", on);
  });
  grid.appendChild(li);
});

// ---- Gallery ----
const gallery = document.getElementById("gallery-grid");
const photoIcon = '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5-5-8 8"/></svg>';
const filters = document.getElementById("gallery-filters");
const moreBtn = document.getElementById("gallery-more");
let area = "all", expanded = false, shown = GALLERY;

function renderGallery(first) {
  shown = area === "all" ? GALLERY : GALLERY.filter((g) => g.area === area);
  const visible = area === "all" && !expanded ? shown.slice(0, GALLERY_PREVIEW) : shown;
  gallery.innerHTML = "";
  const tiles = visible.length ? visible : Array.from({ length: 5 }, () => null);
  tiles.forEach((g, i) => {
    const li = document.createElement("li");
    li.className = first ? "reveal" : "";
    li.style.setProperty("--soft", tints[i % tints.length]);
    li.style.setProperty("--d", (i % 4) * 0.05 + "s");
    li.innerHTML = g
      ? `<button class="tile" type="button" data-i="${i}" aria-label="View larger: ${esc(g.caption)}">
           <img src="${esc(v(g.src))}" alt="${esc(g.alt)}" loading="lazy">
           <span class="tile-cap" aria-hidden="true">${esc(g.caption)}</span>
         </button>`
      : `<div class="placeholder">${photoIcon}<span>[Nursery photo]</span></div>`;
    gallery.appendChild(li);
  });
  const hidden = shown.length - visible.length;
  moreBtn.hidden = hidden <= 0;
  moreBtn.textContent = `Show all ${shown.length} photos`;
}

GALLERY_AREAS.forEach((a) => {
  const count = a.id === "all" ? GALLERY.length : GALLERY.filter((g) => g.area === a.id).length;
  if (!count) return;
  const b = document.createElement("button");
  b.type = "button";
  b.className = "chip";
  b.dataset.area = a.id;
  b.setAttribute("aria-pressed", String(a.id === area));
  b.innerHTML = `${esc(a.label)} <span class="chip-count">${count}</span>`;
  filters.appendChild(b);
});
filters.addEventListener("click", (e) => {
  const b = e.target.closest(".chip");
  if (!b || b.dataset.area === area) return;
  area = b.dataset.area;
  filters.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
  renderGallery(false);
});
moreBtn.addEventListener("click", () => {
  const next = gallery.children.length;
  expanded = true;
  renderGallery(false);
  const t = gallery.children[next] && gallery.children[next].querySelector(".tile");
  if (t) t.focus({ preventScroll: true });
});
renderGallery(true);

// ---- Photo viewer ----
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
const lbCap = document.getElementById("lightbox-cap");
let lbIndex = 0, lbOpener = null;
lbImg.addEventListener("load", () => lbImg.classList.toggle("small", lbImg.naturalWidth < 700 && lbImg.naturalHeight < 700));
function showPhoto(i) {
  lbIndex = (i + shown.length) % shown.length;
  const g = shown[lbIndex];
  lbImg.src = v(g.src); lbImg.alt = g.alt;
  lbCap.textContent = `${g.caption} · ${lbIndex + 1} of ${shown.length}`;
}
gallery.addEventListener("click", (e) => {
  const t = e.target.closest(".tile");
  if (!t || !lb.showModal) return;
  lbOpener = t;
  showPhoto(Number(t.dataset.i));
  lb.showModal();
});
lb.querySelector(".lb-close").addEventListener("click", () => lb.close());
lb.querySelector(".lb-prev").addEventListener("click", () => showPhoto(lbIndex - 1));
lb.querySelector(".lb-next").addEventListener("click", () => showPhoto(lbIndex + 1));
lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
lb.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") showPhoto(lbIndex - 1);
  if (e.key === "ArrowRight") showPhoto(lbIndex + 1);
});
lb.addEventListener("close", () => { if (lbOpener) lbOpener.focus(); });

// Only one video plays at a time
const videos = document.querySelectorAll(".video-card video");
videos.forEach((v) => v.addEventListener("play", () => videos.forEach((o) => { if (o !== v) o.pause(); })));

// ---- Reviews ----
const reviews = document.getElementById("reviews");
REVIEWS.forEach((r, i) => {
  const fig = document.createElement("figure");
  fig.className = "review reveal";
  fig.style.setProperty("--soft", ["#FFE1F1", "#DDEEFB", "#E4F3D8"][i % 3]);
  fig.style.setProperty("--d", i * 0.06 + "s");
  fig.innerHTML = `<blockquote>${esc(r.quote)}</blockquote><figcaption>${esc(r.name)} · ${esc(r.detail)}</figcaption>`;
  reviews.appendChild(fig);
});

// ---- Mobile nav ----
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("nav-menu");
function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menu.classList.toggle("open", open);
}
toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu.classList.contains("open")) { setMenu(false); toggle.focus(); }
});

// ---- Header border on scroll ----
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---- Reveal on scroll ----
const io = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" })
  : null;
document.querySelectorAll(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));

// ---- Contact form ----
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const rules = {
  name:    (v) => (v.trim() ? "" : "Please tell us your name."),
  email:   (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Please enter an email address like name@example.com."),
  message: (v) => (v.trim() ? "" : "Please add a short message so we know how to help."),
};
function check(field) {
  const msg = rules[field.name](field.value);
  field.setAttribute("aria-invalid", msg ? "true" : "false");
  document.getElementById(field.id + "-err").textContent = msg;
  return !msg;
}
Object.keys(rules).forEach((n) => form.elements[n].addEventListener("blur", (e) => check(e.target)));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fields = Object.keys(rules).map((n) => form.elements[n]);
  const firstBad = fields.find((f) => !check(f));
  if (firstBad) { firstBad.focus(); return; }

  const d = Object.fromEntries(new FormData(form));
  const body = [
    `Name: ${d.name}`, `Email: ${d.email}`,
    d.phone ? `Phone: ${d.phone}` : "", d.age ? `Child's age: ${d.age}` : "",
    "", d.message,
  ].filter((l, i) => l || i === 4).join("\n");
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Enquiry from " + d.name)}&body=${encodeURIComponent(body)}`;
  status.textContent = "Thanks! Your email app should open with your message ready to send.";
});

document.getElementById("year").textContent = new Date().getFullYear();

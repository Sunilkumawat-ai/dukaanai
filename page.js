const TITLE = "DukaanAI: Turn a product photo into a ready-to-post listing";
const DESC =
  "Upload one product photo and get a clean title, description, key points and hashtags in English, Hindi or Hinglish. Built for small sellers who list from their phone.";

const LOGO =
  '<svg class="mark" viewBox="0 0 32 32" aria-hidden="true"><rect class="mk-bg" width="32" height="32" rx="8"/>' +
  '<path class="mk-fg" d="M7 12.5 9 8h14l2 4.5a3 3 0 0 1-5 1.6 3 3 0 0 1-4 0 3 3 0 0 1-4 0 3 3 0 0 1-5-1.6Z"/>' +
  '<path class="mk-fg" opacity=".6" d="M9 16.5h14V24H9z"/></svg>';

const TICK =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

const CAMERA =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13" r="3.5"/></svg>';

const PEN =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l1-4L16.5 4.5a2 2 0 0 1 3 3L8 19l-4 1Z"/><path d="M14 7l3 3"/></svg>';

const SEND =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 3 10 14"/><path d="M21 3l-7 18-4-7-7-4 18-7Z"/></svg>';

const EYE =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="2.8"/></svg>';

const PHONE =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M11 18.5h2"/></svg>';

const GLOBE =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.6 3.9 5.6 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.6-3.9-9s1.3-6.4 3.9-9Z"/></svg>';

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function renderPage(origin, contactHref) {
  const o = esc(origin);
  const cta = contactHref
    ? '<section class="cta-band" aria-labelledby="t-cta"><div><h2 id="t-cta">Need listings for your whole shop?</h2>' +
      "<p>Send us your product photos on WhatsApp and we will send back ready-to-post listings.</p></div>" +
      '<a class="btn" href="' + esc(contactHref) + '" target="_blank" rel="noopener">Chat on WhatsApp</a></section>'
    : "";

  const ld = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DukaanAI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: DESC,
    inLanguage: ["en", "hi"],
    url: origin + "/",
  }).replace(/</g, "\\u003c");
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${TITLE}</title>
<meta name="description" content="${esc(DESC)}">
<meta name="robots" content="index,follow">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#F4EEE2" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#12100C" media="(prefers-color-scheme: dark)">
<link rel="canonical" href="${o}/">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:type" content="website">
<meta property="og:site_name" content="DukaanAI">
<meta property="og:title" content="${esc(TITLE)}">
<meta property="og:description" content="${esc(DESC)}">
<meta property="og:url" content="${o}/">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${esc(TITLE)}">
<meta name="twitter:description" content="${esc(DESC)}">
<link rel="stylesheet" href="/app.css">
<script type="application/ld+json">${ld}</script>
</head>
<body>
<div class="wrap">
<header class="top">
  <a class="logo" href="/" aria-label="DukaanAI home">${LOGO}<span>DukaanAI</span></a>
  <nav class="nav" aria-label="Main">
    <a class="plain" href="#how">How it works</a>
    <a class="plain" href="#faq">FAQ</a>
    <a class="btn" href="#tool">Try it free</a>
  </nav>
</header>

<main>
<section class="hero" aria-labelledby="t-hero">
  <div class="hero-copy rise">
    <span class="eyebrow">For small sellers</span>
    <h1 id="t-hero">Turn a product photo into a listing you can post today.</h1>
    <p class="lede">Upload one photo, add a few details, and get a clean title, description, key points and hashtags. Choose English, Hindi or Hinglish.</p>
    <ul class="checks">
      <li>${TICK}<span>Describes only what is in your photo or what you tell it. No invented sizes or claims.</span></li>
      <li>${TICK}<span>Formatted for WhatsApp, so you can copy it and send it straight away.</span></li>
      <li>${TICK}<span>Made for phones. Photos are resized on your device to save data.</span></li>
    </ul>
  </div>

  <div class="tool rise d1" id="tool">
    <h2>Create your listing</h2>
    <p class="sub">Free during early access.</p>
    <form id="form" novalidate>
      <div class="field">
        <label for="photo">Product photo</label>
        <label class="drop" for="photo">
          ${CAMERA}
          <strong id="dropTitle">Add a product photo</strong>
          <span id="dropSub">Tap to take a photo or choose one</span>
        </label>
        <input class="sr" id="photo" type="file" accept="image/*">
        <img id="preview" class="preview" alt="Preview of your product photo" hidden>
      </div>

      <div class="field">
        <label for="note">Details <span class="hint">Optional. Material, sizes, colours, anything buyers ask.</span></label>
        <textarea id="note" maxlength="300" rows="3" placeholder="Example: handmade cotton kurta, sizes M, L, XL"></textarea>
      </div>

      <div class="field">
        <label for="price">Price <span class="hint">Optional. Shown exactly as you type it.</span></label>
        <input type="text" id="price" maxlength="30" placeholder="Example: Rs 499" autocomplete="off">
      </div>

      <fieldset class="field">
        <legend>Listing language</legend>
        <div class="seg">
          <label><input class="sr" type="radio" name="lang" value="english" checked><span>English</span></label>
          <label><input class="sr" type="radio" name="lang" value="hindi"><span>Hindi</span></label>
          <label><input class="sr" type="radio" name="lang" value="hinglish"><span>Hinglish</span></label>
        </div>
      </fieldset>

      <div class="field">
        <label for="code">Early access code <span class="hint">Ask the owner for a code.</span></label>
        <input type="password" id="code" maxlength="64" autocomplete="off" placeholder="Enter your code">
      </div>

      <button type="submit" class="btn block go" id="go"><span class="spin" id="goSpin" hidden></span><span id="goText">Create my listing</span></button>
      <div class="bar" id="bar" hidden><i></i></div>
      <p class="status" id="status" role="status" aria-live="polite"></p>
    </form>

    <div class="result" id="result" hidden>
      <h3>Your listing</h3>
      <div class="bubble" id="bubble"></div>
      <p class="tags" id="tags"></p>
      <div class="tips" id="tips" hidden><b>Add these for a stronger listing</b><ul id="tipList"></ul></div>
      <div class="actions">
        <button type="button" class="btn small wide" id="copy">Copy listing</button>
        <button type="button" class="btn small line" id="share">Send on WhatsApp</button>
        <button type="button" class="btn small line" id="copyTags">Copy hashtags</button>
        <button type="button" class="btn small line" id="again">New product</button>
      </div>
      <p class="note">Always check size, material and price before you post. AI can make mistakes.</p>
    </div>
  </div>
</section>

<section class="band" id="how" aria-labelledby="t-how">
  <h2 id="t-how">How it works</h2>
  <p class="intro">Three steps, about twenty seconds, and nothing to install.</p>
  <div class="grid3">
    <div class="card"><div class="ico">${CAMERA}</div><h3>1. Add a photo</h3><p>Take a picture of your product or pick one from your gallery. Any phone photo works.</p></div>
    <div class="card"><div class="ico">${PEN}</div><h3>2. Add details</h3><p>Type the price and anything buyers should know. Skip it if you are in a hurry.</p></div>
    <div class="card"><div class="ico">${SEND}</div><h3>3. Copy and post</h3><p>Copy the listing or send it directly to WhatsApp. Edit anything before you post.</p></div>
  </div>
</section>

<section class="band" aria-labelledby="t-why">
  <h2 id="t-why">Built to be trusted</h2>
  <p class="intro">A listing that promises too much costs you returns and reviews. DukaanAI is built to stay honest.</p>
  <div class="grid3">
    <div class="card"><div class="ico">${EYE}</div><h3>Honest by design</h3><p>It writes only what the photo shows or what you tell it. It does not invent fabric, sizes or certifications.</p></div>
    <div class="card"><div class="ico">${GLOBE}</div><h3>Your language</h3><p>Write for your buyers in English, Hindi or Hinglish, using everyday words instead of stiff translations.</p></div>
    <div class="card"><div class="ico">${PHONE}</div><h3>Made for phones</h3><p>Big tap targets, a lightweight page and photos resized on your device so it works on mobile data.</p></div>
  </div>
</section>

${cta}

<section class="band" id="faq" aria-labelledby="t-faq">
  <h2 id="t-faq">Questions</h2>
  <p class="intro">Short answers to what sellers ask first.</p>
  <details><summary>What does it cost?</summary><p>Early access is free. We will announce pricing before we charge anyone.</p></details>
  <details><summary>How accurate is the listing?</summary><p>It sticks to what is visible in your photo and what you type. You should still check size, material and price before posting, because AI can make mistakes.</p></details>
  <details><summary>Are my photos stored?</summary><p>This site does not keep your photo or your listing. To write the listing, your photo is sent to Google's Gemma model through Google's API, so Google's terms apply to that step.</p></details>
  <details><summary>Which languages can I use?</summary><p>English, Hindi in Devanagari script, and Hinglish, which is Hindi written in English letters.</p></details>
  <details><summary>Can I use it for Amazon, Etsy or Meesho?</summary><p>Today it creates a WhatsApp-style listing that you can adapt. Marketplace formats are planned.</p></details>
</section>
</main>

<footer>
  <div>&copy; 2026 DukaanAI. Powered by Gemma, an open-weight AI model.</div>
  <div>Built for the Hacktoberfest 2026 Open-Source AI Challenge.</div>
</footer>
</div>
<script src="/app.js" defer></script>
</body></html>`;
}

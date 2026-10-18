export default String.raw`(function () {
  "use strict";
  function $(id) { return document.getElementById(id); }
  var imgData = "";
  var lastMsg = "";
  var lastTags = "";
  var busy = false;
  var toastTimer = null;

  try { $("code").value = localStorage.getItem("dcode") || ""; } catch (e) {}

  function toast(text) {
    var old = document.querySelector(".toast");
    if (old) old.remove();
    var t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    t.textContent = text;
    document.body.appendChild(t);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.remove(); }, 1800);
  }

  function setStatus(text, cls) {
    var s = $("status");
    s.textContent = text;
    s.className = "status" + (cls ? " " + cls : "");
  }

  function setBusy(b) {
    busy = b;
    $("go").disabled = b;
    $("goSpin").hidden = !b;
    $("goText").textContent = b ? "Writing your listing..." : "Create my listing";
    $("bar").hidden = !b;
  }

  function copyText(text, label) {
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
      toast(label + " copied");
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { toast(label + " copied"); }, fallback);
    } else {
      fallback();
    }
  }

  function renderBubble(el, text) {
    while (el.firstChild) el.removeChild(el.firstChild);
    var parts = String(text).split("*");
    for (var i = 0; i < parts.length; i++) {
      if (!parts[i]) continue;
      if (i % 2 === 1 && parts.length % 2 === 1) {
        var b = document.createElement("strong");
        b.textContent = parts[i];
        el.appendChild(b);
      } else {
        el.appendChild(document.createTextNode(parts[i]));
      }
    }
  }

  function loadPhoto(file) {
    if (!file) return;
    if (file.type.indexOf("image/") !== 0) { setStatus("Please choose a photo file.", "err"); return; }
    if (file.size > 25 * 1024 * 1024) { setStatus("That photo is too large. Please choose a smaller one.", "err"); return; }
    var reader = new FileReader();
    reader.onload = function () {
      var img = new Image();
      img.onload = function () {
        var scale = Math.min(1, 1024 / Math.max(img.width, img.height));
        var c = document.createElement("canvas");
        c.width = Math.max(1, Math.round(img.width * scale));
        c.height = Math.max(1, Math.round(img.height * scale));
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        var q = 0.85;
        var data = c.toDataURL("image/jpeg", q);
        while (data.length > 3300000 && q > 0.4) {
          q -= 0.15;
          data = c.toDataURL("image/jpeg", q);
        }
        imgData = data;
        var p = $("preview");
        p.src = data;
        p.hidden = false;
        $("dropTitle").textContent = "Change photo";
        $("dropSub").textContent = "Photo ready";
        setStatus("", "");
      };
      img.onerror = function () { setStatus("We could not open that photo. Please try another one.", "err"); };
      img.src = reader.result;
    };
    reader.onerror = function () { setStatus("We could not read that photo.", "err"); };
    reader.readAsDataURL(file);
  }

  $("photo").addEventListener("change", function (e) { loadPhoto(e.target.files[0]); });

  function selectedLang() {
    var r = document.querySelector('input[name="lang"]:checked');
    return r ? r.value : "english";
  }
  function render(j, secs) {
    lastMsg = String(j.message || "");
    lastTags = (j.tags || []).join(" ");
    renderBubble($("bubble"), lastMsg);
    $("tags").textContent = lastTags;
    $("tags").hidden = !lastTags;
    var list = $("tipList");
    while (list.firstChild) list.removeChild(list.firstChild);
    var miss = j.missing || [];
    for (var i = 0; i < miss.length; i++) {
      var li = document.createElement("li");
      li.textContent = miss[i];
      list.appendChild(li);
    }
    $("tips").hidden = miss.length === 0;
    $("result").hidden = false;
    setStatus("Ready in " + secs + " seconds.", "ok");
    $("result").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  $("form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (busy) return;
    if (!imgData) { setStatus("Please add a product photo first.", "err"); return; }
    var code = $("code").value.trim();
    if (!code) { setStatus("Please enter your early access code.", "err"); return; }
    try { localStorage.setItem("dcode", code); } catch (er) {}
    setBusy(true);
    setStatus("", "");
    var started = Date.now();
    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, 70000);
    fetch("/api/listing", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        image: imgData,
        note: $("note").value,
        price: $("price").value,
        language: selectedLang(),
        code: code
      }),
      signal: ctrl.signal
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        return { ok: r.ok, j: j };
      });
    }).then(function (res) {
      clearTimeout(timer);
      setBusy(false);
      if (!res.ok) { setStatus(res.j.error || "Something went wrong. Please try again.", "err"); return; }
      render(res.j, Math.round((Date.now() - started) / 1000));
    }).catch(function () {
      clearTimeout(timer);
      setBusy(false);
      setStatus("Network problem or time out. Please try again.", "err");
    });
  });

  $("copy").addEventListener("click", function () { copyText(lastMsg, "Listing"); });
  $("copyTags").addEventListener("click", function () { copyText(lastTags, "Hashtags"); });
  $("share").addEventListener("click", function () {
    window.open("https://wa.me/?text=" + encodeURIComponent(lastMsg), "_blank", "noopener");
  });
  $("again").addEventListener("click", function () {
    imgData = "";
    $("photo").value = "";
    $("preview").hidden = true;
    $("note").value = "";
    $("price").value = "";
    $("dropTitle").textContent = "Add a product photo";
    $("dropSub").textContent = "Tap to take a photo or choose one";
    $("result").hidden = true;
    setStatus("", "");
    $("tool").scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
`;

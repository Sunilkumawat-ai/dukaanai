export default String.raw`:root{
  color-scheme:light dark;
  --paper:#F4EEE2;
  --surface:#FFFCF6;
  --sunk:#EDE5D3;
  --ink:#1E1A14;
  --muted:#5F574A;
  --line:#DDD1BC;
  --brand:#0F4C47;
  --on-brand:#FFFFFF;
  --brand-soft:#DDEBE5;
  --cta:#E8940F;
  --cta-hover:#D2830A;
  --cta-ink:#1E1A14;
  --ok:#1E6B4A;
  --err:#A8321C;
  --shadow:0 1px 2px rgba(30,26,20,.06),0 10px 30px rgba(30,26,20,.07);
  --serif:"Iowan Old Style","Palatino Linotype",Palatino,"Noto Serif",Georgia,serif;
  --sans:system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans","Noto Sans Devanagari",sans-serif;
}
@media (prefers-color-scheme:dark){
  :root{
    --paper:#12100C;
    --surface:#1B1812;
    --sunk:#15120D;
    --ink:#F3ECDF;
    --muted:#B5AA96;
    --line:#342D21;
    --brand:#6CC8BA;
    --on-brand:#0B1F1D;
    --brand-soft:#17302D;
    --cta:#F0A62B;
    --cta-hover:#F8B84A;
    --cta-ink:#1A1408;
    --ok:#74D3A4;
    --err:#FF9C86;
    --shadow:0 1px 2px rgba(0,0,0,.4),0 10px 30px rgba(0,0,0,.35);
  }
}
*{box-sizing:border-box}
[hidden]{display:none!important}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);font-size:16px;line-height:1.55;-webkit-font-smoothing:antialiased}
h1,h2,h3{font-family:var(--serif);font-weight:700;line-height:1.15;letter-spacing:-.015em;margin:0}
p{margin:0}
a{color:var(--brand)}
.wrap{max-width:1080px;margin:0 auto;padding:0 20px}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
:focus-visible{outline:3px solid var(--brand);outline-offset:2px;border-radius:6px}

.top{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 0}
.logo{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--ink);font-family:var(--serif);font-weight:700;font-size:21px;letter-spacing:-.01em}
.mark{width:34px;height:34px;flex:none}
.mk-bg{fill:var(--brand)}
.mk-fg{fill:var(--on-brand)}
.nav{display:flex;align-items:center;gap:20px;font-size:15px}
.nav a.plain{color:var(--muted);text-decoration:none;font-weight:500}
.nav a.plain:hover{color:var(--ink)}
.nav .btn{padding:9px 16px;font-size:15px;min-height:40px}

.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:50px;padding:12px 20px;border:0;border-radius:12px;font:inherit;font-weight:700;font-size:16px;cursor:pointer;text-decoration:none;background:var(--cta);color:var(--cta-ink);transition:background .15s,transform .1s,box-shadow .15s}
.btn:hover{background:var(--cta-hover)}
.btn:active{transform:scale(.98)}
.btn:disabled{opacity:.7;cursor:progress}
.btn.block{width:100%}
.btn.line{background:transparent;color:var(--ink);border:1.5px solid var(--line)}
.btn.line:hover{background:var(--sunk);border-color:var(--muted)}
.btn.small{min-height:44px;padding:10px 16px;font-size:15px}

.hero{display:grid;gap:28px;padding:12px 0 40px}
.eyebrow{display:inline-block;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--brand);margin-bottom:14px}
.hero h1{font-size:clamp(34px,8.2vw,54px)}
.lede{margin-top:16px;font-size:18px;color:var(--muted);max-width:34em}
.checks{list-style:none;margin:22px 0 0;padding:0;display:grid;gap:10px}
.checks li{display:flex;gap:10px;align-items:flex-start;font-size:15.5px}
.checks svg{flex:none;margin-top:3px;width:18px;height:18px;stroke:var(--ok);fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}

.tool{background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:22px;box-shadow:var(--shadow)}
.tool h2{font-size:24px;margin-bottom:4px}
.tool .sub{color:var(--muted);font-size:15px;margin-bottom:6px}
.field{margin-top:18px}
.field>label:not(.drop),.field>legend{display:block;font-weight:600;font-size:15px;margin:0 0 7px;padding:0}
.hint{display:block;font-weight:400;color:var(--muted);font-size:13.5px;margin-top:2px}
fieldset{border:0;margin:0;padding:0;min-width:0}
input[type=text],input[type=password],textarea{width:100%;font:inherit;font-size:16px;color:var(--ink);background:var(--paper);border:1.5px solid var(--line);border-radius:12px;padding:13px 14px;min-height:50px}
textarea{resize:vertical;min-height:84px}
input::placeholder,textarea::placeholder{color:var(--muted);opacity:.75}
input:focus,textarea:focus{border-color:var(--brand);outline:none;box-shadow:0 0 0 3px var(--brand-soft)}

.drop{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;text-align:center;min-height:132px;padding:18px;border:2px dashed var(--line);border-radius:14px;background:var(--paper);cursor:pointer;transition:border-color .15s,background .15s}
.drop:hover,.drop:focus-within{border-color:var(--brand);background:var(--brand-soft)}
.drop svg{width:30px;height:30px;stroke:var(--brand);fill:none;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
.drop strong{font-size:16px}
.drop span{font-size:13.5px;color:var(--muted)}
.preview{display:block;width:100%;max-height:340px;object-fit:contain;margin-top:12px;border-radius:12px;background:var(--sunk);border:1px solid var(--line)}

.seg{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;padding:5px;background:var(--sunk);border-radius:13px;border:1px solid var(--line)}
.seg label{margin:0;display:block}
.seg span{display:flex;align-items:center;justify-content:center;min-height:44px;border-radius:9px;font-weight:600;font-size:15px;cursor:pointer;color:var(--muted);transition:background .15s,color .15s}
.seg input:checked+span{background:var(--brand);color:var(--on-brand);box-shadow:0 1px 3px rgba(0,0,0,.2)}
.seg input:focus-visible+span{outline:3px solid var(--brand);outline-offset:2px}

.go{margin-top:22px}
.status{min-height:22px;margin-top:12px;font-size:14.5px;color:var(--muted)}
.status.err{color:var(--err);font-weight:600}
.status.ok{color:var(--ok);font-weight:600}
.bar{height:4px;border-radius:4px;background:var(--sunk);overflow:hidden;margin-top:14px}
.bar i{display:block;height:100%;width:38%;background:var(--cta);border-radius:4px;animation:slide 1.1s ease-in-out infinite}
@keyframes slide{0%{transform:translateX(-110%)}100%{transform:translateX(280%)}}
.spin{width:18px;height:18px;border:3px solid currentColor;border-right-color:transparent;border-radius:50%;animation:rot .75s linear infinite}
@keyframes rot{to{transform:rotate(360deg)}}
.result{margin-top:22px;padding-top:22px;border-top:1px solid var(--line);animation:rise .4s ease both}
.result h3{font-size:20px;margin-bottom:12px}
.bubble{background:var(--brand-soft);border:1px solid var(--line);border-radius:4px 16px 16px 16px;padding:16px 18px;font-size:16.5px;line-height:1.6;white-space:pre-wrap;word-break:break-word}
.bubble strong{font-weight:700}
.tags{margin-top:12px;font-size:14.5px;color:var(--muted);word-break:break-word}
.tips{margin-top:14px;padding:12px 14px;border-radius:12px;background:var(--sunk);font-size:14.5px}
.tips b{display:block;margin-bottom:4px}
.tips ul{margin:0;padding-left:20px}
.actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px}
.actions .wide{grid-column:1/-1}
.note{margin-top:14px;font-size:13.5px;color:var(--muted)}

.band{padding:44px 0;border-top:1px solid var(--line)}
.band h2{font-size:clamp(26px,5.6vw,36px);margin-bottom:10px}
.band .intro{color:var(--muted);font-size:17px;max-width:36em;margin-bottom:26px}
.grid3{display:grid;gap:14px}
.card{background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:20px}
.card h3{font-size:19px;margin:12px 0 6px}
.card p{color:var(--muted);font-size:15.5px}
.card .ico{width:44px;height:44px;border-radius:12px;background:var(--brand-soft);display:flex;align-items:center;justify-content:center}
.card .ico svg{width:24px;height:24px;stroke:var(--brand);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.cta-band{margin:8px 0 48px;padding:28px 22px;border-radius:20px;background:var(--brand);color:var(--on-brand)}
.cta-band h2{font-size:26px;margin-bottom:8px}
.cta-band p{opacity:.92;margin-bottom:16px}
.cta-band .btn{background:var(--cta);color:var(--cta-ink)}

details{border-top:1px solid var(--line);padding:4px 0}
details:last-of-type{border-bottom:1px solid var(--line)}
summary{cursor:pointer;font-weight:600;font-size:17px;padding:14px 0;list-style:none;display:flex;justify-content:space-between;gap:12px;align-items:center}
summary::-webkit-details-marker{display:none}
summary::after{content:"+";font-size:24px;line-height:1;color:var(--brand);flex:none}
details[open] summary::after{content:"\2212"}
details p{color:var(--muted);padding:0 0 16px;max-width:42em}

footer{border-top:1px solid var(--line);padding:26px 0 40px;color:var(--muted);font-size:14px;display:grid;gap:6px}

.rise{animation:rise .55s ease both}
.rise.d1{animation-delay:.08s}
.rise.d2{animation-delay:.16s}
@keyframes rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.toast{position:fixed;left:50%;bottom:22px;transform:translateX(-50%);background:var(--ink);color:var(--paper);padding:11px 18px;border-radius:999px;font-weight:600;font-size:14.5px;box-shadow:var(--shadow);z-index:20;animation:rise .25s ease both}

@media (min-width:640px){
  .grid3{grid-template-columns:repeat(3,1fr)}
  .actions{grid-template-columns:repeat(4,auto)}
  .actions .wide{grid-column:auto}
}
@media (min-width:900px){
  .hero{grid-template-columns:1.05fr 1fr;gap:56px;align-items:start;padding:36px 0 64px}
  .hero-copy{padding-top:24px;position:sticky;top:24px}
  .tool{padding:28px}
  .cta-band{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:32px 36px}
  .cta-band p{margin:0}
}
@media (max-width:560px){
  .nav a.plain{display:none}
}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}
}
`;

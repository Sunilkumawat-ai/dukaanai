# DukaanAI

Turn one product photo into a ready-to-post listing for WhatsApp and Instagram. Built for small Indian sellers who list from their phones. Works in English, Hindi and Hinglish.

Built for the Hacktoberfest 2026 Open-Source AI Challenge, Week 2: Side Hustle.

**Live demo:** https://dukaanai.dukaantools.workers.dev
The demo needs an early access code. It is given in the DEV submission post.

## What it does

1. The seller adds a product photo, optional details and a price, and picks a language.
2. The photo is resized in the browser (max 1024px) to save mobile data.
3. A Cloudflare Worker sends it to Gemma, an open-weight model, through Google AI Studio.
4. The app returns a title, short description, key points, price line and hashtags, formatted for WhatsApp, with Copy and Send on WhatsApp buttons.

## Honest by design

- The model may only describe what is visible in the photo or typed by the seller. No invented materials, sizes, certifications or claims.
- Text inside the photo and the seller's note are treated as data, never as instructions (prompt-injection defence).
- Photos that do not show a product, such as screenshots, are refused instead of producing a fake listing.

## Security

- Strict Content Security Policy (no inline scripts), HSTS, no-sniff, frame blocking
- Access code compared in constant time; per-IP rate limits
- Input sanitising; photo must be a JPEG data URL
- Photos are not stored by the app

## Files

- `worker.js`: routes, security headers, rate limits, Gemma API call
- `page.js`: the HTML page (SEO tags, form, FAQ)
- `client.js`: browser code (photo resize, request, result, copy and share)
- `styles.js`: all CSS, with light and dark mode

## Run your own copy

1. Create a Cloudflare Worker and add the four files as modules in the same Worker, with `worker.js` as the entry file.
2. Add secrets: `GEMMA_API_KEY` (a Google AI Studio key) and `ACCESS_CODE` (any private code).
3. Optional: `CONTACT_WHATSAPP` (digits only) to show a Chat on WhatsApp section, and `MODEL` to change the model (default `gemma-4-26b-a4b-it`).
4. Deploy and open your workers.dev address.

Never put your API key or access code in the code files.

## Roadmap

- Marketplace and Instagram formats
- Automatic currency symbol for plain prices
- Accounts, usage limits and a small paid plan

## License

MIT

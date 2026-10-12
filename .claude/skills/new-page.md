Scaffold a new Next.js page for FairwayPro.

Ask the user for:
1. The page route (e.g. "profile", "wishlist", "checkout/confirmation")
2. Whether it needs server-side data fetching or is purely client-side

Then:
1. Create `frontend/app/<route>/page.tsx` with a proper React component using the App Router conventions
2. Add any needed API calls using the existing lib/api client pattern
3. Apply Tailwind CSS classes consistent with the rest of the site

Follow existing page patterns in the codebase for layout, loading states, and error handling.

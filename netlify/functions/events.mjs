import { getStore } from "@netlify/blobs";

export default async (req) => {
  const url = new URL(req.url);
  const rawFamilyId = url.searchParams.get("familyId") || "familia-alejandro-alba";
  const familyId = rawFamilyId.replace(/[^a-zA-Z0-9_-]/g, "_");
  const store = getStore("calendario-familiar");

  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store, no-cache, must-revalidate"
  };

  try {
    if (req.method === "GET") {
      const data = await store.get(familyId, { type: "json" });
      return new Response(
        JSON.stringify({
          ok: true,
          events: data && Array.isArray(data.events) ? data.events : null,
          updatedAt: data?.updatedAt || 0
        }),
        { status: 200, headers }
      );
    }

    if (req.method === "POST" || req.method === "PUT") {
      const body = await req.json();
      const events = Array.isArray(body.events) ? body.events : [];
      const updatedAt = Date.now();
      await store.setJSON(familyId, { events, updatedAt });
      return new Response(
        JSON.stringify({ ok: true, updatedAt }),
        { status: 200, headers }
      );
    }

    return new Response(
      JSON.stringify({ ok: false, error: "Método no permitido" }),
      { status: 405, headers }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err?.message || "Error en Netlify Blobs" }),
      { status: 500, headers }
    );
  }
};

"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { LoaderCircle, LockKeyhole } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export function AdminLoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    const supabase = createBrowserSupabaseClient();
    if (!supabase) {
      setMessage("Supabase Auth is not configured. Add the public Supabase URL and key to the environment.");
      return;
    }

    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) {
      setMessage("We couldn’t sign you in with those details.");
      return;
    }
    const next = params.get("next");
    router.replace(next?.startsWith("/admin") ? next : "/admin/leads");
    router.refresh();
  }

  return (
    <form className="admin-login-form" onSubmit={submit}>
      <div className="admin-login-icon"><LockKeyhole aria-hidden="true" size={22} /></div>
      <p className="eyebrow">ADMIN ACCESS</p>
      <h1>Sign in to StatPulse</h1>
      <p className="admin-login-copy">Only users listed in the Supabase admins table can view lead records.</p>
      <label htmlFor="admin-email">Email</label>
      <input autoComplete="username" id="admin-email" onChange={(event) => setEmail(event.target.value)} required type="email" value={email} />
      <label htmlFor="admin-password">Password</label>
      <input autoComplete="current-password" id="admin-password" onChange={(event) => setPassword(event.target.value)} required type="password" value={password} />
      {message && <p aria-live="polite" className="form-status form-status--error" role="alert">{message}</p>}
      <button className="button button--primary" disabled={busy} type="submit">
        {busy ? <><LoaderCircle className="spin" size={16} /> Signing in…</> : "Sign in"}
      </button>
    </form>
  );
}

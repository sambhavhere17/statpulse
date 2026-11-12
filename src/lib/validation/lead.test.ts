import { describe, expect, it } from "vitest";
import { hashIp } from "@/lib/security";
import { leadSchema } from "@/lib/validation/lead";

const validSubmission = {
  name: "  Alex Example  ",
  email: " alex@example.com ",
  phoneCountryCode: "+91",
  phone: "9876543210",
  service: "business-dashboard",
  message: "I want to understand our monthly sales trends.",
  sourcePage: "/contact",
  website: "",
  startedAt: 1_700_000_000_000,
  turnstileToken: "",
};

describe("lead validation", () => {
  it("trims valid fields before storage", () => {
    const parsed = leadSchema.parse(validSubmission);
    expect(parsed.name).toBe("Alex Example");
    expect(parsed.email).toBe("alex@example.com");
  });

  it("allows optional fields to be empty and rejects unexpected properties", () => {
    expect(leadSchema.safeParse({ ...validSubmission, name: "", service: "", message: "" }).success).toBe(true);
    expect(leadSchema.safeParse({ ...validSubmission, isAdmin: true }).success).toBe(false);
  });

  it("requires a valid Indian phone number and email address", () => {
    expect(leadSchema.safeParse({ ...validSubmission, phone: "98765" }).success).toBe(false);
    expect(leadSchema.safeParse({ ...validSubmission, phone: "987654321a" }).success).toBe(false);
    expect(leadSchema.safeParse({ ...validSubmission, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects a filled honeypot", () => {
    expect(leadSchema.safeParse({ ...validSubmission, website: "spam" }).success).toBe(false);
  });
});

describe("IP hashing", () => {
  it("produces a stable one-way digest and changes with the salt", () => {
    const first = hashIp("203.0.113.10", "one-secret-salt");
    expect(first).toBe(hashIp("203.0.113.10", "one-secret-salt"));
    expect(first).not.toContain("203.0.113.10");
    expect(first).not.toBe(hashIp("203.0.113.10", "another-secret"));
  });
});

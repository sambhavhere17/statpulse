import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  { slug: "choosing-useful-kpis", tag: "KPI design", title: "Choosing KPIs that help people decide", excerpt: "A useful KPI makes a next step clearer. Start with the decision, not the chart." },
  { slug: "reports-people-use", tag: "Reporting", title: "How to build reports people actually use", excerpt: "Clear structure, fewer distractions, and a shared reporting rhythm make the difference." },
  { slug: "start-workflow-automation", tag: "Operations", title: "Where to start with workflow automation", excerpt: "Look for repeated, predictable work before you reach for a complex automation." },
];
export const metadata = { title: "Insights | StatPulse Analytics", description: "Practical ideas for clearer reporting, KPIs, and business operations." };
export default function InsightsPage() { return <main className="section section-cream"><div className="container-site insights-page"><p className="redesign-eyebrow"><span />INSIGHTS</p><h1>Useful ideas for better operations.</h1><p className="page-lead">Plain-English thinking on reporting, performance, and systems that help growing teams move with confidence.</p><div className="insight-grid">{articles.map((article) => <article key={article.slug}><p>{article.tag}</p><h2>{article.title}</h2><span>{article.excerpt}</span><Link href={`/insights/${article.slug}`}>Read article <ArrowRight size={15} /></Link></article>)}</div></div></main>; }

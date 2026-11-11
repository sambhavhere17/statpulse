import Link from "next/link";
import { notFound } from "next/navigation";
const articles: Record<string, { tag: string; title: string; intro: string }> = {
  "choosing-useful-kpis": { tag: "KPI design", title: "Choosing KPIs that help people decide", intro: "A KPI is useful when it helps someone understand what changed, why it matters, and what to consider next." },
  "reports-people-use": { tag: "Reporting", title: "How to build reports people actually use", intro: "The best reports start with the people reading them and the choices they need to make." },
  "start-workflow-automation": { tag: "Operations", title: "Where to start with workflow automation", intro: "Begin with one repeated process that is clear, stable, and worth making easier." },
};
export function generateStaticParams() { return Object.keys(articles).map((slug) => ({ slug })); }
export default async function InsightArticle({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const article = articles[slug]; if (!article) notFound(); return <main className="section section-white"><article className="container-site article-page"><p className="redesign-eyebrow"><span />{article.tag}</p><h1>{article.title}</h1><p className="article-intro">{article.intro}</p><h2>Start with the decision</h2><p>Ask what someone needs to decide, then choose the information that supports that conversation. This keeps reporting focused and makes each measure easier to understand.</p><h2>Keep the view practical</h2><p>Use a small set of measures, a clear time period, and plain labels. A useful dashboard gives people enough context to act without asking them to decode it.</p><Link href="/insights">← Back to insights</Link></article></main>; }

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  FileSpreadsheet,
  FileText,
  Gauge,
  House,
  Settings,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { RevenueChart, CategoryChart } from "@/components/charts/analytics-charts";
import { ButtonLink } from "@/components/ui/button-link";
import { CheckList } from "@/components/ui/icon-tile";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig, pricingFootnote } from "@/config/site";
import { industries } from "@/content/industries";
import { projects } from "@/content/projects";
import { RoiCalculator } from "@/components/marketing/roi-calculator";

const benefits = [
  ["Less Manual Reporting", "Save time and reduce repetitive work."],
  ["Clearer Business Visibility", "Understand performance at a glance."],
  ["Smarter Decisions", "Identify opportunities and act with confidence."],
  ["Consistent KPI Tracking", "Monitor the metrics that matter most."],
];

const matrixProducts = [
  {
    title: "Department Result Matrix",
    copy: "Compare agreed KPIs across departments with a clear, consistent view.",
    service: "business-dashboard",
    image: "/images/department-result-matrix.png",
  },
  {
    title: "Team Productivity Matrix",
    copy: "Review team output and workload measures in one place.",
    service: "business-dashboard",
    image: "/images/team-productivity-matrix.png",
  },
  {
    title: "Organization Result Matrix",
    copy: "Bring cross-functional performance indicators into an executive summary.",
    service: "business-dashboard",
    image: "/images/organization-result-matrix.png",
  },
];

const steps = [
  ["Discover", "Understand the business problem, goals, and data sources."],
  ["Analyze", "Clean, organize, and analyze available data."],
  ["Visualize", "Build dashboards, reports, and KPI tracking solutions."],
  ["Optimize", "Explain findings and identify practical next steps."],
];

export function HomePage() {
  return (
    <>
      <section className="hero-section hero-section--showcase">
        <div className="container-site hero-grid hero-grid--showcase">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="eyebrow-mark" /> STATPULSE ANALYTICS</p>
            <h1>Turn Your Business Data Into Your Next <span>Competitive Advantage.</span></h1>
            <p className="hero-description">
              From automated reporting to intelligent dashboards, StatPulse Analytics
              helps businesses uncover insights, track performance, and make smarter
              decisions with confidence.
            </p>
            <div className="hero-actions">
              <ButtonLink arrow href="/book">Book a Free Consultation</ButtonLink>
              <ButtonLink href="/services" variant="secondary">Explore Our Services <ArrowRight aria-hidden="true" size={16} /></ButtonLink>
            </div>
          </div>

          <div className="showcase-dashboard" aria-label="Business performance dashboard" role="region">
            <div className="showcase-dashboard-topbar">
              <div className="showcase-brand"><BarChart3 aria-hidden="true" size={24} /><strong>StatPulse</strong></div>
              <div className="showcase-controls"><span>Last 30 Days</span><span className="showcase-avatar">SJ</span></div>
            </div>
            <div className="showcase-dashboard-body">
              <nav aria-label="Dashboard navigation" className="showcase-dashboard-nav">
                <span className="is-active"><House aria-hidden="true" size={17} />Dashboard</span>
                <span><FileText aria-hidden="true" size={17} />Reports</span>
                <span><BarChart3 aria-hidden="true" size={17} />KPIs</span>
                <span><Workflow aria-hidden="true" size={17} />Automation</span>
                <span><Settings aria-hidden="true" size={17} />Settings</span>
              </nav>
              <div className="showcase-dashboard-main">
                <div className="showcase-kpis">
                  <article><TrendingUp aria-hidden="true" size={23} /><span>Revenue</span><strong>₹24.8L</strong><em>↑ +12.5%</em></article>
                  <article><Users aria-hidden="true" size={23} /><span>Team Productivity</span><strong>92%</strong><em>↑ +8.3%</em></article>
                  <article><Gauge aria-hidden="true" size={23} /><span>Goals Achieved</span><strong>98%</strong><em>↑ +6.1%</em></article>
                </div>
                <div className="showcase-chart-layout">
                  <div className="showcase-chart-card"><h2>Business Performance</h2><RevenueChart compact /></div>
                  <div className="showcase-chart-card showcase-chart-card--department"><h2>Department Performance</h2><CategoryChart compact /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" id="industries">
        <div className="container-site">
          <SectionHeader
            align="center"
            description="Clear reporting for teams that need to understand what is happening and decide what to do next."
            eyebrow="WHO WE HELP"
            title="Analytics for the way your business works"
          />
          <div className="industry-grid">
            {industries.map((industry) => (
              <article className="industry-card industry-card--image" key={industry.slug}>
                {"image" in industry && (
                  <div className="industry-image-container">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="industry-card-img"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="industry-card-content">
                  <h3>{industry.name}</h3>
                  <p>{industry.description}</p>
                  <Link className="card-link" href={"/solutions/" + industry.slug}>
                    View Solution <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container-site why-grid">
          <div>
            <SectionHeader
              eyebrow="WHY STATPULSE"
              title="Your Data Has Answers. Let’s Find Them."
              description="Business data often sits in spreadsheets, sales platforms, and operational systems. StatPulse brings it together into understandable reports and actionable insights."
            />
            <div className="benefit-grid">
              {benefits.map(([title, description], index) => (
                <article className="benefit-card" key={title}>
                  <span className="benefit-index">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="snapshot-card">
            <div className="business-card-heading">
              <div><p className="card-kicker">PERFORMANCE SNAPSHOT</p><h3>Business performance view</h3></div>
              <span className="dashboard-status">Current period</span>
            </div>
            <div className="snapshot-main-chart">
              <div className="mini-panel-heading"><h3>Revenue trend</h3><span>Jan – Aug</span></div>
              <RevenueChart compact />
            </div>
            <div className="snapshot-bottom">
              <div className="snapshot-chart-card">
                <div className="mini-panel-heading"><h3>Sales mix</h3><span>Synthetic</span></div>
                <CategoryChart compact />
              </div>
              <div className="snapshot-chart-card">
                <div className="mini-panel-heading"><h3>Weekly orders</h3><span>0–320</span></div>
                <div className="weekly-labels"><span>Wk 2</span><span>Wk 4</span><span>Wk 6</span></div>
                <div className="mini-bars" aria-label="Weekly order volume" role="img">
                  {[48, 63, 56, 79, 70, 92].map((height, index) => <span key={index} style={{ height: height + "%" }} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container-site">
          <SectionHeader
            align="center"
            description="Choose a practical way to make team, department, and organization performance easier to review."
            eyebrow="DASHBOARDS WE BUILD"
            title="A clearer view at every level"
          />
          <div className="matrix-grid">
            {matrixProducts.map((product) => (
              <article className="matrix-card" key={product.title}>
                <h3>{product.title}</h3>
                <p>{product.copy}</p>
                <img alt="" className="matrix-image" src={product.image} />
                <ButtonLink arrow href={"/contact?service=" + product.service} variant="secondary">
                  Discuss Your Requirements
                </ButtonLink>
              </article>
            ))}
          </div>
          <p className="tools-note"><FileSpreadsheet aria-hidden="true" size={17} /> Looker Studio reports can be built on Google Sheets and shared or embedded on your website. We can also build in Power BI and Excel.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container-site">
          <SectionHeader
            align="center"
            description="An open process keeps the work focused on the questions your team needs answered."
            eyebrow="HOW IT WORKS"
            title="From raw data to real business insights"
          />
          <div className="process-grid">
            {steps.map(([title, description], index) => (
              <article className="process-step" key={title}>
                <span className="process-number">{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container-site">
          <SectionHeader
            align="center"
            description="Representative demo projects built with synthetic data — the same structure we apply to real client work."
            eyebrow="PORTFOLIO"
            title="Demonstrating the power of data"
          />
          <div className="project-grid">
            {projects.slice(0, 3).map((project, index) => (
              <article className="project-card" key={project.slug}>
                <div className={"project-preview project-preview--" + project.accent}>
                  {"image" in project && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-cover-img"
                      loading="lazy"
                    />
                  )}
                  <div className="project-preview-top"><span>Demo Project — Synthetic Data</span><ArrowUpRight aria-hidden="true" size={16} /></div>
                  {index === 0 ? <RevenueChart compact /> : <ProjectBars seed={index + 2} />}
                </div>
                <div className="project-card-body">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p><strong>Problem</strong> {project.problem}</p>
                  <p><strong>Approach</strong> {project.approach}</p>
                  <CheckList items={project.insights} />
                  <Link className="card-link" href={"/portfolio/" + project.slug}>View Case Study <ArrowRight aria-hidden="true" size={16} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream" id="calculator">
        <div className="container-site">
          <RoiCalculator />
        </div>
      </section>

      <section className="section section-white" id="pricing">
        <div className="container-site">
          <SectionHeader
            align="center"
            description="Start with a health check, build a focused dashboard, or partner month to month."
            eyebrow="SERVICES & PRICING"
            title="Clear packages, honest pricing"
          />
          <div className="pricing-grid">
            {siteConfig.packages.map((service) => (
              <article className={("popular" in service && service.popular) ? "price-card price-card--popular" : "price-card"} key={service.slug}>
                {("popular" in service && service.popular) && <span className="popular-badge">MOST POPULAR</span>}
                <h3>{service.name}</h3>
                <p className="price-description">{service.description}</p>
                <div className="price"><strong>{service.price}</strong><span>{service.cadence}</span></div>
                <CheckList items={service.deliverables} />
                <ButtonLink arrow className="price-button" href={"/contact?service=" + service.slug} variant={("popular" in service && service.popular) ? "primary" : "secondary"}>
                  Get Started
                </ButtonLink>
              </article>
            ))}
          </div>
          <p className="pricing-footnote">{pricingFootnote}</p>
        </div>
      </section>

      <section className="section section-cream" id="faq">
        <div className="container-site faq-layout">
          <div>
            <SectionHeader
              eyebrow="FAQ"
              title="Questions before getting started?"
            />
          </div>
          <Accordion items={siteConfig.faq} />
        </div>
      </section>

      <section className="cta-band">
        <div className="container-site cta-band-inner">
          <div><p className="eyebrow eyebrow--dark">READY WHEN YOU ARE</p><h2>Ready to Make Your Data Work Harder?</h2><p>Tell us about your business challenges. We’ll help you explore a practical analytics solution.</p></div>
          <div className="cta-band-actions">
            <ButtonLink arrow href="/book" variant="dark">Book a Free Consultation</ButtonLink>
            <ButtonLink href="/contact" variant="orange-outline">Discuss Your Project</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectBars({ seed }: { seed: number }) {
  const heights = [56, 82, 66, 91, 74, 62, 88, 71];
  return (
    <div aria-label="Business performance chart" className="project-bars" role="img">
      {heights.map((height, index) => (
        <span key={index} style={{ height: Math.max(22, height - ((index + seed) % 3) * 7) + "%" }} />
      ))}
    </div>
  );
}

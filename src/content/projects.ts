export const projects = [
  {
    slug: "ecommerce-sales-intelligence",
    title: "E-commerce Sales Intelligence",
    category: "Sales Analytics",
    tools: ["Looker Studio", "Excel"],
    problem: "Illustrative scenario: a growing store needs a clearer view of sales, returns, and product mix.",
    approach: "Combine synthetic order and product data into a repeatable sales reporting model.",
    insights: ["Compare net sales after returns", "Spot changes in product mix", "Review channel contribution"],
    accent: "orange",
  },
  {
    slug: "operations-kpi-dashboard",
    title: "Operations KPI Dashboard",
    category: "Operations Analytics",
    tools: ["Power BI", "Excel"],
    problem: "Illustrative scenario: an operations team wants to review output and delivery measures together.",
    approach: "Arrange synthetic production and fulfillment data around a consistent KPI hierarchy.",
    insights: ["Track output against a plan", "Compare weekly delivery trends", "Review exception categories"],
    accent: "charcoal",
  },
  {
    slug: "marketing-performance-analytics",
    title: "Marketing Performance Analytics",
    category: "Marketing Analytics",
    tools: ["Power BI", "Looker Studio"],
    problem: "Illustrative scenario: a team needs one repeatable view of campaign spend and lead outcomes.",
    approach: "Model synthetic campaign data with clearly stated attribution assumptions.",
    insights: ["Compare spend by channel", "Follow leads through conversion", "Review cost-per-lead trends"],
    accent: "cream",
  },
] as const;

export const portfolioFilters = [
  "All",
  "Looker Studio",
  "Power BI",
  "Excel",
  "Sales Analytics",
  "Operations Analytics",
  "Marketing Analytics",
  "Automation",
] as const;

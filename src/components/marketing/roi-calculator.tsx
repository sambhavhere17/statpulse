"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Clock,
  TrendingDown,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export function RoiCalculator() {
  const [teamSize, setTeamSize] = useState<number>(3);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(6);
  const [hourlyRate, setHourlyRate] = useState<number>(1200);

  const calculations = useMemo(() => {
    const totalWeeklyHours = teamSize * hoursPerWeek;
    const totalAnnualHours = totalWeeklyHours * 50; // 50 working weeks
    const annualCost = totalAnnualHours * hourlyRate;

    // StatPulse automations typically recover 75% of manual preparation time
    const hoursSavedAnnual = Math.round(totalAnnualHours * 0.75);
    const annualSavings = Math.round(annualCost * 0.75);

    return {
      totalWeeklyHours,
      totalAnnualHours,
      annualCost,
      hoursSavedAnnual,
      annualSavings,
      weeksToPayback: "3–4 weeks",
    };
  }, [teamSize, hoursPerWeek, hourlyRate]);

  const formatCurrency = (val: number) => {
    if (val >= 100000) {
      return "₹" + (val / 100000).toFixed(1) + " Lakhs";
    }
    return "₹" + val.toLocaleString("en-IN");
  };

  return (
    <div className="roi-calculator-card">
      <div className="roi-card-header">
        <div className="badge-pill">
          <Calculator size={14} className="text-orange" />
          <span>Interactive Savings Calculator</span>
        </div>
        <h2>How much time & budget does manual reporting cost your team?</h2>
      </div>

      <div className="roi-grid">
        {/* Sliders Side */}
        <div className="roi-controls">
          <div className="slider-group">
            <div className="slider-label">
              <span>Team members compiling reports</span>
              <strong>{teamSize} {teamSize === 1 ? "person" : "people"}</strong>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="roi-slider"
              aria-label="Number of team members compiling reports"
            />
            <div className="slider-ticks">
              <span>1</span>
              <span>10</span>
              <span>20+</span>
            </div>
          </div>

          <div className="slider-group">
            <div className="slider-label">
              <span>Hours spent per person / week</span>
              <strong>{hoursPerWeek} hrs / week</strong>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="roi-slider"
              aria-label="Hours spent per person per week"
            />
            <div className="slider-ticks">
              <span>1 hr</span>
              <span>10 hrs</span>
              <span>20 hrs</span>
            </div>
          </div>

          <div className="slider-group">
            <div className="slider-label">
              <span>Estimated loaded hourly rate</span>
              <strong>₹{hourlyRate.toLocaleString("en-IN")} / hr</strong>
            </div>
            <input
              type="range"
              min="500"
              max="3500"
              step="100"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="roi-slider"
              aria-label="Estimated hourly cost per team member"
            />
            <div className="slider-ticks">
              <span>₹500</span>
              <span>₹2,000</span>
              <span>₹3,500</span>
            </div>
          </div>

          <div className="roi-note">
            <ShieldAlert size={16} className="text-orange" />
            <span>
              Your team spends approximately <strong>{calculations.totalWeeklyHours} hours each week</strong> manually extracting and formatting data.
            </span>
          </div>
        </div>

        {/* Results Output Side */}
        <div className="roi-results-box">
          <span className="results-badge">
            <Sparkles size={13} />
            Estimated Annual Recovery
          </span>

          <div className="results-metric-primary">
            <span className="metric-caption">Potential Annual Cost Saved</span>
            <strong className="metric-big-number">
              {formatCurrency(calculations.annualSavings)}
            </strong>
            <span className="metric-subtext">recovered in billable and operational capacity</span>
          </div>

          <div className="results-stats-row">
            <div className="result-stat-tile">
              <Clock size={16} className="text-orange" />
              <div>
                <strong>{calculations.hoursSavedAnnual.toLocaleString()} hrs</strong>
                <span>Saved per year</span>
              </div>
            </div>
            <div className="result-stat-tile">
              <TrendingDown size={16} className="text-orange" />
              <div>
                <strong>{calculations.weeksToPayback}</strong>
                <span>Est. ROI breakeven</span>
              </div>
            </div>
          </div>

          <div className="results-cta">
            <Link
              href={`/contact?service=reporting-automation&hours=${calculations.hoursSavedAnnual}`}
              className="button button--primary w-full"
            >
              Automate Your Reporting <ArrowRight size={16} />
            </Link>
            <p className="results-guarantee">
              * Based on typical 75% reduction in manual data processing post-deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

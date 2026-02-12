import {
  Clock,
  ChevronDown,
  Award,
  Sparkles,
  Bookmark,
  Eye,
  ThumbsUp,
  Share2,
  ArrowLeft,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
// import { LevelTag } from "./LevelTag";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ActivityObjectives } from "./ActivityObjectives";

interface UseCasePreviewProps {
  onGetStarted?: () => void;
  onBackToLibrary?: () => void;
}

export function UseCasePreview({
  onGetStarted,
  onBackToLibrary,
}: UseCasePreviewProps) {
  const navigate = useNavigate();
  const [showTechnical, setShowTechnical] = useState(false);
  const [showData, setShowData] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showMedia, setShowMedia] = useState(false);

  const steps = [
    {
      number: 1,
      title: "Plan Your Website",
      description:
        "Sketch out your website layout, define the main pages (Home, About, Services, Contact), and identify key features you want to include.",
      time: "15 min",
    },
    {
      number: 2,
      title: "Setup React Project",
      description:
        "Create a new React project using Vite, install necessary dependencies like React Router, Tailwind CSS, and any UI component libraries.",
      time: "20 min",
    },
    {
      number: 3,
      title: "Create Project Structure",
      description:
        "Organize your project with folders for components, pages, styles, and assets. Define the component hierarchy and data flow.",
      time: "15 min",
    },
    {
      number: 4,
      title: "Build Core Components",
      description:
        "Create reusable components like Navigation, Header, Footer, Card, Button, and Form components with proper TypeScript types.",
      time: "30 min",
    },
    {
      number: 5,
      title: "Implement Routing",
      description:
        "Setup React Router to navigate between different pages (Home, About, Services, Contact) with proper navigation links.",
      time: "20 min",
    },
    {
      number: 6,
      title: "Style Your Website",
      description:
        "Use Tailwind CSS to style your components, ensure responsive design for mobile and desktop, and maintain consistent branding.",
      time: "30 min",
    },
    {
      number: 7,
      title: "Deploy Your Website",
      description:
        "Build your project for production and deploy to a hosting service like Vercel, Netlify, or GitHub Pages.",
      time: "15 min",
    },
  ];

  const totalTime = steps.reduce((acc, step) => {
    const minutes = parseInt(step.time);
    return acc + minutes;
  }, 0);

  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: "rgba(249, 249, 249, 1)" }}>
      <div className="max-w-[1000px] mx-auto p-6">
        {/* Back to Library Button */}
        {onBackToLibrary && (
          <button
            onClick={onBackToLibrary}
            className="flex items-center gap-2 mb-4 px-3 py-2 hover:bg-white rounded-md transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-[--font-weight-medium]">
              Back
            </span>
          </button>
        )}
        
        <div className="bg-white p-6" style={{ borderRadius: "16px" }}>
          {/* Header Section - De-emphasized */}
          <div style={{ marginBottom: "var(--space-4)" }}>
            <div className="mb-2">
              {/* <LevelTag level="200" /> */}
            </div>
            <div className="flex items-start justify-between mb-2">
            <h1 className="font-[--font-weight-bold] leading-tight text-[rgb(0,111,147)] text-[32px] flex-1">
              Create a Frontend Website
            </h1>
            <button className="ml-4 p-2 hover:bg-[--muted] rounded-md transition-colors">
              <Bookmark className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
          
          {/* Metadata - Last updated on left, stats on right */}
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <p className="text-xs text-muted-foreground">Last updated: Feb 11, 2026</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                <span className="text-xs">0</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-3 w-3" />
                <span className="text-xs">0</span>
              </div>
              <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                <Share2 className="h-3 w-3" />
                <span className="text-xs">Share</span>
              </button>
            </div>
          </div>

          {/* Author Section - Compact */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                MS
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">You</div>
                <div className="text-xs text-muted-foreground">Activity Creator</div>
              </div>
            </div>
          </div>
        </div>

        {/* HERO CARD - Primary Focal Point */}
        <section 
          className="mb-6 p-4"
          style={{ 
            borderRadius: "16px"
          }}
        >
          {/* Activity Objectives - Displayed First */}
          <ActivityObjectives />

          {/* What You'll Create & Hero Image - Combined */}
          <div 
            className="mb-4 p-4 border-2 bg-white"
            style={{ 
              borderRadius: "12px", 
              borderColor: "rgb(0,111,147)",
              boxShadow: "0 20px 25px -5px rgba(0, 111, 147, 0.15), 0 10px 10px -5px rgba(0, 111, 147, 0.08)"
            }}
          >
            <div className="flex items-center justify-between gap-3 mb-2">
              <h3 className="text-sm uppercase tracking-wide font-[--font-weight-bold]" style={{ color: "rgb(0,111,147)" }}>
                WHAT YOU WILL CREATE
              </h3>
              <div 
                className="flex items-center gap-2 px-3 py-1.5 border-2 flex-shrink-0"
                style={{ 
                  borderRadius: "8px",
                  borderColor: "rgb(0,111,147)",
                  backgroundColor: "rgba(0,111,147,0.08)",
                  boxShadow: "0 10px 15px -3px rgba(0, 111, 147, 0.2), 0 4px 6px -2px rgba(0, 111, 147, 0.1)"
                }}
              >
                <Clock className="h-3.5 w-3.5" style={{ color: "rgb(0,111,147)" }} />
                <span className="font-[--font-weight-bold]" style={{ fontSize: "13px", color: "rgb(0,111,147)" }}>
                  ~{totalTime} minutes total
                </span>
              </div>
            </div>
            <p className="text-[rgb(25,25,25)] leading-relaxed mb-3" style={{ fontSize: "13px" }}>
              During this hands-on off-site, you'll learn the fundamentals of AI-assisted development through guided training on vibe coding principles, development tools, MCP servers, and natural language prompting. Then, in teams, you'll apply these skills to build a modern, responsive frontend website with React and Tailwind CSS. You'll learn how to structure a React project, create reusable components, implement routing, and collaborate effectively on a shared codebase.
            </p>
            
            {/* Hero Image */}
            <div
              className="overflow-hidden border-2 border-[--border] bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center"
              style={{ borderRadius: "8px", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", minHeight: "200px" }}
            >
              <div className="text-6xl">🌐</div>
            </div>
          </div>

          {/* What tools you'll use? */}
          <div 
            className="mb-4 p-4 border-2 bg-white"
            style={{ 
              borderRadius: "12px", 
              borderColor: "rgb(0,111,147)",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-sm uppercase tracking-wide font-[--font-weight-bold] flex-shrink-0" style={{ color: "rgb(0,111,147)" }}>
                What tools you'll use
              </h3>
              <div className="flex items-center gap-3 flex-1 justify-end flex-wrap">
                <div 
                  className="flex items-center gap-1.5 px-2.5 py-1.5 border-2"
                  style={{ 
                    borderRadius: "8px",
                    borderColor: "rgba(139, 92, 246, 0.3)",
                    backgroundColor: "rgba(139, 92, 246, 0.1)",
                    boxShadow: "0 10px 15px -3px rgba(139, 92, 246, 0.2), 0 4px 6px -2px rgba(139, 92, 246, 0.1)"
                  }}
                >
                  <Sparkles className="h-3.5 w-3.5" style={{ color: "rgb(139, 92, 246)" }} />
                  <span className="font-[--font-weight-bold]" style={{ fontSize: "14px", color: "rgb(139, 92, 246)" }}>
                    GitHub Copilot
                  </span>
                </div>
                <span className="text-muted-foreground" style={{ fontSize: "14px" }}>•</span>
                <div 
                  className="flex items-center px-2.5 py-1.5 border-2"
                  style={{ 
                    borderRadius: "8px",
                    borderColor: "rgb(64, 64, 64)",
                    backgroundColor: "rgba(64, 64, 64, 0.03)",
                    boxShadow: "0 10px 15px -3px rgba(64, 64, 64, 0.15), 0 4px 6px -2px rgba(64, 64, 64, 0.08)"
                  }}
                >
                  <span className="font-[--font-weight-bold]" style={{ fontSize: "14px", color: "rgb(64, 64, 64)" }}>
                    React & Tailwind
                  </span>
                </div>
              </div>
            </div>
            <p className="text-right text-muted-foreground mt-1.5" style={{ fontSize: "11px" }}>
              Don't have these yet? No worries—we'll show you how to get everything set up.
            </p>
          </div>

          {/* Primary CTA - Most Prominent */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => navigate('/step-by-step')}
              className="begin-tutorial-btn w-full max-w-5xl px-8 py-5 bg-primary text-primary-foreground font-[--font-weight-bold] shadow-2xl relative overflow-hidden group transform hover:scale-105 transition-transform"
              style={{ borderRadius: "16px" }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 font-bold leading-tight" style={{ fontSize: "18px" }}>
                ✨ Build your website in just 
                <span 
                  style={{ 
                    fontSize: "28px",
                    fontWeight: "900",
                    color: "rgb(253, 224, 71)",
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)"
                  }}
                >
                  {steps.length}
                </span> 
                steps!
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
            </button>
          </div>
          
          <style>{`
            @keyframes pulse-shadow {
              0%, 100% {
                box-shadow: 0 0 20px rgba(var(--primary-rgb, 59, 130, 246), 0.5);
              }
              50% {
                box-shadow: 0 0 40px rgba(var(--primary-rgb, 59, 130, 246), 0.8);
              }
            }
            
            @keyframes shimmer {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
            
            @keyframes wiggle {
              0%, 100% {
                transform: rotate(0deg);
              }
              25% {
                transform: rotate(-2deg);
              }
              75% {
                transform: rotate(2deg);
              }
            }
            
            .begin-tutorial-btn {
              animation: pulse-shadow 2s ease-in-out infinite, wiggle 0.5s ease-in-out 3;
              transition: transform 0.2s ease, opacity 0.2s ease;
            }
            
            .begin-tutorial-btn:hover {
              transform: scale(1.05);
              animation: pulse-shadow 1s ease-in-out infinite;
            }
            
            .begin-tutorial-btn .shimmer {
              animation: shimmer 3s ease-in-out infinite;
            }

            .ai-tool-icon {
              position: relative;
              display: inline-flex;
            }

            .ai-tooltip {
              visibility: hidden;
              position: absolute;
              bottom: 100%;
              left: 50%;
              transform: translateX(-50%);
              margin-bottom: 8px;
              padding: 6px 10px;
              background-color: rgb(25, 25, 25);
              color: white;
              font-size: 12px;
              white-space: nowrap;
              border-radius: 6px;
              opacity: 0;
              transition: opacity 0.2s ease;
              pointer-events: none;
            }

            .ai-tooltip::after {
              content: '';
              position: absolute;
              top: 100%;
              left: 50%;
              transform: translateX(-50%);
              border: 5px solid transparent;
              border-top-color: rgb(25, 25, 25);
            }

            .ai-tool-icon:hover .ai-tooltip {
              visibility: visible;
              opacity: 1;
            }
          `}</style>
        </section>

        {/* Additional Details - SECONDARY Section */}
        <section className="mb-12">
          <h3 className="text-xs uppercase tracking-wide text-muted-foreground mb-4 font-[--font-weight-bold]">
            Additional Details
          </h3>

          <div className="space-y-2">
            {/* Programming Language - Static */}
            <div className="mb-4">
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground text-sm">
                  Programming Language:
                </span>
                <Badge variant="outline" className="text-xs">
                  TypeScript
                </Badge>
                <Badge variant="outline" className="text-xs">
                  JavaScript
                </Badge>
              </div>
            </div>

            {/* Category - Static */}
            <div className="mb-4">
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground text-sm">
                  Category:
                </span>
                <Badge variant="outline" className="text-xs">
                  Web Development
                </Badge>
              </div>
            </div>

            {/* Business Unit - Static */}
            <div className="mb-4">
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground text-sm">
                  Business Unit:
                </span>
                <Badge variant="outline" className="text-xs">
                  Global Technology
                </Badge>
              </div>
            </div>

            {/* Technical Details */}
            <div>
              <button
                onClick={() => setShowTechnical(!showTechnical)}
                className="w-full flex items-center justify-between p-3 bg-transparent hover:bg-[--secondary] border-2 transition-colors text-sm"
                style={{ 
                  borderRadius: showTechnical ? "12px 12px 0 0" : "12px",
                  borderColor: showTechnical ? "rgb(0, 111, 147)" : "var(--border)",
                  backgroundColor: showTechnical ? "rgba(0, 111, 147, 0.05)" : "transparent"
                }}
              >
                <span className="text-muted-foreground text-sm font-[--font-weight-bold]">
                  Technical Details
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform ${showTechnical ? "rotate-180" : ""}`}
                />
              </button>

              {showTechnical && (
                <div
                  className="p-4 border-2 border-t-0 bg-[--card]/50"
                  style={{ 
                    borderRadius: "0 0 12px 12px",
                    borderColor: "rgb(0, 111, 147)"
                  }}
                >
                  <p className="text-xs text-muted-foreground mb-2 font-[--font-weight-bold]" style={{ color: "rgb(0, 111, 147)" }}>
                    ↑ Technical Details for this activity
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This activity uses React 18 with TypeScript for type safety, Tailwind CSS for styling, and React Router for navigation. You'll learn component composition, state management with hooks, and responsive design principles.
                  </p>
                </div>
              )}
            </div>

            {/* Data Requirements */}
            <div>
              <button
                onClick={() => setShowData(!showData)}
                className="w-full flex items-center justify-between p-3 bg-transparent hover:bg-[--secondary] border-2 transition-colors text-sm"
                style={{ 
                  borderRadius: showData ? "12px 12px 0 0" : "12px",
                  borderColor: showData ? "rgb(0, 111, 147)" : "var(--border)",
                  backgroundColor: showData ? "rgba(0, 111, 147, 0.05)" : "transparent"
                }}
              >
                <span className="text-muted-foreground text-sm font-[--font-weight-bold]">
                  Requirements
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform ${showData ? "rotate-180" : ""}`}
                />
              </button>

              {showData && (
                <div
                  className="p-4 border-2 border-t-0 bg-[--card]/50"
                  style={{ 
                    borderRadius: "0 0 12px 12px",
                    borderColor: "rgb(0, 111, 147)"
                  }}
                >
                  <p className="text-xs text-muted-foreground mb-2 font-[--font-weight-bold]" style={{ color: "rgb(0, 111, 147)" }}>
                    ↑ Requirements for this activity
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You'll need Node.js (version 18+), VS Code with GitHub Copilot extension, and basic familiarity with JavaScript and web development concepts.
                  </p>
                </div>
              )}
            </div>

            {/* Additional Notes */}
            <div>
              <button
                onClick={() => setShowNotes(!showNotes)}
                className="w-full flex items-center justify-between p-3 bg-transparent hover:bg-[--secondary] border-2 transition-colors text-sm"
                style={{ 
                  borderRadius: showNotes ? "12px 12px 0 0" : "12px",
                  borderColor: showNotes ? "rgb(0, 111, 147)" : "var(--border)",
                  backgroundColor: showNotes ? "rgba(0, 111, 147, 0.05)" : "transparent"
                }}
              >
                <span className="text-muted-foreground text-sm font-[--font-weight-bold]">
                  Additional Notes
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform ${showNotes ? "rotate-180" : ""}`}
                />
              </button>

              {showNotes && (
                <div
                  className="p-4 border-2 border-t-0 bg-[--card]/50"
                  style={{ 
                    borderRadius: "0 0 12px 12px",
                    borderColor: "rgb(0, 111, 147)"
                  }}
                >
                  <p className="text-xs text-muted-foreground mb-2 font-[--font-weight-bold]" style={{ color: "rgb(0, 111, 147)" }}>
                    ↑ Additional Notes for this activity
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This is a beginner-friendly activity designed to teach web development fundamentals. GitHub Copilot will help you write code faster by suggesting completions and best practices. Don't hesitate to ask Copilot for help explaining concepts!
                  </p>
                </div>
              )}
            </div>

            {/* Media & Resources */}
            <div className="mt-4">
              <button
                onClick={() => setShowMedia(!showMedia)}
                className="w-full flex items-center justify-between p-3 bg-transparent hover:bg-[--secondary] border-2 transition-colors text-sm"
                style={{ 
                  borderRadius: showMedia ? "12px 12px 0 0" : "12px",
                  borderColor: showMedia ? "rgb(0, 111, 147)" : "var(--border)",
                  backgroundColor: showMedia ? "rgba(0, 111, 147, 0.05)" : "transparent"
                }}
              >
                <span className="text-muted-foreground text-sm font-[--font-weight-bold]">
                  Resources & References
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform ${showMedia ? "rotate-180" : ""}`}
                />
              </button>

              {showMedia && (
                <div
                  className="p-4 border-2 border-t-0 bg-[--card]/50"
                  style={{ 
                    borderRadius: "0 0 12px 12px",
                    borderColor: "rgb(0, 111, 147)"
                  }}
                >
                  <p className="text-xs text-muted-foreground mb-4 font-[--font-weight-bold]" style={{ color: "rgb(0, 111, 147)" }}>
                    ↑ Helpful resources for building your website
                  </p>
                  
                  <div className="space-y-3">
                    <a
                      href="https://react.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 bg-white border-2 border-[--border] hover:border-primary transition-colors"
                      style={{ borderRadius: "8px" }}
                    >
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0" style={{ borderRadius: "8px" }}>
                        <span>⚛️</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-[--font-weight-bold] text-foreground mb-1">
                          React Documentation
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Official React docs and guides
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://tailwindcss.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 bg-white border-2 border-[--border] hover:border-primary transition-colors"
                      style={{ borderRadius: "8px" }}
                    >
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0" style={{ borderRadius: "8px" }}>
                        <span>🎨</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-[--font-weight-bold] text-foreground mb-1">
                          Tailwind CSS Documentation
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Utility-first CSS framework docs
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://github.com/Copilot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 bg-white border-2 border-[--border] hover:border-primary transition-colors"
                      style={{ borderRadius: "8px" }}
                    >
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0" style={{ borderRadius: "8px" }}>
                        <span>🤖</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-[--font-weight-bold] text-foreground mb-1">
                          GitHub Copilot Tips
                        </p>
                        <p className="text-xs text-muted-foreground">
                          How to get the most out of Copilot
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        </div>
      </div>
    </div>
  );
}

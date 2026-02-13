import { useState } from "react";
import { ChevronDown, Copy, Check, Terminal } from "lucide-react";

interface GitCommand {
  command: string;
  description: string;
  category: string;
  borderColor?: string;
}

export function GitCommandHelper() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const gitCommands: GitCommand[] = [
    {
      category: "Getting Started",
      command: "git clone <repository-url>",
      description: "Download an existing repository from GitHub (use this to get a copy of this project!)",
      borderColor: "rgb(34, 197, 94)" // Green
    },
    {
      category: "Getting Started",
      command: "git init",
      description: "Start a brand new Git repository from scratch (NOT needed if you cloned)",
      borderColor: "rgb(34, 197, 94)" // Green
    },
    {
      category: "Basic Workflow",
      command: "git status",
      description: "Check the status of your working directory and staged changes"
    },
    {
      category: "Basic Workflow",
      command: "git add .",
      description: "Stage all changes in the current directory for commit",
      borderColor: "rgb(239, 68, 68)" // Red
    },
    {
      category: "Basic Workflow",
      command: "git add <file>",
      description: "Stage a specific file for commit"
    },
    {
      category: "Basic Workflow",
      command: 'git commit -m "Your message"',
      description: "Commit staged changes with a descriptive message",
      borderColor: "rgb(239, 68, 68)" // Red
    },
    {
      category: "Syncing with Remote",
      command: "git pull origin main",
      description: "Pull the latest changes from the remote main branch",
      borderColor: "rgb(168, 85, 247)" // Purple
    },
    {
      category: "Syncing with Remote",
      command: "git push origin main",
      description: "Push your local commits to the remote main branch"
    },
    {
      category: "Branching",
      command: "git branch",
      description: "List all local branches"
    },
    {
      category: "Branching",
      command: "git checkout -b <branch-name>",
      description: "Create and switch to a new branch",
      borderColor: "rgb(34, 197, 94)" // Green
    },
    {
      category: "Branching",
      command: "git checkout <branch-name>",
      description: "Switch to an existing branch",
      borderColor: "rgb(168, 85, 247)" // Purple
    },
    {
      category: "Branching",
      command: "git merge <branch-name>",
      description: "Merge another branch into your current branch",
      borderColor: "rgb(168, 85, 247)" // Purple
    },
    {
      category: "Branching",
      command: "git branch <branch-name>",
      description: "Create a new branch without switching to it"
    },
    {
      category: "Branching",
      command: "git push -u origin <branch-name>",
      description: "Push your branch to remote and set up tracking",
      borderColor: "rgb(239, 68, 68)" // Red
    },
    {
      category: "Branching",
      command: "git pull origin <branch-name>",
      description: "Pull changes from a specific remote branch into current branch"
    },
    {
      category: "Branching",
      command: "git branch -d <branch-name>",
      description: "Delete a local branch (only if it's been merged)"
    },
    {
      category: "Advanced Branching",
      command: "git checkout main && git merge <your-branch>",
      description: "Switch to main branch and merge your branch into it"
    },
    {
      category: "Advanced Branching",
      command: "git fetch origin",
      description: "Download all changes from remote without merging"
    },
    {
      category: "Advanced Branching",
      command: "git branch -a",
      description: "List all branches (local and remote)"
    },
    {
      category: "Advanced Branching",
      command: "git checkout -",
      description: "Switch back to the previous branch you were on"
    },
    {
      category: "Viewing History",
      command: "git log",
      description: "View commit history"
    },
    {
      category: "Viewing History",
      command: "git log --oneline",
      description: "View commit history in compact format"
    },
    {
      category: "Undoing Changes",
      command: "git restore <file>",
      description: "Discard changes in working directory for a file"
    },
    {
      category: "Undoing Changes",
      command: "git restore --staged <file>",
      description: "Unstage a file (keep changes in working directory)"
    },
    {
      category: "Undoing Changes",
      command: "git reset --soft HEAD~1",
      description: "Undo last commit, keep changes staged"
    }
  ];

  const copyToClipboard = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const toggleFilter = (color: string) => {
    setActiveFilters(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  // Filter commands based on active filters
  const filteredCommands = activeFilters.length === 0
    ? gitCommands
    : gitCommands.filter(cmd => 
        cmd.borderColor && activeFilters.includes(cmd.borderColor)
      );

  // Group filtered commands by category
  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) {
      acc[cmd.category] = [];
    }
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, GitCommand[]>);

  return (
    <div 
      className="w-full"
      style={{ 
        backgroundColor: "rgba(249, 249, 249, 1)",
        borderBottom: isOpen ? "1px solid var(--border)" : "none"
      }}
    >
      <div className="max-w-[1000px] mx-auto px-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-white border-2 transition-all hover:shadow-md"
          style={{ 
            borderRadius: isOpen ? "12px 12px 0 0" : "12px",
            borderColor: isOpen ? "rgb(59, 130, 246)" : "var(--border)",
            backgroundColor: isOpen ? "rgba(59, 130, 246, 0.05)" : "white",
            boxShadow: isOpen ? "0 4px 6px -1px rgba(59, 130, 246, 0.1)" : "none"
          }}
        >
          <div className="flex items-center gap-3">
            <Terminal className="h-5 w-5" style={{ color: "rgb(59, 130, 246)" }} />
            <div className="text-left">
              <span className="text-base font-bold" style={{ color: "rgb(59, 130, 246)" }}>
                Git Command Reference
              </span>
              <p className="text-xs text-muted-foreground mt-0.5">
                Quick access to common Git commands
              </p>
            </div>
          </div>
          <ChevronDown
            className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
            style={{ color: "rgb(59, 130, 246)" }}
          />
        </button>

        {isOpen && (
          <div
            className="bg-white border-2 border-t-0 p-4 max-h-[70vh] overflow-y-auto"
            style={{ 
              borderRadius: "0 0 12px 12px",
              borderColor: "rgb(59, 130, 246)",
              boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.1)"
            }}
          >
            <p className="text-xs text-muted-foreground mb-4 pb-3 border-b">
              💡 Click any command to copy it to your clipboard
            </p>

            {/* Interactive Color Filter */}
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
              <h4 className="text-sm font-bold mb-3" style={{ color: "rgb(59, 130, 246)" }}>
                🎨 Filter by Command Type {activeFilters.length > 0 && `(${activeFilters.length} active)`}
              </h4>
              <div className="space-y-2 text-xs">
                <button
                  onClick={() => toggleFilter("rgb(34, 197, 94)")}
                  className="w-full flex items-start gap-2 p-2 rounded hover:bg-white/50 transition-colors text-left"
                >
                  <div 
                    className="w-5 h-5 rounded border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all" 
                    style={{ 
                      borderColor: "rgb(34, 197, 94)",
                      backgroundColor: activeFilters.includes("rgb(34, 197, 94)") ? "rgb(34, 197, 94)" : "transparent"
                    }}
                  >
                    {activeFilters.includes("rgb(34, 197, 94)") && (
                      <Check className="h-3 w-3 text-white" />
                    )}
                  </div>
                  <p>
                    <strong className="text-green-600">Starting Points</strong> - Commands for initializing projects or creating new branches
                  </p>
                </button>
                <button
                  onClick={() => toggleFilter("rgb(239, 68, 68)")}
                  className="w-full flex items-start gap-2 p-2 rounded hover:bg-white/50 transition-colors text-left"
                >
                  <div 
                    className="w-5 h-5 rounded border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all" 
                    style={{ 
                      borderColor: "rgb(239, 68, 68)",
                      backgroundColor: activeFilters.includes("rgb(239, 68, 68)") ? "rgb(239, 68, 68)" : "transparent"
                    }}
                  >
                    {activeFilters.includes("rgb(239, 68, 68)") && (
                      <Check className="h-3 w-3 text-white" />
                    )}
                  </div>
                  <p>
                    <strong className="text-red-600">Important Actions</strong> - Commands that save and publish code
                  </p>
                </button>
                <button
                  onClick={() => toggleFilter("rgb(168, 85, 247)")}
                  className="w-full flex items-start gap-2 p-2 rounded hover:bg-white/50 transition-colors text-left"
                >
                  <div 
                    className="w-5 h-5 rounded border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all" 
                    style={{ 
                      borderColor: "rgb(168, 85, 247)",
                      backgroundColor: activeFilters.includes("rgb(168, 85, 247)") ? "rgb(168, 85, 247)" : "transparent"
                    }}
                  >
                    {activeFilters.includes("rgb(168, 85, 247)") && (
                      <Check className="h-3 w-3 text-white" />
                    )}
                  </div>
                  <p>
                    <strong className="text-purple-600">Collaboration</strong> - Commands for syncing and integrating changes
                  </p>
                </button>
              </div>
              {activeFilters.length > 0 && (
                <button
                  onClick={() => setActiveFilters([])}
                  className="mt-3 text-xs text-blue-600 hover:text-blue-800 font-semibold underline"
                >
                  Clear all filters
                </button>
              )}
            </div>

            <div className="space-y-6">
              {Object.entries(groupedCommands).map(([category, commands]) => (
                <div key={category}>
                  <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: "rgb(59, 130, 246)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "rgb(59, 130, 246)" }} />
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {commands.map((cmd, idx) => (
                      <div
                        key={idx}
                        className="group relative p-3 border-2 rounded-lg hover:border-primary transition-all"
                        style={{ 
                          backgroundColor: "rgba(249, 249, 249, 0.5)",
                          borderColor: cmd.borderColor || "rgb(226, 232, 240)"
                        }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <code 
                                className="text-sm font-mono px-2 py-1 rounded"
                                style={{ 
                                  backgroundColor: "rgb(30, 30, 30)",
                                  color: "rgb(139, 233, 253)",
                                  wordBreak: "break-all"
                                }}
                              >
                                {cmd.command}
                              </code>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {cmd.description}
                            </p>
                          </div>
                          <button
                            onClick={() => copyToClipboard(cmd.command)}
                            className="flex-shrink-0 p-2 hover:bg-primary/10 rounded-md transition-colors"
                            title="Copy to clipboard"
                          >
                            {copiedCommand === cmd.command ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div 
              className="mt-6 pt-4 border-t text-xs text-muted-foreground"
              style={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
            >
              <p className="p-3 rounded">
                <strong>💡 Pro Tip:</strong> Replace <code className="px-1 py-0.5 bg-muted rounded">&lt;placeholders&gt;</code> with your actual values. 
                For example, <code className="px-1 py-0.5 bg-muted rounded">git add index.html</code> instead of <code className="px-1 py-0.5 bg-muted rounded">git add &lt;file&gt;</code>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

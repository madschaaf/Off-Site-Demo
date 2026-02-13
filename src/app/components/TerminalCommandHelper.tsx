import { useState } from "react";
import { ChevronDown, Copy, Check, Terminal, Monitor } from "lucide-react";

interface TerminalCommand {
  command: string;
  description: string;
  category: string;
  os?: 'mac' | 'windows' | 'both';
}

export function TerminalCommandHelper() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [selectedOS, setSelectedOS] = useState<'mac' | 'windows'>('mac');

  const terminalCommands: TerminalCommand[] = [
    // Opening Terminal
    {
      category: "Opening Terminal",
      command: "⌘ Cmd + Space → Type 'Terminal' → Enter",
      description: "Quick way to open Terminal on Mac",
      os: "mac"
    },
    {
      category: "Opening Terminal",
      command: "⊞ Windows → Type 'Git Bash' → Enter",
      description: "Quick way to open Git Bash on Windows",
      os: "windows"
    },
    
    // Navigation Basics
    {
      category: "Navigation Basics",
      command: "pwd",
      description: "Print Working Directory (pwd) - shows your current location/path",
      os: "both"
    },
    {
      category: "Navigation Basics",
      command: "ls",
      description: "List files (ls) and folders in current directory",
      os: "both"
    },
    {
      category: "Navigation Basics",
      command: "cd ~",
      description: "Go to your home directory (starting point)",
      os: "both"
    },
    {
      category: "Navigation Basics",
      command: "cd Documents",
      description: "Change directory (cd) to Documents folder only if it exists in current location",
      os: "both"
    },
    {
      category: "Navigation Basics",
      command: "cd ..",
      description: "Go back one directory level (move up)",
      os: "both"
    },
    
    // Useful Commands
    {
      category: "Useful Commands",
      command: "clear",
      description: "Clear the terminal screen",
      os: "both"
    },
    {
      category: "Useful Commands",
      command: "ls -la",
      description: "List all files including hidden ones, with details",
      os: "both"
    },
    {
      category: "Useful Commands",
      command: "mkdir <folder-name>",
      description: "Create a new folder: mkdir (make directory)",
      os: "both"
    },
    {
      category: "Useful Commands",
      command: "touch <filename>",
      description: "Create a new empty file: touch (create file)",
      os: "both"
    },
    {
      category: "Useful Commands",
      command: "cat <filename>",
      description: "Display contents of a file: cat (concatenate)",
      os: "both"
    }
  ];

  const copyToClipboard = async (command: string) => {
    // Remove the instruction part for Mac/Windows opening commands
    const cleanCommand = command.includes('→') ? command.split('→')[0].trim() : command;
    
    try {
      await navigator.clipboard.writeText(cleanCommand);
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Filter commands based on selected OS
  const filteredCommands = terminalCommands.filter(cmd => 
    cmd.os === 'both' || cmd.os === selectedOS
  );

  // Group filtered commands by category
  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) {
      acc[cmd.category] = [];
    }
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, TerminalCommand[]>);

  return (
    <div 
      className="sticky mb-6"
      style={{ 
        top: isOpen ? "16px" : "calc(16px + 72px)", // Adjust based on Git dropdown
        zIndex: isOpen ? 50 : 39, // Higher z-index when open to appear above Git commands
        backgroundColor: "rgba(249, 249, 249, 1)",
        borderBottom: isOpen ? "1px solid var(--border)" : "none",
        transition: "all 0.2s ease"
      }}
    >
      <div className="max-w-[1000px] mx-auto px-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-white border-2 transition-all hover:shadow-md"
          style={{ 
            borderRadius: isOpen ? "12px 12px 0 0" : "12px",
            borderColor: isOpen ? "rgb(139, 92, 246)" : "var(--border)",
            backgroundColor: isOpen ? "rgba(139, 92, 246, 0.05)" : "white",
            boxShadow: isOpen ? "0 4px 6px -1px rgba(139, 92, 246, 0.1)" : "none"
          }}
        >
          <div className="flex items-center gap-3">
            <Monitor className="h-5 w-5" style={{ color: "rgb(139, 92, 246)" }} />
            <div className="text-left">
              <span className="text-base font-bold" style={{ color: "rgb(139, 92, 246)" }}>
                Terminal Command Reference
              </span>
              <p className="text-xs text-muted-foreground mt-0.5">
                Essential terminal navigation commands
              </p>
            </div>
          </div>
          <ChevronDown
            className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
            style={{ color: "rgb(139, 92, 246)" }}
          />
        </button>

        {isOpen && (
          <div
            className="bg-white border-2 border-t-0 p-4 max-h-[70vh] overflow-y-auto"
            style={{ 
              borderRadius: "0 0 12px 12px",
              borderColor: "rgb(139, 92, 246)",
              boxShadow: "0 10px 15px -3px rgba(139, 92, 246, 0.1)"
            }}
          >
            <p className="text-xs text-muted-foreground mb-4 pb-3 border-b">
              💡 Click any command to copy it to your clipboard
            </p>

            {/* OS Selector */}
            <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border-2 border-purple-200">
              <h4 className="text-sm font-bold mb-3" style={{ color: "rgb(139, 92, 246)" }}>
                💻 Select Your Operating System
              </h4>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedOS('mac')}
                  className="flex-1 p-3 rounded-lg border-2 transition-all font-semibold text-sm"
                  style={{
                    borderColor: selectedOS === 'mac' ? "rgb(139, 92, 246)" : "rgb(226, 232, 240)",
                    backgroundColor: selectedOS === 'mac' ? "rgba(139, 92, 246, 0.1)" : "white",
                    color: selectedOS === 'mac' ? "rgb(139, 92, 246)" : "rgb(100, 116, 139)"
                  }}
                >
                  🍎 macOS
                </button>
                <button
                  onClick={() => setSelectedOS('windows')}
                  className="flex-1 p-3 rounded-lg border-2 transition-all font-semibold text-sm"
                  style={{
                    borderColor: selectedOS === 'windows' ? "rgb(139, 92, 246)" : "rgb(226, 232, 240)",
                    backgroundColor: selectedOS === 'windows' ? "rgba(139, 92, 246, 0.1)" : "white",
                    color: selectedOS === 'windows' ? "rgb(139, 92, 246)" : "rgb(100, 116, 139)"
                  }}
                >
                  🪟 Windows
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {Object.entries(groupedCommands).map(([category, commands]) => (
                <div key={category}>
                  <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: "rgb(139, 92, 246)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "rgb(139, 92, 246)" }} />
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {commands.map((cmd, idx) => (
                      <div
                        key={idx}
                        className="group relative p-3 border-2 rounded-lg hover:border-primary transition-all"
                        style={{ 
                          backgroundColor: "rgba(249, 249, 249, 0.5)",
                          borderColor: "rgb(226, 232, 240)"
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
              style={{ backgroundColor: "rgba(139, 92, 246, 0.05)" }}
            >
              <p className="p-3 rounded">
                <strong>💡 Pro Tip:</strong> The terminal is your control center for development. These commands help you navigate folders, see what's inside them, and move around efficiently. Practice makes perfect!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

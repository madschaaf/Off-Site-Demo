import { ArrowLeft, Check, ChevronRight, Clock, Bookmark, Eye, ThumbsUp, Share2, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
// import { LevelTag } from './LevelTag";
import { useState } from 'react';
import { useNavigate } from 'react-router';

// Import step components
import RequestAccess from './Steps/RequestAccess';
import InstallVSCode from './Steps/InstallVSCode';
import InstallNode from './Steps/InstallNode';
import InstallGit from './Steps/InstallGit';
import SetupGithubCopilot from './Steps/SetupGithubCopilot';
import { GitCommandHelper } from './GitCommandHelper';
import { TerminalCommandHelper } from './TerminalCommandHelper';

interface StepByStepProps {
  onBack?: () => void;
}

export function StepByStep({ onBack }: StepByStepProps) {
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const useCaseTitle = "Environment Setup & Configuration";
  const useCaseDescription = "Follow these steps to set up your development environment for the off-site activity.";

  const steps = [
    {
      title: 'Request Secure Access',
      estimatedTime: 10,
      badges: ['Access', 'Security', 'Setup'],
      content: `Request access to GitHub and GitHub Copilot before you begin. This ensures you have the necessary permissions to clone repositories and use AI-assisted coding features during the activity.`,
      instructions: [
        'Navigate to Secure Access Portal (SAP)',
        'Request GitHub Enterprise access',
        'Request GitHub Copilot for your account',
        'Wait for approval (typically a few hours to a day)',
        'You can proceed with other steps while waiting'
      ],
      componentRef: 'RequestAccess'
    },
    {
      title: 'Install Visual Studio Code',
      estimatedTime: 15,
      badges: ['Installation', 'Tools', 'Editor'],
      content: `Download and install Visual Studio Code, the code editor you'll use for the entire activity. VS Code provides excellent Git integration and extension support for AI-assisted development.`,
      instructions: [
        'Visit https://code.visualstudio.com',
        'Download the installer for your operating system',
        'Run the installer and follow the setup wizard',
        'Launch VS Code and verify it opens correctly',
        'Familiarize yourself with the interface (Explorer, Extensions, Terminal)'
      ],
      componentRef: 'InstallVSCode'
    },
    {
      title: 'Install Node.js',
      estimatedTime: 20,
      badges: ['Installation', 'Runtime', 'Development'],
      content: `Install Node.js, the JavaScript runtime required to run React applications locally. Node.js includes npm (Node Package Manager) for managing project dependencies.`,
      instructions: [
        'Visit https://nodejs.org (download LTS version)',
        'Run the installer and follow the setup wizard',
        'Open a terminal/command prompt and verify: node --version',
        'Verify npm is installed: npm --version',
        'Close and reopen your terminal for changes to take effect'
      ],
      componentRef: 'InstallNode'
    },
    {
      title: 'Install Git - Understanding Git Commands',
      estimatedTime: 15,
      badges: ['GitHub', 'Setup', 'Credentials'],
      content: `Configure your GitHub account and set up SSH authentication for seamless repository cloning. This ensures secure communication between your local machine and GitHub.`,
      instructions: [
        'Create a GitHub personal account (or use existing)',
        'Generate SSH key: ssh-keygen -t ed25519 -C "your-email@example.com"',
        'Add SSH key to GitHub (Settings → SSH Keys)',
        'Test SSH connection: ssh -T git@github.com',
        'Configure Git: git config --global user.name "Your Name" && git config --global user.email "your-email@example.com"'
      ],
      componentRef: 'InstallGit'
    },
    {
      title: 'Set Up GitHub Copilot',
      estimatedTime: 10,
      badges: ['Extensions', 'AI Tools', 'Setup'],
      content: `Install GitHub Copilot and GitHub Copilot Chat extensions in VS Code. Extensions are recommended in the project's .vscode/extensions.json file—VS Code will prompt you to install them.`,
      instructions: [
        'Open the Extensions panel in VS Code (Ctrl+Shift+X)',
        'Install "GitHub Copilot" by GitHub',
        'Install "GitHub Copilot Chat" by GitHub',
        'Reload VS Code when prompted',
        'You may be prompted to sign in—this happens in the next step'
      ],
      componentRef: 'SetupGithubCopilot'
    },
    {
      title: 'Clone the Repository',
      estimatedTime: 10,
      badges: ['Git', 'Repository', 'Setup'],
      content: `Clone the pre-configured starter repository that contains a React app from Figma, navbar component, App.tsx, and two blank pages with React starter code. This gives you a solid foundation and prevents merge conflicts.`,
      instructions: [
        'Open VS Code and open a terminal (Ctrl+`)',
        'Run: git clone git@github.com:madschaaf/Off-Site-Activity.git',
        'Navigate to the folder: cd Off-Site-Activity',
        'Review the README.md for project overview',
        'Explore the project structure (nav bar, App.tsx, blank pages)'
      ]
    },
    {
      title: 'Sign Into GitHub from VS Code & Git Basics',
      estimatedTime: 15,
      badges: ['Authentication', 'GitHub', 'Git', 'Version Control'],
      content: `Authenticate with GitHub from VS Code to enable GitHub Copilot and ensure you have access to private repositories. Then learn how to commit and push your changes to GitHub.`,
      instructions: [
        '🔐 Sign into GitHub: Look for the GitHub icon in the bottom-left corner of VS Code, click to sign in and authorize VS Code to access your GitHub account',
        '✅ Verify Copilot is active by checking the bottom status bar',
        '📝 Make changes to your code: Edit any file in your project (try adding a comment to App.tsx)',
        '📊 View changes: Click the Source Control icon in the Activity Bar (left sidebar) or press Ctrl+Shift+G to see modified files',
        '➕ Stage changes: Click the "+" icon next to files you want to commit, or click "+" next to "Changes" to stage all files',
        '💬 Commit changes: Type a descriptive commit message in the text box (e.g., "Add navigation component") and click the ✓ Commit button',
        '🚀 Push to GitHub: Click the "Sync Changes" or "Push" button to upload your commits to GitHub',
        '🔄 Pull updates: Before starting work each session, click "Pull" to get the latest changes from your team',
        '🌿 Create branches: Use the branch icon in the bottom-left to create feature branches for new work',
        '🎉 You\'re ready to collaborate! Your changes are now saved in GitHub and visible to your team'
      ]
    },
  ];

  const totalTime = steps.reduce((acc, step) => acc + step.estimatedTime, 0);

  const toggleStepComplete = (index: number) => {
    setCompletedSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const currentStep = steps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return (
    <>
      {/* Git Command Helper - Sticky at top */}
      <GitCommandHelper />
      
      {/* Terminal Command Helper - Right below Git helper */}
      <TerminalCommandHelper />
      
      <div className="min-h-screen pt-16" style={{ backgroundColor: "rgba(249, 249, 249, 1)" }}>
        <div className="max-w-7xl mx-auto p-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/usecase')}
            className="flex items-center gap-2 mb-6 px-4 py-2 hover:bg-white transition-all group"
            style={{ 
              borderRadius: "8px",
              color: "rgb(0,111,147)",
              fontWeight: "var(--font-weight-bold)",
              fontSize: "14px"
            }}
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Use Case Details</span>
          </button>

          <div className="bg-white p-10" style={{ borderRadius: "16px" }}>
            {/* Header Section */}
            <div style={{ marginBottom: "var(--space-4)" }}>
              <div className="mb-3">
                {/* <LevelTag level={200} /> */}
              </div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl font-bold leading-tight flex-1" style={{ color: "rgb(0,111,147)" }}>
                  {useCaseTitle}
                </h1>
                <button className="ml-4 p-2 hover:bg-slate-100 rounded-md transition-colors">
                  <Bookmark className="h-5 w-5 text-slate-400" />
                </button>
              </div>
              
              {/* Metadata */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <p>Last updated: Feb 11, 2026</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5" />
                    <span>128</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-3.5 w-3.5" />
                    <span>24</span>
                  </div>
                </div>
              </div>

              {/* Total Time */}
              <div className="flex items-center gap-2" style={{ color: "rgb(0,111,147)" }}>
                <Clock className="h-4 w-4" />
                <span className="font-bold">~{totalTime} min total</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left Sidebar - Steps */}
              <div className="lg:col-span-1">
                <div className="bg-slate-50 border-2 border-slate-200 p-6" style={{ borderRadius: '16px' }}>
                  <h4 className="mb-4 font-bold">STEPS ({steps.length})</h4>
                  
                  <div className="space-y-3">
                    {steps.map((step, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-3 p-3 cursor-pointer transition-all ${
                          currentStepIndex === index 
                            ? 'bg-blue-100 border-2 border-blue-500' 
                            : 'border-2 border-transparent hover:bg-slate-100'
                        }`}
                        style={{ borderRadius: '12px' }}
                        onClick={() => setCurrentStepIndex(index)}
                      >
                        <div
                          className="flex items-center justify-center w-6 h-6 rounded-full shrink-0 transition-all"
                          style={{ backgroundColor: completedSteps.includes(index) ? 'rgb(34, 197, 94)' : 'rgb(0,111,147)' }}
                        >
                          {completedSteps.includes(index) ? (
                            <Check className="h-4 w-4 text-white" />
                          ) : (
                            <span className="text-sm font-bold text-white">
                              {index + 1}
                            </span>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm mb-1 font-medium">{step.title}</p>
                          <p className="text-xs text-slate-500">~{step.estimatedTime} min</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Content Area - Step Details */}
              <div className="lg:col-span-3">
                <Card className="border-2 border-slate-200 shadow-md mb-8">
                  <CardContent className="p-8">
                    {/* Step Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-white" style={{ backgroundColor: 'rgb(0,111,147)' }}>
                            {currentStepIndex + 1}
                          </div>
                          <h3 className="text-2xl font-bold">{currentStep.title}</h3>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {currentStep.badges.map((badge, index) => (
                          <Badge key={index} variant="outline">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Separator className="my-6" />

                  {/* Step Content */}
                  <div className="mb-8">
                    {/* Render custom step component if available */}
                    {currentStep.componentRef ? (
                      <div className="prose prose-slate max-w-none">
                        <div className="bg-slate-50 rounded-xl p-8 md:p-10 border-2 border-slate-200">
                          <div className="space-y-6 px-2">
                            {currentStep.componentRef === 'RequestAccess' && <RequestAccess />}
                            {currentStep.componentRef === 'InstallVSCode' && <InstallVSCode />}
                            {currentStep.componentRef === 'InstallNode' && <InstallNode />}
                            {currentStep.componentRef === 'InstallGit' && <InstallGit />}
                            {currentStep.componentRef === 'SetupGithubCopilot' && <SetupGithubCopilot />}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Fallback to generic content if no component */
                      <div className="flex flex-col gap-6">
                        <h4 className="mb-4 font-bold">Overview</h4>
                        <p className="mb-6 text-slate-700">
                          {currentStep.content}
                        </p>

                        <h4 className="mb-4 font-bold">Instructions</h4>
                        <div className="space-y-4">
                          {currentStep.instructions.map((instruction, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 border-2 border-slate-200" style={{ borderRadius: '12px' }}>
                              <div className="w-8 h-8 rounded-full text-white flex items-center justify-center shrink-0 font-bold" style={{ backgroundColor: 'rgb(0,111,147)' }}>
                                {index + 1}
                              </div>
                              <p className="flex-1 text-slate-700">{instruction}</p>
                            </div>
                          ))}
                        </div>

                        {/* Tip Box */}
                        <div className="mt-6 p-4 rounded-lg border-2 bg-blue-50 border-blue-200">
                          <div className="flex gap-3">
                            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-bold text-blue-900 mb-1">💡 Pro Tip</p>
                              <p className="text-sm text-blue-800">
                                Take your time with each step and don't rush. Testing thoroughly after each step will catch issues early and make debugging easier later.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                    <Separator className="my-6" />

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                      <Button
                        className={completedSteps.includes(currentStepIndex) 
                          ? "bg-green-600 hover:bg-green-700 text-white" 
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                        }
                        onClick={() => toggleStepComplete(currentStepIndex)}
                      >
                        {completedSteps.includes(currentStepIndex) ? (
                          <>
                            <Check className="h-4 w-4 mr-2" />
                            Completed
                          </>
                        ) : (
                          'Mark as Complete'
                        )}
                      </Button>
                      {currentStepIndex > 0 && (
                        <Button variant="outline" onClick={handlePrevious}>
                          Previous Step
                        </Button>
                      )}
                      {currentStepIndex < steps.length - 1 && (
                        <Button variant="outline" onClick={handleNext}>
                          Next Step
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      )}
                    </div>

                    <Separator className="my-6" />

                    {/* Progress Indicator */}
                    <div className="text-center">
                      <p className="text-slate-600 mb-3">
                        Progress: {completedSteps.length} of {steps.length} steps completed
                      </p>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Resources Section */}
                <div>
                  <h3 className="text-lg font-bold mb-4" style={{ color: "rgb(0,111,147)" }}>
                    Resources & References
                  </h3>
                  <div className="space-y-3">
                    <div className="p-4 border-2 border-slate-200 rounded-lg bg-slate-50 hover:border-blue-300 transition-colors">
                      <h4 className="font-bold mb-2">📋 Off-Site Activity Template (Figma)</h4>
                      <p className="text-sm text-slate-600 mb-3">View the design template showing what you'll build during the activity.</p>
                      <a 
                        href="https://scout-quilt-85283092.figma.site" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-bold" 
                        style={{ color: "rgb(0,111,147)" }}
                      >
                        Open Template →
                      </a>
                    </div>

                    <div className="p-4 border-2 border-slate-200 rounded-lg bg-slate-50 hover:border-blue-300 transition-colors">
                      <h4 className="font-bold mb-2">🎨 Figma Design File</h4>
                      <p className="text-sm text-slate-600 mb-3">Full Figma project file with all components and design specifications.</p>
                      <a 
                        href="https://www.figma.com/make/Y4Z2pT3sVmmNRetz1uWRfH/Off-Site-Template?t=uspuRFbyqrimOPdL-1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-bold" 
                        style={{ color: "rgb(0,111,147)" }}
                      >
                        View Figma File →
                      </a>
                    </div>

                    <div className="p-4 border-2 border-slate-200 rounded-lg bg-slate-50 hover:border-blue-300 transition-colors">
                      <h4 className="font-bold mb-2">🔌 MCP Servers Documentation</h4>
                      <p className="text-sm text-slate-600 mb-3">Learn about available MCP servers and how to use them during the activity. (Requires GitHub secure access)</p>
                      <p className="text-xs text-slate-500 italic">Note: GitHub secure access required to view this resource</p>
                    </div>

                    <div className="p-4 border-2 border-slate-200 rounded-lg bg-slate-50 hover:border-blue-300 transition-colors">
                      <h4 className="font-bold mb-2">📚 Debugging Tips</h4>
                      <p className="text-sm text-slate-600">
                        <strong>• Use the VS Code terminal</strong> to run commands and see error messages<br/>
                        <strong>• Check the browser console</strong> (F12) for JavaScript errors<br/>
                        <strong>• Use debugger breakpoints</strong> to step through your code<br/>
                        <strong>• Ask GitHub Copilot</strong> to help debug issues with your code<br/>
                        <strong>• Check Git status</strong> with git status to understand repository state
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

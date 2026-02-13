import { Clock, Users, Presentation } from 'lucide-react';

export function ActivityObjectives() {
  return (
    <div 
      className="mb-6 p-6 border-2 bg-white"
      style={{ 
        borderRadius: "12px", 
        borderColor: "rgb(0,111,147)",
        boxShadow: "0 20px 25px -5px rgba(0, 111, 147, 0.15), 0 10px 10px -5px rgba(0, 111, 147, 0.08)"
      }}
    >
      <h3 className="text-sm uppercase tracking-wide font-bold mb-4" style={{ color: "rgb(0,111,147)" }}>
        Activity Agendaå÷
      </h3>

      <div className="space-y-4">
        {/* Session 1: Training & Demo */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div 
              className="flex items-center justify-center w-10 h-10 rounded-lg"
              style={{ backgroundColor: "rgba(0,111,147,0.1)" }}
            >
              <Clock className="h-5 w-5" style={{ color: "rgb(0,111,147)" }} />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-2 mb-2">
              <h4 className="font-bold" style={{ color: "rgb(0,111,147)" }}>Training & Demo</h4>
              <span className="text-sm font-semibold text-slate-600">(1.5 hours)</span>
            </div>
            <p className="text-sm text-slate-600 mb-3">
              Maddy and Dahlia guide team through setup, configuration, and deliver training on vibe coding:
            </p>
            <ul className="space-y-2 pl-5">
              <li className="text-sm text-slate-600 flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span><strong>Development tools and workflow</strong> - Basics and how to collaborate on a project/repo</span>
              </li>
              <li className="text-sm text-slate-600 flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span><strong>MCP servers</strong> - What are they and which ones are available</span>
              </li>
              <li className="text-sm text-slate-600 flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span><strong>Natural language prompting</strong> - AI Agent assisted coding</span>
              </li>
              <li className="text-sm text-slate-600 flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <span><strong>Tips & Tricks</strong> - Best practices and pro tips</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Session 2: Hands-on Project Work */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div 
              className="flex items-center justify-center w-10 h-10 rounded-lg"
              style={{ backgroundColor: "rgba(139, 92, 246, 0.1)" }}
            >
              <Users className="h-5 w-5" style={{ color: "rgb(139, 92, 246)" }} />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-2 mb-2">
              <h4 className="font-bold" style={{ color: "rgb(139, 92, 246)" }}>Team Project Work</h4>
              <span className="text-sm font-semibold text-slate-600">(2 hours)</span>
            </div>
            <p className="text-sm text-slate-600">
              In teams, begin working on your project. Alex will walk around and assist with probing questions to guide your progress.
            </p>
          </div>
        </div>

        {/* Session 3: Presentations */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div 
              className="flex items-center justify-center w-10 h-10 rounded-lg"
              style={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
            >
              <Presentation className="h-5 w-5" style={{ color: "rgb(239, 68, 68)" }} />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-2 mb-2">
              <h4 className="font-bold" style={{ color: "rgb(239, 68, 68)" }}>Team Presentations</h4>
              <span className="text-sm font-semibold text-slate-600">(30 minutes)</span>
            </div>
            <p className="text-sm text-slate-600 mb-2">
              Teams present their projects to the group.
            </p>
            <p className="text-sm text-slate-500 italic">
              ✓ Projects don't need to be complete—we're focusing on the learning process and progress!
            </p>
            <p className="text-sm text-slate-600 mt-2">
              <strong>10 minutes per team</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Total Time */}
      <div 
        className="mt-4 pt-4 border-t-2 border-slate-200 flex items-center justify-between"
      >
        <span className="text-sm font-semibold text-slate-600">Total Duration:</span>
        <span className="text-lg font-bold" style={{ color: "rgb(0,111,147)" }}>4 hours</span>
      </div>
    </div>
  );
}

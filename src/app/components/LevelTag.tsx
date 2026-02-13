// import { Badge } from "./ui/badge";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "./ui/tooltip";
// import { Info } from "lucide-react";

// interface LevelTagProps {
//   level?: '100' | '200' | '300';
// }

// export function LevelTag({ level = '300' }: LevelTagProps) {
//   // Define colors based on level
//   const getLevelColors = () => {
//     switch (level) {
//       case '100':
//         return {
//           borderColor: "rgb(34, 197, 94)",
//           color: "rgb(34, 197, 94)",
//           backgroundColor: "rgba(34, 197, 94, 0.1)",
//           description: "Recommended for beginners getting started"
//         };
//       case '200':
//         return {
//           borderColor: "rgb(59, 130, 246)",
//           color: "rgb(59, 130, 246)",
//           backgroundColor: "rgba(59, 130, 246, 0.1)",
//           description: "Recommended for users with intermediate experience"
//         };
//       case '300':
//         return {
//           borderColor: "rgb(253, 185, 19)",
//           color: "rgb(253, 185, 19)",
//           backgroundColor: "rgba(253, 185, 19, 0.1)",
//           description: "Recommended for advanced users"
//         };
//       default:
//         return {
//           borderColor: "rgb(253, 185, 19)",
//           color: "rgb(253, 185, 19)",
//           backgroundColor: "rgba(253, 185, 19, 0.1)",
//           description: "Recommended for advanced users"
//         };
//     }
//   };

//   const colors = getLevelColors();

//   return (
//     <Tooltip delayDuration={0}>
//       <TooltipTrigger asChild>
//         <span 
//           className="cursor-help inline-flex items-center gap-1.5 transition-colors border"
//           style={{ 
//             borderColor: colors.borderColor,
//             color: colors.color,
//             backgroundColor: colors.backgroundColor,
//             fontSize: "10px",
//             padding: "3px 6px",
//             height: "20px",
//             borderRadius: "var(--radius)",
//             fontWeight: "var(--font-weight-bold)"
//           }}
//         >
//           <span>{level} Level</span>
//           <Info className="h-3 w-3" />
//         </span>
//       </TooltipTrigger>
//       <TooltipContent side="bottom" className="max-w-[280px] text-center p-3">
//         <p className="font-[--font-weight-regular]">{colors.description}</p>
//       </TooltipContent>
//     </Tooltip>
//   );
// }

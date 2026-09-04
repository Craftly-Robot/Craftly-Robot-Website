export interface ProductScene {
  product: "workspace" | "robot";
  title: string;
  description: string;
  kind:
    "workflow" | "network" | "messages" | "schedule" | "review" | "resources";
  steps: readonly [string, string, string];
  icon:
    | "work"
    | "bell"
    | "chat"
    | "users"
    | "flow"
    | "resource"
    | "agent"
    | "calendar"
    | "chart"
    | "plug"
    | "code"
    | "search"
    | "shield"
    | "test"
    | "git"
    | "cloud"
    | "lock";
  detail: string;
  cta?: { label: string; to: string };
}

function scene(
  product: ProductScene["product"],
  title: string,
  kind: ProductScene["kind"],
  icon: ProductScene["icon"],
  steps: ProductScene["steps"],
  detail: string,
): ProductScene {
  return {
    product,
    title,
    kind,
    icon,
    steps,
    detail,
    description: `Illustrative ${title.toLowerCase()} view: ${steps.join(", ")}. ${detail}`,
  };
}

// Marketing-only examples. Never use personal data, live metrics, or production state here.
export const productScenes = {
  "workspace-features": scene(
    "workspace",
    "An organization, connected",
    "network",
    "users",
    ["People & roles", "Tasks & reporting", "Shared resources"],
    "One workspace for organizational work",
  ),
  "workspace-work": scene(
    "workspace",
    "Work, with accountability",
    "workflow",
    "work",
    ["Check in", "Submit work", "Review evidence"],
    "Presence and contributions in context",
  ),
  "workspace-notifications": scene(
    "workspace",
    "The updates that matter",
    "messages",
    "bell",
    ["New notice published", "Task assigned to your team", "Review requested"],
    "Keep decisions and work visible",
  ),
  "workspace-collaboration": scene(
    "workspace",
    "A shared team conversation",
    "messages",
    "users",
    ["Project brief shared", "Team shares an update", "Next steps confirmed"],
    "Communication stays connected to work",
  ),
  "workspace-messaging": scene(
    "workspace",
    "A direct line to your team",
    "messages",
    "chat",
    [
      "Request clarification",
      "Share the relevant context",
      "Confirm the next step",
    ],
    "Focused conversations, clear follow-up",
  ),
  "workspace-workflows": scene(
    "workspace",
    "A clear path for work",
    "workflow",
    "flow",
    ["Define the task", "Assign responsibility", "Review the outcome"],
    "Structure work around your organization",
  ),
  "workspace-resources": scene(
    "workspace",
    "Resources where they belong",
    "resources",
    "resource",
    ["Department playbook", "Project materials", "Shared resources"],
    "Keep the right materials within reach",
  ),
  "workspace-subagents": scene(
    "workspace",
    "Specialists working together",
    "network",
    "agent",
    ["Research context", "Explore approaches", "Bring findings together"],
    "Illustrative parallel task coordination",
  ),
  "workspace-schedule": scene(
    "workspace",
    "Routine work, scheduled",
    "schedule",
    "calendar",
    ["Define a routine", "Choose its schedule", "Review the run"],
    "Give recurring work a clear rhythm",
  ),
  "workspace-analytics": scene(
    "workspace",
    "Understand the work",
    "review",
    "chart",
    ["Activity collected", "Contributions in context", "Performance review"],
    "An illustrative review, not live metrics",
  ),
  "workspace-integrations": scene(
    "workspace",
    "Tools in a shared context",
    "network",
    "plug",
    ["Workspace", "Connected tool", "Shared workflow"],
    "Bring external tools into the workflow",
  ),
  "robot-engineering": scene(
    "robot",
    "From brief to implementation",
    "workflow",
    "code",
    ["Understand the goal", "Plan the changes", "Verify the result"],
    "Illustrative engineering workflow",
  ),
  "robot-codebase": scene(
    "robot",
    "Understand the codebase",
    "network",
    "search",
    ["Source files", "Dependencies", "Architecture"],
    "Build context before proposing a change",
  ),
  "robot-refactoring": scene(
    "robot",
    "Change with context",
    "workflow",
    "code",
    ["Inspect the code", "Refactor a module", "Verify behavior"],
    "Keep the purpose of the code in view",
  ),
  "robot-tests": scene(
    "robot",
    "Tests around the behavior",
    "review",
    "test",
    ["Identify scenarios", "Prepare test cases", "Review test results"],
    "Coverage is illustrated, not measured",
  ),
  "robot-reviews": scene(
    "robot",
    "A second look at the change",
    "review",
    "git",
    ["Read the diff", "Inspect potential risks", "Review the findings"],
    "A focused pull request review",
  ),
  "robot-ci": scene(
    "robot",
    "Changes through verification",
    "workflow",
    "git",
    ["Propose a change", "Run project checks", "Inspect the result"],
    "Verification before the next step",
  ),
  "robot-multiagent": scene(
    "robot",
    "Specialized work, coordinated",
    "network",
    "agent",
    ["Research", "Implementation", "Verification"],
    "Agents contribute to a shared task",
  ),
  "robot-sync": scene(
    "robot",
    "Keep the shared context clear",
    "network",
    "flow",
    ["Task state", "Agent updates", "Shared context"],
    "Coordinate work across participants",
  ),
  "robot-security": scene(
    "robot",
    "Inspect before release",
    "review",
    "shield",
    ["Inspect the surface", "Assess findings", "Review mitigations"],
    "An illustrative security review",
  ),
  "robot-dependencies": scene(
    "robot",
    "Dependencies in context",
    "resources",
    "resource",
    ["Project packages", "Proposed updates", "Compatibility checks"],
    "Review changes to the dependency tree",
  ),
  "robot-architecture": scene(
    "robot",
    "See how the system connects",
    "network",
    "code",
    ["Application", "Services", "Dependencies"],
    "An illustrative architecture view",
  ),
  "robot-monitoring": scene(
    "robot",
    "Keep activity visible",
    "review",
    "chart",
    ["Collect activity", "Inspect system state", "Review observations"],
    "Illustrative signals, no live telemetry",
  ),
  "robot-performance": scene(
    "robot",
    "Understand the bottleneck",
    "workflow",
    "chart",
    ["Inspect the workload", "Propose an improvement", "Compare behavior"],
    "Compare the proposed change with the baseline",
  ),
  "robot-human-review": scene(
    "robot",
    "People make the decision",
    "review",
    "users",
    ["Proposed action", "Review the evidence", "Human approval"],
    "Consequential actions remain under human control",
  ),
  "robot-deployment": scene(
    "robot",
    "Prepare the next environment",
    "workflow",
    "cloud",
    ["Prepare the build", "Review the target", "Approve deployment"],
    "An illustrative deployment sequence",
  ),
  "robot-sandbox": scene(
    "robot",
    "A bounded place to work",
    "resources",
    "lock",
    ["Scoped environment", "Permitted tools", "Reviewable output"],
    "Keep the execution context explicit",
  ),
} satisfies Record<string, ProductScene>;

export type ProductSceneId = keyof typeof productScenes;

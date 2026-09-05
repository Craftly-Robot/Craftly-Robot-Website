import supportRequestScreenshot from "../../assets/Support Requests/1.webp";
import projectScreenshot from "../../assets/projects/1.webp";

export interface WorkspaceScreenshot {
  src: string;
  alt: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

export const workspaceScreenshots = {
  members: {
    src: "/assets/Members/1.webp",
    alt: "Craftly Workspace Members view",
    title: "Members",
    description: "Department > Operations > Members view with the member list on the left and profile, rank, and performance details on the right.",
    width: 1913,
    height: 1051,
  },
  training: {
    src: "/assets/training_participation/1.webp",
    alt: "Craftly Workspace Training view",
    title: "Training",
    description: "Training view with the Opt In control at the top and training progress shown below.",
    width: 1918,
    height: 1051,
  },
  support: {
    src: supportRequestScreenshot,
    alt: "Craftly Workspace Support Requests form",
    title: "Support Requests",
    description: "Support Requests modal with Category, Priority, Context, and the Start support action visible.",
    width: 1888,
    height: 1019,
  },
  projects: {
    src: projectScreenshot,
    alt: "Craftly Workspace project details",
    title: "Projects",
    description: "Projects view showing the project brief and the downloadable project package in the Workspace workflow.",
    width: 1879,
    height: 1015,
  },
  welcome: {
    src: "/assets/onboarding_pic/1.webp",
    alt: "Craftly onboarding welcome screen",
    title: "Welcome & Setup",
    description: "Craftly onboarding assistant welcome screen with the Sandbox notice, conversation panel, and message composer.",
    width: 1411,
    height: 944,
  },
  agreement: {
    src: "/assets/agreements/1.webp",
    alt: "Craftly Membership Agreement screen",
    title: "Agreement",
    description: "Craftly Membership Agreement with agreement text on the left and the member's full legal name and signature upload controls on the right.",
    width: 1864,
    height: 1024,
  },
  signature: {
    src: "/assets/agreements/2.webp",
    alt: "Craftly Digital Signature screen",
    title: "Digital Signature",
    description: "Craftly Membership Agreement signature step with the member identity and Digital Signature upload area on the right.",
    width: 1819,
    height: 1008,
  },
  welcomeComplete: {
    src: "/assets/agreements/3.webp",
    alt: "Craftly Workspace onboarding complete screen",
    title: "Completing Onboarding",
    description: "Onboarding completion screen with the Enter Workspace action.",
    width: 1774,
    height: 1042,
  },
  workspaceHome: {
    src: "/assets/agreements/4.webp",
    alt: "Craftly Workspace dashboard",
    title: "Workspace",
    description: "Craftly Workspace overview screen shown after selecting Enter Workspace.",
    width: 1855,
    height: 1038,
  },
} satisfies Record<string, WorkspaceScreenshot>;

const onboardingTopics: Record<number, [string, string]> = {
  2: ["Full Legal Name", "Onboarding assistant asks for your complete name and shows the expected answer format."],
  3: ["Gender", "Onboarding assistant asks you to select and confirm a gender option."],
  4: ["Date of Birth", "Onboarding assistant requests a date in YYYY-MM-DD format and asks for confirmation."],
  5: ["Institution Level", "Onboarding assistant asks whether you currently study at School, College, or University."],
  6: ["Institution Name", "Onboarding assistant asks for the full name of your current school, college, or university."],
  7: ["WhatsApp Number", "Onboarding assistant requests a strict 11-digit Bangladeshi WhatsApp number."],
  8: ["Social Media Profile", "Onboarding assistant requests one public Facebook, Instagram, LinkedIn, or TikTok profile link."],
  9: ["Email Address", "Onboarding assistant confirms the email address provided during onboarding."],
  10: ["Department", "Onboarding assistant asks which department you want to work in."],
  11: ["Problem-Solving & Execution", "Onboarding assistant asks how you would accomplish 30 days of work in six hours."],
  12: ["Problem-Solving & Execution", "Onboarding assistant confirms the answer to the 30-days-of-work-in-six-hours question."],
  13: ["AI Development Prompt", "Onboarding assistant asks for a prompt that would help an AI system deliver an exceptional outcome."],
  14: ["Daily Availability", "Onboarding assistant asks how many hours you can give daily: 1 hour, 2 hours, 4 hours, or 8 hours."],
  15: ["Daily Availability", "Onboarding assistant confirms the daily availability answer and continues to the work-style question."],
  16: ["Department Choice", "Onboarding assistant asks you to choose the department where you can contribute best."],
  17: ["Hardest Achievement", "Onboarding assistant asks about the hardest achievement you have completed."],
  18: ["Technical Achievement", "Onboarding assistant asks about your strongest technical achievement."],
  19: ["Goals at Craftly", "Onboarding assistant asks what you want to achieve at Craftly."],
  20: ["Harmful Social Media Content", "Onboarding assistant asks how you would respond to harmful social media content."],
  21: ["Unfair Instructions", "Onboarding assistant asks how you would respond to an instruction that violates Craftly's Constitution."],
  22: ["Confirmation of Information", "Onboarding assistant asks you to confirm that all information provided is true and written by you."],
};

const onboardingDimensions: Record<number, [number, number]> = {
  2: [1399, 960],
  3: [1397, 964],
  4: [1405, 964],
  5: [1362, 962],
  6: [1392, 957],
  7: [1398, 958],
  8: [1448, 968],
  9: [1423, 971],
  10: [1399, 965],
  11: [1402, 958],
  12: [1424, 971],
  13: [1434, 968],
  14: [1459, 965],
  15: [1434, 962],
  16: [1444, 942],
  17: [1428, 965],
  18: [1419, 967],
  19: [1386, 967],
  20: [1437, 961],
  21: [1447, 967],
  22: [1444, 967],
};

export const onboardingScreenshots: Partial<Record<number, WorkspaceScreenshot>> = Object.fromEntries(
  Object.entries(onboardingTopics).map(([id, [title, description]]) => [
    Number(id),
    {
      src: `/assets/onboarding_pic/${id}.webp`,
      alt: `Craftly onboarding ${title}`,
      title,
      description,
      width: onboardingDimensions[Number(id)][0],
      height: onboardingDimensions[Number(id)][1],
    },
  ]),
) as Partial<Record<number, WorkspaceScreenshot>>;

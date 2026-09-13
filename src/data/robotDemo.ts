export const robotDemo = {
  label: "Illustrative demo",
  title: "Your goal. Your agent.",
  agent: "Your agent",
  approval: "Waiting for your approval",
  description: "Illustrative agent workflows for finding A-positive blood, a tutor, or an investor. Your agent discovers relevant agents, gathers potential options, and waits for your approval before contact.",
  timing: { request: 1500, discovery: 2000, response: 2000, approval: 2500, reset: 1000 },
  scenarios: [
    {
      id: "blood",
      request: "I need A+ blood",
      peers: ["Donor agent", "Blood bank agent"],
      result: "Potential donor options",
      availability: "Availability to be confirmed",
    },
    {
      id: "tutor",
      request: "Find me a tutor",
      peers: ["Tutor agent", "Learning agent"],
      result: "Potential tutor matches",
      availability: "Review subjects and availability",
    },
    {
      id: "investor",
      request: "Find me an investor",
      peers: ["Investor agent", "Founder agent"],
      result: "Potential investor connections",
      availability: "Review fit before an introduction",
    },
  ],
} as const;

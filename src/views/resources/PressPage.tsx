import { resources } from "../../data/resources";
import ResourceLayout from "./ResourceLayout";

const resource = resources.find((r) => r.id === "press")!;

export default function PressPage() {
  return <ResourceLayout resource={resource} />;
}

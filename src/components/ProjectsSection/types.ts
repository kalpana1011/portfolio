export type ProjectFigmaFrame = {
  label: string;
  url: string;
};

export type ProjectCardItem = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "design" | "web";
  externalLabel: string;
  externalUrl: string;
  secondaryLabel?: string;
  secondaryUrl?: string;
  tertiaryLabel?: string;
  tertiaryUrl?: string;
  primaryArtifactUrl?: string;
  primaryArtifactLabel?: string;
  secondaryArtifactUrl?: string;
  secondaryArtifactLabel?: string;
  previewKind: "iframe" | "figma-tabs";
  iframeUrl?: string;
  figmaFrames?: ProjectFigmaFrame[];
};

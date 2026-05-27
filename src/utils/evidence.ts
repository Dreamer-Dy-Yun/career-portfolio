import { Experience } from '../data/experiences';
import { Project } from '../data/projects';
import { EvidenceTag, evidenceTags as allEvidenceTags } from '../data/evidenceTags';
import { JobTarget } from '../data/jobTargets';

export const getEvidenceTagsByIds = (
  ids: string[] = [],
  allTags: EvidenceTag[] = allEvidenceTags,
) => {
  if (!ids.length) {
    return [];
  }

  const idSet = new Set(ids);
  return allTags.filter((tag) => idSet.has(tag.id));
};

export const countProjectsByEvidenceTag = (tagId: string, projects: Project[]): number => {
  return projects.filter((project) => project.evidenceTagIds?.includes(tagId)).length;
};

export const countExperiencesByEvidenceTag = (
  tagId: string,
  experiences: Experience[],
): number => {
  return experiences.filter((experience) => experience.evidenceTagIds?.includes(tagId)).length;
};

export const sortEvidenceTagsForTarget = (
  tags: EvidenceTag[],
  selectedTarget: JobTarget | null,
) => {
  if (!selectedTarget?.preferredRolePerspectives.length) {
    return [...tags];
  }

  const targetPerspectiveSet = new Set(selectedTarget.preferredRolePerspectives);

  const relevant: EvidenceTag[] = [];
  const nonRelevant: EvidenceTag[] = [];

  tags.forEach((tag) => {
    const isRelated = tag.relatedRolePerspectives.some((perspective) =>
      targetPerspectiveSet.has(perspective),
    );

    if (isRelated) {
      relevant.push(tag);
      return;
    }

    nonRelevant.push(tag);
  });

  return [...relevant, ...nonRelevant];
};

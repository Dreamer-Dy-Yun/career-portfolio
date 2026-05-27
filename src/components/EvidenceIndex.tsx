import { Experience } from '../data/experiences';
import { JobTarget } from '../data/jobTargets';
import { Project } from '../data/projects';
import { EvidenceTag } from '../data/evidenceTags';
import {
  countExperiencesByEvidenceTag,
  countProjectsByEvidenceTag,
  sortEvidenceTagsForTarget,
} from '../utils/evidence';

type EvidenceIndexProps = {
  evidenceTags: EvidenceTag[];
  projects: Project[];
  experiences: Experience[];
  selectedJobTarget?: JobTarget | null;
};

const EvidenceIndex = ({
  evidenceTags,
  projects,
  experiences,
  selectedJobTarget = null,
}: EvidenceIndexProps) => {
  const selectedTags = evidenceTags
    .filter(
      (tag) =>
        countProjectsByEvidenceTag(tag.id, projects) > 0 ||
        countExperiencesByEvidenceTag(tag.id, experiences) > 0,
    )
    .map((tag) => ({
      tag,
      projectCount: countProjectsByEvidenceTag(tag.id, projects),
      experienceCount: countExperiencesByEvidenceTag(tag.id, experiences),
    }));

  const sortedTags = sortEvidenceTagsForTarget(
    selectedTags.map((item) => item.tag),
    selectedJobTarget,
  );

  const sortedItems = sortedTags.map((tag) => {
    const found = selectedTags.find((entry) => entry.tag.id === tag.id);
    return {
      tag,
      projectCount: found?.projectCount ?? 0,
      experienceCount: found?.experienceCount ?? 0,
    };
  });

  if (sortedItems.length === 0) {
    return <p className="evidence-index-empty">표시할 근거 태그가 없습니다.</p>;
  }

  return (
    <div className="evidence-index-grid">
      {sortedItems.map(({ tag, projectCount, experienceCount }) => {
        const isRelevantToTarget = selectedJobTarget?.preferredRolePerspectives.some((perspective) =>
          tag.relatedRolePerspectives.includes(perspective),
        );

        return (
          <article className="evidence-index-card" key={tag.id}>
            <h3>
              {tag.label}
              {isRelevantToTarget ? <span className="evidence-target-badge">현재 포커스 핵심</span> : null}
            </h3>
            <p>{tag.description}</p>
            <p>프로젝트: {projectCount}</p>
            <p>경력: {experienceCount}</p>
            <p>관련 관점: {tag.relatedRolePerspectives.join(', ')}</p>
          </article>
        );
      })}
    </div>
  );
};

export default EvidenceIndex;

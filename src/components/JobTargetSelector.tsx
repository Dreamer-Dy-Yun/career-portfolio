type JobTargetOption = {
  id: string;
  label: string;
};

type JobTargetSelectorProps = {
  options: JobTargetOption[];
  selectedId: string;
  onChange: (id: string) => void;
};

const JobTargetSelector = ({ options, selectedId, onChange }: JobTargetSelectorProps) => {
  return (
    <div className="target-selector" aria-label="타겟 직무 선택">
      <p className="filter-label">포지션 선택</p>
      <div className="job-targets" role="group" aria-label="타겟 직무 선택">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={selectedId === option.id ? 'job-target-button active' : 'job-target-button'}
            onClick={() => onChange(option.id)}
            aria-pressed={selectedId === option.id}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobTargetSelector;

type FilterOption = {
  value: string;
};

type FilterBarProps = {
  label: string;
  options: FilterOption[];
  activeValue: string;
  onChange: (value: string) => void;
};

const FilterBar = ({ label, options, activeValue, onChange }: FilterBarProps) => {
  return (
    <div className="filter-bar" aria-label={label}>
      <p className="filter-label">{label}</p>
      <div className="project-filter" role="group" aria-label={label}>
        {options.map((option) => (
          <button
            type="button"
            key={option.value}
            className={activeValue === option.value ? 'filter-button active' : 'filter-button'}
            onClick={() => onChange(option.value)}
            aria-pressed={activeValue === option.value}
          >
            {option.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;

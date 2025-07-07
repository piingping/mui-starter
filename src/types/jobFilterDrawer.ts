export type SelectedFilters = {
  salary?: string;
  tag?: string;
  status?: string;
};

export type JobFilterDrawerProps = {
  open: boolean;
  onClose: () => void;
  selectedFilters: SelectedFilters;
  onFilterChange: (filters: SelectedFilters) => void;
};
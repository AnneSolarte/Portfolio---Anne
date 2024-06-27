import './Filters.css'
import filters from '../../data/filters'
import { useContextHook } from '../../hooks/contextHook'

export const Filters = () => {
  const { selectedFilter, changeSelectedFilter } = useContextHook()
  const checkedInput = (value) => selectedFilter === value

  const handleFilterChange = (e) => {
    changeSelectedFilter(e)
  }

  return (
    <section className='filters-section'>
      {filters.map(filter => (
        <label key={filter.value} className={`filter-label ${checkedInput(filter.value) ? 'selected' : ''}`}>
          <input
            type='radio'
            name='filter'
            value={filter.value}
            checked={checkedInput(filter.value)}
            onChange={handleFilterChange}
            className='filter-input'
          />
          {filter.label}
        </label>
      ))}
    </section>
  )
}

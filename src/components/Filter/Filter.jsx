import { FilterLabel, FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name:
      <FilterInput type="text" value={filter} onChange={changeFilter} />
    </FilterLabel>
  );
}

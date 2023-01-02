import { FilterLabel, FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';

export default function Filter() {
  const filter = useSelector(state => state.filter.text);
  const dispatch = useDispatch();
  // console.log(filter);
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

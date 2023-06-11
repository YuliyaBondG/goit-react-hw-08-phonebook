import { Label, InputStyled } from 'components/Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => dispatch(setFilter(e.target.value));

  return (
    <Label>
      Find contact by name
      <InputStyled
        type="text"
        name="name"
        value={filter}
        placeholder="Enter contact name"
        onChange={changeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </Label>
  );
};

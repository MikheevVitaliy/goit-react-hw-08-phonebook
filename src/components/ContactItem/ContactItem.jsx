import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button, Item, Thumb } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

export const ListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Thumb>
        <p>{name}: </p>
      </Thumb>
      <Thumb>
        <p>{number}</p>
        <Button
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
            toast.success(`${name} is deleted`);
          }}
        >
          Delete
        </Button>
      </Thumb>
    </Item>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

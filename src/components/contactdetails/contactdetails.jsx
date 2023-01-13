import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';

import {
  ContactDetailsContainer,
  ContactAvatar,
  ContactDetailsName,
  ContactDetailsTelephone,
} from './contactdetails.styled';

const ContactDetails = () => {
  const params = useParams();
  const { items } = useSelector(getContacts);

  const getContactForId = id => {
    const index = items.findIndex(contacst => contacst.id === id);
    return {
      id: items[index].id,
      name: items[index].name,
      number: items[index].number,
      avatar: items[index].avatar,
    };
  };

  return (
    <>
      <ContactDetailsContainer>
        <ContactDetailsName>Contact id:{params.id} details</ContactDetailsName>

        <ContactAvatar
          src={getContactForId(params.id).avatar}
          alt={getContactForId(params.id).name}
        />
        <ContactDetailsName>
          name: {getContactForId(params.id).name}
        </ContactDetailsName>
        <ContactDetailsTelephone>
          number: {getContactForId(params.id).number}
        </ContactDetailsTelephone>
      </ContactDetailsContainer>
    </>
  );
};

export default ContactDetails;

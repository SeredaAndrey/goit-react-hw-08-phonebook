import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';

import { getContacts } from 'redux/selectors';

import {
  ContactDetailsContainer,
  ContactAvatar,
  ContactDetailsName,
  ContactDetailsTelephone,
  BackButon,
} from './contactdetails.styled';

const ContactDetails = () => {
  const params = useParams();
  const { items } = useSelector(getContacts);
  const navigate = useNavigate();

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
        <ContactDetailsName>Contact details</ContactDetailsName>

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
        <ContactDetailsTelephone>
          contact id: {getContactForId(params.id).id}
        </ContactDetailsTelephone>
        <BackButon onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </BackButon>
      </ContactDetailsContainer>
    </>
  );
};

export default ContactDetails;

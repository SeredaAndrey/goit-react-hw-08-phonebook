/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import {
  ContactDetailsContainer,
  ContactAvatar,
  ContactDetailsName,
  ContactDetailsMore,
} from './contactdetails.styled';

const ContactDetails = () => {
  const { items } = useSelector(getContacts);

  return (
    <>
      <ContactDetailsContainer>
        <ContactDetailsName>Contact details</ContactDetailsName>

        <ContactAvatar src="" alt={items.name} />
        <ContactDetailsName>name: {items.name}</ContactDetailsName>
        <ContactDetailsMore>number: {items.number}</ContactDetailsMore>
        {/* <BackButon onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </BackButon> */}
      </ContactDetailsContainer>
    </>
  );
};

export default ContactDetails;

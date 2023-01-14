import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';

// import { getFullContacts } from 'redux/selectors';

import {
  ContactDetailsContainer,
  ContactAvatar,
  ContactDetailsName,
  ContactDetailsTelephone,
  BackButon,
} from './contactdetails.styled';
import { useEffect } from 'react';
import { fetchFullContacts } from 'redux/operations';

const ContactDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  // const { items, isLoading, error } = useSelector(getFullContacts);
  const navigate = useNavigate();

  useEffect(() => {
    getContactForId();
  }, []);

  // console.log(items, isLoading, error);
  const getContactForId = () => {
    // dispatch(fetchFullContacts(params.id))
    console.log(dispatch(fetchFullContacts(params.id)));
    // const index = items.findIndex(contacst => contacst.id === id);
    // return {
    //   id: items[index].id,
    //   name: items[index].name,
    //   number: items[index].number,
    //   avatar: items[index].avatar,
    // };
  };

  return (
    <>
      <ContactDetailsContainer>
        <ContactDetailsName>Contact details</ContactDetailsName>

        <ContactAvatar src="" alt="" />
        <ContactDetailsName>name:</ContactDetailsName>
        <ContactDetailsTelephone>number:</ContactDetailsTelephone>
        <ContactDetailsTelephone>contact id:</ContactDetailsTelephone>
        <BackButon onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </BackButon>
      </ContactDetailsContainer>
    </>
  );
};

export default ContactDetails;

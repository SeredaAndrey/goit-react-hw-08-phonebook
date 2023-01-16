/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import {
  ContactDetailsContainer,
  ContactAvatar,
  ContactDetailsName,
  ContactDetailsMore,
  BackButon,
} from './contactdetails.styled';
import { useEffect } from 'react';
import { useState } from 'react';

const ContactDetails = () => {
  const [Details, setDetails] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getContactForId();
  }, []);

  const getContactForId = async () => {
    try {
      const responce = await axios.get(`/contacts/${params.id}/details`);
      setDetails(responce.data[0]);
    } catch (error) {
      return error.message;
    }
  };

  const { avatar, firstname, lastname, number, email, city, id } = Details;

  return (
    <>
      <ContactDetailsContainer>
        <ContactDetailsName>Contact details</ContactDetailsName>

        <ContactAvatar src={avatar} alt={firstname} />
        <ContactDetailsName>firstname: {firstname}</ContactDetailsName>
        <ContactDetailsName>lastname: {lastname}</ContactDetailsName>
        <ContactDetailsMore>number: {number}</ContactDetailsMore>
        <ContactDetailsMore>e-mail adress: {email}</ContactDetailsMore>
        <ContactDetailsMore>city: {city}</ContactDetailsMore>
        <ContactDetailsMore>contact id: {id}</ContactDetailsMore>
        {/* <BackButon onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </BackButon> */}
      </ContactDetailsContainer>
    </>
  );
};

export default ContactDetails;

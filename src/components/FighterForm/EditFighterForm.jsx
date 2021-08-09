/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFighter } from '../../state/customHooks';
// import { useForm } from 'react-hook-form';
import { updateFighter } from '../../services/fetchApi';

const EditFighterForm = ({ name, japanese, origin, birthplace, style, image, powers, job, quote, onSubmit }) => {
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(name, japanese);
  
  return (
   

  );
};

export default EditFighterForm;

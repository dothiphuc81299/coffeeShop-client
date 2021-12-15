import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInforByToken } from '../../redux/action/auth';
import { getEvent } from '../../redux/action/event';
import AboutUs from '../components/aboutus/aboutus'

export default function AboutUsPage() {

  return (
    <AboutUs />
  );
}
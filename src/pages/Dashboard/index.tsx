import React from "react";

import logoImg from '../../assets/logo.svg'

import { Title } from './style';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore Github repositories</Title>
        </>
    );
}

export default Dashboard;

import React from "react";

import logoImg from '../../assets/logo.svg'

import { Title, Form } from './style';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore Github repositories</Title>

            <Form>
                <input placeholder="Repository name"/>
                <button>Search</button>
            </Form>
        </>
    );
}

export default Dashboard;

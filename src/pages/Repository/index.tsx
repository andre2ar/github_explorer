import React from "react";
import {useRouteMatch, Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { Header } from './style';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <Header>
            <img src={logoImg}  alt={'Github explorer'}/>
            <Link to={'/dashboad'}>
                Back
            </Link>
        </Header>
    );
}

export default Repository;

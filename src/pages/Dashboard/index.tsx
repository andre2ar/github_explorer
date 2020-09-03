import React from "react";
import { FiChevronRight} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore Github repositories</Title>

            <Form>
                <input placeholder="Repository name"/>
                <button>Search</button>
            </Form>

            <Repositories>
                <a href={'teste'}>
                    <img src={"https://avatars1.githubusercontent.com/u/4540077?s=460&u=4e7985f5148e78182f8b8184f70d928d6e225b60&v=4"}
                         alt={"André"}/>
                    <div>
                        <strong>
                            BurgerBuilder
                        </strong>
                        <p>
                            Burger builder App
                        </p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard;

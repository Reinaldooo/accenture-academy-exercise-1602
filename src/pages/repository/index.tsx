import React, { useEffect, useState } from "react";
import { AiOutlineRollback, AiFillStar } from "react-icons/ai";
import { useParams, Link } from "react-router-dom";
//
import api from "../../services/api";
import { Header, Content } from "./styles";
import logo from "../../img/logo-github.svg";

interface Params {
  repo: string;
}

interface IRepository {
  full_name: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Repository: React.FC = () => {
  const { repo } = useParams<Params>();
  const [repository, setRepository] = useState<IRepository | null>(null);

  useEffect(() => {
    api.get(`repos/${repo}`).then(({ data }) => {
      setRepository(data);
    });
  }, [repo]);

  return (
    <>
      <Header>
        <img src={logo} alt="Logo App" />
        <Link to="/">
          <AiOutlineRollback size={20} /> Voltar
        </Link>
      </Header>
      {repository && (
        <Content>
          <img src={repository.owner.avatar_url} alt={repository.full_name} />
          <div>
            <h1>{repository.full_name}</h1>
            <p>{repository.description}</p>
            <p>
              <AiFillStar size={20} color={"lightcoral"} />
              {repository.stargazers_count}
            </p>
          </div>
        </Content>
      )}
    </>
  );
};

export default Repository;

import { Link } from "react-router-dom";
import Layout from "./Layout";

export const ErrorPage = () => {
    return (
      <Layout>
        <div className="error-page">
          <div>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas !</p>
          </div>
          <Link to="/accueil">Retourner sur la page d’accueil</Link>
        </div>
      </Layout>
      );
}
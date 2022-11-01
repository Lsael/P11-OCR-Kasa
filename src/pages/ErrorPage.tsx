import { Link, useRouteError } from "react-router-dom";
import Layout from "./Layout";

export const ErrorPage = () => {
  const error:any = useRouteError();

  if(error.status === 404) {
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
  } else {
    return (
      <Layout>
        <div className="error-page">
          <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
          <Link to="/accueil">Retourner sur la page d’accueil</Link>
        </div>
      </Layout>
    );
  }
}
import { useRouteError } from "react-router-dom";

/* interface errorObject {
  data: string | null,
  status: number | null,
  statusText: string | null,
  message: string | null
} */

export const ErrorPage = () => {
  const error:any = useRouteError();
  console.error(error);

  if(error.status === 404) {
      return (
        <div id="error-page">
          <h1>404</h1>
          <p>Oups, cette page n'existe pas !</p>
        </div>
      );
  } else {
      return (
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      );
  }
}
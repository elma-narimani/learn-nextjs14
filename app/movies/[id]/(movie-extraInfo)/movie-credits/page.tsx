import { API_URL } from "../../../../api";
import { Iparams } from "../../page";

const getCredits = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
};

const movieCreditsPage = async ({ params: { id } }: Iparams) => {
  const credits = await getCredits(id);

     return (
      <ul>
     {credits.map((credit) => (
        <li key={credit.id}>
          <h1>{credit.name}</h1>
        </li>
      ))}
    </ul>
     )
   }
   
   export default movieCreditsPage
import { useApp } from "../../components/useApp";
import { RegisterUser } from "../../components/registerUser";

export default function Home() {
  const app = useApp(); 

  return (
    <>      
      <h1>Here is Your MonsterToDo Application</h1>
      {app?.currentUser}
      <p></p>
      <RegisterUser/>
    </>
  )
}

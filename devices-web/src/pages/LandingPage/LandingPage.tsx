import { Accordian, List } from "../../components";
import { CreateForm, NameForm } from "../components";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <>
      <Accordian title="Cadastrar">
        <div>
          <CreateForm />
        </div>
      </Accordian>
      <Accordian title="Consultar">
        <div>
          <NameForm />
        </div>
      </Accordian>
      <Accordian title="Listar">
        <div>
          <List
            items={[
              { title: "name", description: "description" },
              { title: "name", description: "description" },
              { title: "name", description: "description" },
            ]}
          />
        </div>
      </Accordian>
      <Accordian title="Excluir">
        <div>
          <NameForm />
        </div>
      </Accordian>
    </>
  );
};

export default LandingPage;

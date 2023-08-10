import { Accordian, List } from "../../components";
import { CreateForm, MacAddressForm } from "../components";

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
          <MacAddressForm />
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
          <MacAddressForm />
        </div>
      </Accordian>
    </>
  );
};

export default LandingPage;

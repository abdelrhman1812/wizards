export interface ElixirT {
  id: string;
  name: string;
}

export interface WizardT {
  id: string;
  firstName: string | null;
  lastName: string | null;
  elixirs: ElixirT[];
}

import { Campaign } from "./Campaign";
import { Character } from "./Character";

export type RootStackParamList = {
  Login: undefined;
  SelectCharacter: undefined;
  ViewCharacter: { character: Character };
  CreateCharacter: undefined;
  EditCharacter: { character: Character };
  Profile: undefined;
  SelectCampaign: undefined;
  ViewCampaign: { campaign_id: number };
};

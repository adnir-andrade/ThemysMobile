export type Character = {
  id?: number;
  player_id: number;
  name: string;
  level: number;
  gender?: string;
  race: string;
  klass: string;
  klass_level: number;
  hp: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  background?: string;
  points_to_spend: number;
};

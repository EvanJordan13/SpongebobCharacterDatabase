export interface Character {
  id: string;
  name: string;
  species?: string;
  occupation?: string;
  residence?: string;
  imageUrl?: string;
  wikiUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateCharacterInput {
  name: string;
  species?: string;
  occupation?: string;
  residence?: string;
  imageUrl?: string;
  wikiUrl?: string;
}

export interface UpdateCharacterInput extends Partial<CreateCharacterInput> {
  id: string;
}

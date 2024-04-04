export type UserData = {
  id: number;
  email: string;
  token: string;
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type UserDataForState = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
};

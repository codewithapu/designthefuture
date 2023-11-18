import { getSession } from 'next-auth/react';

export const isUserAuthenticated = async () => {
  const session = await getSession();
  return !!session;
};

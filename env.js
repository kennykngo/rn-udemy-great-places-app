const variables = {
  development: {
    googleApiKey: 'AIzaSyB8qg4c7Xor5xz1TkzkXpRNkibJDZSFV7I',
  },
};

const getEnvVariables = () => {
  if (__DEV__) {
    return variables.development;
  }
  return variables.development;
};

export default getEnvVariables;

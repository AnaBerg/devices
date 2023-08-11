export const getBaseUrl = (ip?: string) => {
  if (ip) {
    return `http://${ip}:8080`;
  } else {
    console.error(
      "Configure baseUrl by putting you ip as a parameter of getBaseUrl function"
    );
  }
};

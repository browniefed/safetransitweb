const SERVER = process.env.REACT_APP_SERVER;

export const getReports = async (page = 0) => {
  const res = await fetch(`${SERVER}/reports?page=${page}`);
  const data = await res.json();

  return data;
};

export const postReport = async report => {
  await fetch(`${SERVER}/reports`, {
    method: "POST",
    body: JSON.stringify(report),
  });

};

const SERVER = process.env.REACT_APP_SERVER;

export const loadReports = async (page = 0) => {
  const res = await fetch(`${SERVER}/reports?page=${page}`);
  const data = await res.json();

  return data;
};

export const submitReport = async report => {
  await fetch(`${SERVER}/reports`, {
    method: "POST",
    body: JSON.stringify(report),
  });

};

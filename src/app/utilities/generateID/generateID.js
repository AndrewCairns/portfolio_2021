const pid = process && process.pid ? process.pid.toString(36) : "";

const now = () => {
  const time = Date.now();
  const last = now.last || time;

  return (now.last = time > last ? time : last + 1);
};

const composeID = (prefix) => {
  return (prefix ? prefix : "") + pid + now().toString(36);
};

export default function generateID(prefix = "uniqueID_") {
  return `${composeID(prefix)}`;
}

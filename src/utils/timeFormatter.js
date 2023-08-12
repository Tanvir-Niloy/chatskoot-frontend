export const timeFormatter = (time) => {
  if (!time) return time;
  const date = new Date(time);
  const localeTime = date.toLocaleTimeString('BD', { hour12: true, hour: '2-digit', minute: '2-digit' });
  return localeTime;
};

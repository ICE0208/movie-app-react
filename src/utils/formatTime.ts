const formatTime = (time: number = 0) => {
  const hour = Math.ceil(time / 60);
  const minute = time % 60;
  return `${hour}h ${minute}m`;
};

export default formatTime;

const isMeetingFits = (begin, end, startMetting, duration) => {
  const beginTime = begin.split(':').map((elem) => +elem);
  const endTime = end.split(':').map((elem) => +elem);
  const meetingTime = startMetting.split(':').map((elem) => +elem);

  if ( beginTime[0] > meetingTime[0] ) {
    return false;
  } else if ( beginTime[0] === meetingTime[0] ) {
    if ( beginTime[1] > meetingTime[1] ) {
      return false;
    }
  }
  const durationHours = Math.floor(duration / 60);
  const durationMinutes = duration % 60;
  meetingTime[1] += durationMinutes;
  meetingTime[0] += (durationHours + Math.floor(meetingTime[1] / 60));
  if(meetingTime[0] > endTime[0]) {
    return false;
  } else if ( meetingTime[0] === endTime[0] ){
    if ( endTime[1] < meetingTime[1] ) {
      return false;
    }
  }
  return true;
};

// eslint-disable-next-line no-console
console.log(isMeetingFits('08:00', '17:30', '14:00', 90));

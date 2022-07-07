import dayjs from 'dayjs';

export const formatDate = (dateString: string): string => {
  const parsedDate = dayjs(dateString);
  return parsedDate.format('MMMM D, YYYY');
};

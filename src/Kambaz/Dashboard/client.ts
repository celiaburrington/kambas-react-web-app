import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLEMENT_API = `${REMOTE_SERVER}/api/enrollments`;

export const createEnrollement = async (courseId: string) => {
  const { data } = await axiosWithCredentials.post(
    `${ENROLLEMENT_API}/enroll/${courseId}`
  );
  return data;
};

export const deleteEnrollement = async (courseId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${ENROLLEMENT_API}/unenroll/${courseId}`
  );
  return data;
};

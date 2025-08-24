import { useAuth } from '../context/AuthContext';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const useFileUpload = () => {
  const { getAuthHeaders } = useAuth();

  const uploadFile = async (projectId, file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/projects/${projectId}/files/upload`, {
      method: 'POST',
      headers: getAuthHeaders(true), // Pass true to exclude Content-Type for FormData
      body: formData,
    });

    if (!response.ok) {
      throw new Error('File upload failed');
    }

    return response.json();
  };

  return { uploadFile };
};

export default useFileUpload;

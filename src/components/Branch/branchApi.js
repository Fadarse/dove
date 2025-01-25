import axios from 'axios';

const API_URL = 'http://localhost:5000/api/branches';

export const getAllBranches = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createBranch = async (branchData) => {
    const response = await axios.post(API_URL, branchData);
    return response.data;
};

export const updateBranch = async (id, branchData) => {
    const response = await axios.put(`${API_URL}/${id}`, branchData );
    return response.data;
};





// const branchApi = {
//     getAllBranches: async () => {
//         try {
//             const response = await axios.get(API_URL);
//             return response.data;
//         } catch (error) {
//             console.error('Error fetching branches:', error);
//             throw error;
//         }
//     },

//     getBranchById: async (id) => {
//         try {
//             const response = await axios.get(`${API_URL}/${id}`);
//             return response.data;
//         } catch (error) {
//             console.error(`Error fetching branch with id ${id}:`, error);
//             throw error;
//         }
//     },

//     createBranch: async (branchData) => {
//         try {
//             const response = await axios.post(API_URL, branchData);
//             return response.data;
//         } catch (error) {
//             console.error('Error creating branch:', error);
//             throw error;
//         }
//     },

//     updateBranch: async (id, branchData) => {
//         try {
//             const response = await axios.put(`${API_URL}/${id}`, branchData);
//             return response.data;
//         } catch (error) {
//             console.error(`Error updating branch with id ${id}:`, error);
//             throw error;
//         }
//     },

//     deleteBranch: async (id) => {
//         try {
//             const response = await axios.delete(`${API_URL}/${id}`);
//             return response.data;
//         } catch (error) {
//             console.error(`Error deleting branch with id ${id}:`, error);
//             throw error;
//         }
//     }
// };

// export default branchApi;

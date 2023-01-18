const ID_TOKEN_KEY = "id_token";
const selected_branch_id="";
const userType = "";

export const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const saveToken = token => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};
export const getBranchId = () => {
  return window.localStorage.getItem(selected_branch_id);
};

export const saveBranchId = branch_id => {
  window.localStorage.setItem(selected_branch_id, branch_id);
};

export const destroyBranchId = () => {
  window.localStorage.removeItem(selected_branch_id);
};

export default { getToken, saveToken, destroyToken, getBranchId, saveBranchId, destroyBranchId};

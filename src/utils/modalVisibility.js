import { modalActive, modalHide } from "../redux/ModalReducer";

export const hideModal = (dispatch, modalName) => {
    dispatch(modalHide(modalName));
}

export const showModal = (dispatch, modalName) => {
    dispatch(modalActive(modalName));
}

export const showDeleteModal = (dispatch, modalName, lineHistory) => {
    if(lineHistory.length > 0) {
        dispatch(modalActive(modalName))
    }
}


export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";

const openModal = modal => {
    return {
        type: OPEN_MODAL,
        modal,
    }
};

const closeModal = () => {
    return {
        type: CLOSE_MODAL,
    }
};


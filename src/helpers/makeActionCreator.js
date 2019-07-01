// Fungsi untuk membuat redux action
const makeActionCreator = type => payload => ({ type, payload });

export default makeActionCreator;
const makeActionCreator = type => payload => ({ type, payload });

export default makeActionCreator;
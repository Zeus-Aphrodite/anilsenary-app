// storing profile data which showing currently

const profileInitialState = {
  profile: {
    isFetched: false,
    data: null,
  },
};

const profileReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "SET_PROFILE":
      return {
        ...state,
        profile: { data: action.payload, isFetched: true },
      };
    case "REMOVE_PROFILE_STATE":
      return {
        ...state,
        profile: { data: null, isFetched: false },
      };

    default:
      return state;
  }
};

export { profileInitialState, profileReducer };
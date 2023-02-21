const drawerState = {
    lable: 'Keep',
  };
  
  export const DrawerRedusor = (state = drawerState, action) => {
    switch (action.type) {
      case 'Notes':
        return {
          ...state,
          lable:'Notes',
        };
      case "Reminders":
        return {
          ...state,
          lable: "Reminders",
        };
      case "Edit":
        return {
          ...state,
          lable: "Edit",
        };
      case "Archive":
        return {
          ...state,
          lable: "Archive",
        };
      case "Trash":
        return {
          ...state,
          lable: "Trash",
        };
      default:
        return state;
    }
  };
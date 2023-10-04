
export const toolTypeNotEmpty = (toolType, callback) => {
    if(toolType === "") {
      return;
    }
    callback();
  }
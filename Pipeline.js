function pipeline(...funcs) {
    return (arg) => {
      const funs = [...funcs];
      let result = arg;
      for (let i = 0; i < funs.length; i++) {
        result = funs[i](result);
      }
      return result;
    }
  }
  
  let fun = pipeline(x => x * 3, x => x + 1, x => x / 2);
  console.log(fun(3)); // Should print 5
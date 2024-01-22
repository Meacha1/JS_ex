function createCheckDigit(membershipId) {
      let sum = 0;
      for (let i = 0; i < membershipId.length; i++) {
        sum += Number(membershipId[i]);
      }

      let str = sum.toString();
      if (str.length === 1) {
        return Number(str);
      } else {
        return createCheckDigit(str);
      }
}
  
  console.log(createCheckDigit("55555"));
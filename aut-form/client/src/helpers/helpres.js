const helpers = {
  styles: {
    progressColor: (spent, limit) => {
      const spentInPercent = spent / limit * 100;
      if (spentInPercent <= 33)
        return '#51c513';
      if (spentInPercent <= 66) {
        return '#f1eb2b';
      }
      if (spentInPercent > 66) {
        return '#f51c29';
      }
    },
  }
}

export default helpers;

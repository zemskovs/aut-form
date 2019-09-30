const helpers = {
  styles: {
    categoryBgColor: (spent, limit) => {
      const spentInPercent = spent / limit * 100;
      if (spentInPercent <= 33)
        return 'rgba(160, 247, 186, 0.35)';
      if (spentInPercent <= 66) {
        return 'rgba(235, 236, 138, 0.35)';
      }
      if (spentInPercent > 66) {
        return 'rgba(247, 160, 160, 0.35)';
      }
    },
  }
}

export default helpers;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const threeDaysDiscount = 20;
  const sevenDaysDiscount = 50;
  const dailyRate = 40;
  let totalCost = 0;

  if (days < 1) {
    throw new Error('Days must be at least 1');
  }

  if (days >= 7) {
    totalCost = days * dailyRate - sevenDaysDiscount;
  } else if (days >= 3) {
    totalCost = days * dailyRate - threeDaysDiscount;
  } else {
    totalCost = days * dailyRate;
  }

  return totalCost;
}

module.exports = calculateRentalCost;

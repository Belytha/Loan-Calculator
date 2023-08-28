
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual("130.44");

});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10000,
    years: 5,
    rate: 3.6,
  }
  expect(calculateMonthlyPayment(values)).toEqual("182.37");
});


it("should return 0", function() {
  const values = {
    amount: 0,
    years: 10,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual("0.00");
  
});

/// etc

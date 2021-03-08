describe('FizzBuzz', function() {
  
  it("returns 'fizz' when number is divisible by 3", function() {
    expect(fizzBuzz(3)).toBe('Fizz')
  });

  it("returns 'buzz' when number is divisible by 5", function() {
    expect(fizzBuzz(5)).toBe('Buzz')
  });

  it("returns 'fizzbuzz' when number is divisible by both 3 and 5", function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  });

  it("returns the number if not divisible by 3 or 5", function(){
    expect(fizzBuzz(1)).toBe(1)
  });
});
describe("Player", function() {
  var nonEmpString = "mmm";
  var emptyString = "";
  var undefString = undefined;

  it("non-empty string returns false", function() {
    expect(isEmpty(nonEmpString)).toEqual(false);
  });

  it("empty string returns true", function() {
    expect(isEmpty(emptyString)).toEqual(true);
  });

  it("undef string returns true", function() {
    expect(isEmpty(undefString)).toEqual(true);
  });
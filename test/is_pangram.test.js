const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });
 
  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    const result = isPangram(text);
    // Assert
    expect(result).toEqual(true);
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';
    // Act
    const result = isPangram(text);  
    // Assert
    expect(result).toEqual(true);
  });

  test("missing character 'x'", () => {
    // Arrange
    const text = 'the quick brown fo jumps over the lazy dog';

    // Act
    const badResult = isPangram(text);
    // Assert
    expect(badResult).toEqual(false);
  });

  test('empty sentence', () => {
    // Arrange
    const text = ''
    // Act
    const emptySentence = isPangram(text);
    // Assert
    expect(emptySentence).toEqual(false);

  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'the_quick_brown_fox_jumps_over_the_lazy_dog';
    // Act
    const underscoreSentence = isPangram(text);
    // Assert
    expect(underscoreSentence).toEqual(true);

  });

  test('pangram with numbers', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy 2 dogs'
    // Act
    const numberSentence = isPangram(text);

    // Assert
    expect(numberSentence).toEqual(true);
  });

  // test('missing')
});

# Modify the age.py program you wrote in Exercise 3 of the Input/Output
# chapter. The updated code should use a for loop to display the future
# ages.

# Solution:

age = input('How old are you? ')
print()
print(f'You are {age} years old.')
for year in range(10, 50, 10):
    print(f'In {year} years, you will be {year + int(age)} years old.')
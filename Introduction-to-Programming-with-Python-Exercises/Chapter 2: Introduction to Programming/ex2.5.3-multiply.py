def multiply(a, b):
    return a * b

def input_number(prompt):
    number = input(prompt)
    return float(number)

a = input_number('Enter the first number: ')
b = input_number('Enter the second number: ')

product = multiply(a, b)
print(f'{a} * {b} = {product}')
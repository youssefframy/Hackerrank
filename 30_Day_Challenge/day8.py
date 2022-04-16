# Enter your code here. Read input from STDIN. Print output to STDOUT
# Dictionaries and maps
import sys

n = int(sys.stdin.readline().strip())
phone_book = dict()
for x in range(n):
    name, number = sys.stdin.readline().strip().split(' ')
    phone_book[name] = number

query = sys.stdin.readline().strip()
while query:
    phone_number = phone_book.get(query)
    if phone_number:
        print(f'{query}={phone_number}')
    else:
        print('Not found')
    query = sys.stdin.readline().strip()
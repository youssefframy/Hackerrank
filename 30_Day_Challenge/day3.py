N = int(input().strip())
A = range(2, 6)
B = range(6, 21)
if (N%2 != 0):
    print('Weird')
elif (N in A):
    print('Not Weird')
elif (N in B):
    print('Weird')
elif (N>20):
    print('Not Weird')
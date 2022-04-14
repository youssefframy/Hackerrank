# Enter your code here. Read input from STDIN. Print output to STDOUT
number_of_words = int(input())
for x in range(number_of_words):
    word = input()
    even_array = []
    odd_array = []
    for i in range (len(word)):
        if (i%2 == 0):
            even_array.append(word[i])
        elif (i%2 != 0):
            odd_array.append(word[i])
    even = (''.join(even_array))
    odd = (''.join(odd_array))
    print(f'{even} {odd}')
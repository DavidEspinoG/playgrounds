def insertion_sort(array):
  breakpoint()
  for j in range(1, len(array)):
    current = array[j]
    i = j - 1
    while i >= 0 and current < array[i]:
      array[i + 1] = array[i]
      i -= 1
    array[i + 1] = current
    print(array)
  return array

# iteración 1
# current = 9
# i = 0
# [100, 9, 3, 1]
# [100, 100, 3, 1]
# i = -1
# [9, 100, 3, 1]

# iteración 2
# j = 2
# current = 3
# i = 1
# [100, 9, 9, 1] 
# i = 0
# [100, 100, 9, 1]
# i = -1 
# [3, 100, 9, 1]

array = [2,4,6,8,3]


print(insertion_sort(array))
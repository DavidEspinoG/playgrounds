def quick_sort(array, low, high):
  if low < high:
    pivot = array[high]
    last_smallest = low - 1
    for current in range(low, high):
      if array[current] <= pivot:
        last_smallest += 1
        array[current], array[last_smallest] = array[last_smallest], array[current]
    array[last_smallest + 1], array[high] = array[high], array[last_smallest + 1]
    quick_sort(array, low, last_smallest)
    quick_sort(array, last_smallest + 1, high)



arr = [4,1,0,3,2,6, 1]
quick_sort(arr, 0, len(arr)-1)

print(arr)

